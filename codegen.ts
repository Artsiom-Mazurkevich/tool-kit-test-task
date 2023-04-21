import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            'https://api.github.com/graphql': {
                headers: {
                    Authorization: `Bearer ########################################`,
                    ['User-Agent']: 'node.js',
                },
            },
        },
    ],
    documents: ['src/**/*.graphql'],
    generates: {
        './src/__generated__/graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            presetConfig: {
                gqlTagName: 'gql',
            },
            config: {
                withHooks: true,
                addTypename: true,
            },
        },
    },
    ignoreNoDocuments: true,
}

export default config
