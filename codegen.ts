import { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            'https://api.github.com/graphql': {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                    ["User-Agent"]: "node.js"
                },
            },
        },
    ],
    documents: ['src/**/*.graphql'],
    generates: {
        './src/__generated__/graphql.ts': {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
            presetConfig: {
                gqlTagName: 'gql',
            },
            config: {
                withHooks: true
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;
