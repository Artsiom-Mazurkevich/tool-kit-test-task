// import {gql} from '@apollo/client'
import {gql} from "../__generated__";

export const ALL_REPOSITORIES = gql(`
    query SearchRepository ($name_repository: String!) {
        search(query: $name_repository, type: REPOSITORY, first: 10) {
            repositoryCount
            edges {
                node {
                    ... on Repository {
                        name
                    }
                }
            }
        }
    }
`)



export const TEST_REPOS = gql(`
    query repository($login: String!, $first: Int) {
  user(login: $login) {
    login
    repositories(first: $first) {
      nodes {
        name
      }
    }
  }
}
`)




// const testquery = (
//     query repository($name: String!, $owner: String!) {
//     repository(name: $name, owner: $owner) {
//         name
//         stargazerCount
//         updatedAt
//         owner {
//             avatarUrl
//             login
//             url
//         }
//         languages {
//             nodes {
//                 name
//             }
//         }
//         description
//     }
// }
// )


export const REPOSITORY_CARDS = gql(`
    query search_repository($query: String!, $first: Int) {
  search_results:search(query: $query, type: REPOSITORY, first: 100) {
    name_repositories:edges {
      repository:node {
        ... on Repository {
          name
          stargazerCount
          updatedAt
          owner {
            avatarUrl
            login
            url
          }
          languages(first: $first) {
            nodes {
              name
            }
          }
          description
        }
      }
    }
  }
}
`)
