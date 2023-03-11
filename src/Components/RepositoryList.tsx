import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client'
import {gql} from 'graphql-tag';
import {useAppDispatch, useAppSelector} from "../Redux/store";
import {setCardsAction} from "../Redux/cardsReducer";


type REPOSITORY_OBJECT_TYPE = {
    __typename: "SearchResultItemEdge",
    repository: {
        id: string
        description: string
        languages: {__typename: 'LanguageConnection', nodes: Array<{__typename: 'Language', name: string}>}
        name: string
        owner: {
            __typename: 'User', avatarUrl: string, login: string, url: string
        }
        stargazerCount: number
        updatedAt: Date
        __typename: "Repository"
    }
}

export type REPOSITORY_CARDS_TYPE = {
    search_results: {
        repositoryCount: number
        name_repositories: Array<REPOSITORY_OBJECT_TYPE>
    }
}



const REPOSITORY_CARDS = gql(`
    query search_repository($query: String!, $first: Int) {
  search_results:search(query: $query, type: REPOSITORY, first: $first) {
    repositoryCount
    name_repositories:edges {
      repository:node {
        ... on Repository {
            id
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


export const RepositoryList = () => {
    console.log('RepositoryList is called')
    const dispatch = useAppDispatch()
    const {search_results} = useAppSelector(state => state.cardsReducer)
    const {nameRepository} = useAppSelector(state => state.paramsReducer)

    const {loading, data, error} = useQuery<REPOSITORY_CARDS_TYPE, { query: string, first: number }>(REPOSITORY_CARDS, {
        variables: {
            query: `${nameRepository}`,
            first: 10,
        }
    },)

    useEffect(() => {
        console.log('useEffect')
        if (data) {
            dispatch(setCardsAction(data))
        }
    }, [data])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Some error: {error.message}</div>}
            {search_results.name_repositories.map(value => <div key={value.repository.id}>{value.repository.name}</div>)}
        </div>
    );
};

