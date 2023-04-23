import { useGetRepositoriesQuery } from '../../__generated__/graphql'
import React, { useEffect, useState } from 'react'
import { SearchRepository } from "../SearchComponent/SearchRepository"
import { TableRepositories } from "../Table/TableRepositories";
import { GET_REPOSITORIES, RepositoriesData, RepositoriesVariables } from "../../Apollo/queries/getRepos";
import { useQuery } from "@apollo/client";

export const RepositoryList = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    // const { data, error, loading, fetchMore } = useGetRepositoriesQuery({
    //     variables: {
    //         query: `${searchValue}`,
    //         first: 20,
    //         after: null,
    //         before: null,
    //         CountLanguages_first: 15,
    //     },
    // })
    const { data, loading, error, fetchMore } = useQuery<RepositoriesData, RepositoriesVariables>(
      GET_REPOSITORIES,
      {
          variables: { query: searchValue, first: 10, CountLanguages_first: 5 },
      }
    );


    useEffect(() => {
    }, [searchValue, data])

    const { search } = data!;


    return (
        <div style={{ marginTop: '30px' }}>
            {error && <div>Some error: {error.message}</div>}
            <SearchRepository loading={loading} setSearchValue={setSearchValue}></SearchRepository>
            {data && <TableRepositories data={data}/>}
            {search.pageInfo.hasNextPage && (
              <button onClick={() => fetchMore({ variables: { after: search.pageInfo.endCursor },
                      updateQuery: (prev, { fetchMoreResult }) => {
                          if (!fetchMoreResult) return prev;
                          return {
                              search: {
                                  ...fetchMoreResult.search,
                                  edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
                              },
                          };
                      },
                  })
                }
              >
                  Load more
              </button>
            )}
        </div>
    )
}
