import {ApolloClient, InMemoryCache} from '@apollo/client'
import {key} from "../../test_keys";




export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${key}`,
    },
})
