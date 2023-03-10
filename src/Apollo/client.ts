import {ApolloClient, InMemoryCache} from '@apollo/client'


const token = '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'


export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${token}`,
        ["User-Agent"]: "node.js"
    },
})
