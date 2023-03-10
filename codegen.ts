import { CodegenConfig } from '@graphql-codegen/cli';
const token = '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'
// https://api.github.com/graphql
const config: CodegenConfig = {
    schema: [
        {
            'https://api.github.com/graphql': {
                headers: {
                    Authorization: `Bearer ${token}`,
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
