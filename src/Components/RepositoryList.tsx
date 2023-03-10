import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client'
import {gql} from 'graphql-tag';
import {useAppDispatch, useAppSelector} from "../Redux/store";
import {setCardsAction} from "../Redux/cardsReducer";
import {Paginator} from "./Paginator";
import {setPageAction, setRepositoryCountAction} from "../Redux/paramsReducer";


type REPOSITORY_OBJECT_TYPE = {
    __typename: "SearchResultItemEdge",
    cursor: string
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
query search_repository($query: String!, $first: Int, $after: String, $before: String) {
  search_results: search(
    query: $query
    type: REPOSITORY
    first: $first
    after: $after
    before: $before
  ) {
    repositoryCount
    name_repositories: edges {
      repository: node {
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
      cursor
    }
  }
}
`)


export const RepositoryList = () => {
    console.log('RepositoryList is called')
    const dispatch = useAppDispatch()
    const {search_results} = useAppSelector(state => state.cardsReducer)
    const {nameRepository} = useAppSelector(state => state.paramsReducer)
    const {repositoryCount} = useAppSelector(state => state.paramsReducer)
    const {currentPage} = useAppSelector(state => state.paramsReducer)
    const {countPerPage} = useAppSelector(state => state.paramsReducer)
    const {after} = useAppSelector(state => state.paramsReducer)
    const {before} = useAppSelector(state => state.paramsReducer)

    const afterCondition = !!after
    const beforeCondition = !!before

    let {loading, data, error} = useQuery<REPOSITORY_CARDS_TYPE, { query: string, first: number, after?: string | undefined, before?: string | undefined }>(REPOSITORY_CARDS, {
        variables: {
            first: 10,
            query: `${nameRepository}`,
            ...(afterCondition && {after: `${after}`}) as Object,
            ...(beforeCondition && {before: `${before}`}) as Object,
        }
    },)

    useEffect(() => {
        console.log('useEffect')
        if (data) {
            dispatch(setCardsAction(data))
            dispatch(setRepositoryCountAction(data.search_results.repositoryCount))
        }
    }, [data])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Some error: {error.message}</div>}
            {search_results.name_repositories.map(value => <div key={value.repository.id}>{value.repository.name}</div>)}
            <Paginator totalCount={repositoryCount} currentPage={currentPage} pageSize={countPerPage} onPageChange={(currentPage) => {dispatch(setPageAction(currentPage))}} className={'pagination-bar'} />
        </div>
    );
};

