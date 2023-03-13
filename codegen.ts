import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
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
    documents: ['src/**/*.tsx'],
    generates: {
        './src/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;
