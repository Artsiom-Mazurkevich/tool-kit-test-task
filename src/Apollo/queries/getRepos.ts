import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query GetRepositories(
        $query: String!,
        $first: Int!,
        $last: Int,
        $after: String,
        $before: String,
        $CountLanguages_first: Int!
    ) {
        search(query: $query, type: REPOSITORY, first: $first, last: $last, after: $after, before: $before) {
            codeCount
            repositoryCount
            pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
            }
            edges {
                cursor
                node {
                    ... on Repository {
                        __typename
                        id
                        url
                        name
                        description
                        isPrivate
                        stargazerCount
                        owner {
                            avatarUrl
                            login
                            url
                        }
                        languages(first: $CountLanguages_first) {
                            nodes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;




export interface Repository {
  id: string;
  url: string;
  name: string;
  description: string | null;
  isPrivate: boolean;
  stargazerCount: number;
  owner: {
    avatarUrl: string;
    login: string;
    url: string;
  };
  languages: {
    nodes: {
      name: string;
    }[];
  };
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface RepositoriesData {
  search: {
    codeCount: number;
    repositoryCount: number;
    pageInfo: PageInfo;
    edges: {
      cursor: string;
      node: Repository;
    }[];
  };
}

export interface RepositoriesVariables {
  query: string;
  first: number;
  last?: number;
  after?: string;
  before?: string;
  CountLanguages_first: number;
}