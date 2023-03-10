import { CodegenConfig } from '@graphql-codegen/cli';
import {key} from "./test_keys";
const config: CodegenConfig = {
    schema: [
        {
            'https://api.github.com/graphql': {
                headers: {
                    Authorization: `Bearer ${key}`,
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
