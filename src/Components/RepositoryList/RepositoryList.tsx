import { useGetRepositoriesQuery } from '../../__generated__/graphql'
import React, { useEffect, useState } from 'react'
import { SearchRepository } from "../SearchComponent/SearchRepository"
import { TableRepositories } from "../Table/TableRepositories";

export const RepositoryList = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [first, setFirst] = useState(20)

    const { data, error, loading } = useGetRepositoriesQuery({
        variables: {
            query: `${searchValue}`,
            first: first,
            after: null,
            before: null,
            CountLanguages_first: 15,
        },
    })


    useEffect(() => {

    }, [searchValue, data])

    return (
        <div style={{ marginTop: '30px' }}>
            {error && <div>Some error: {error.message}</div>}
            <SearchRepository loading={loading} setSearchValue={setSearchValue}></SearchRepository>
            {/*{data && data.search.edges.map((el) => <div key={el.node.id}>{el.node.name}</div>)}*/}
            {data && <TableRepositories data={data}/>}
            <button onClick={() => setFirst((prevState) => prevState + 10)}>fetch more</button>
        </div>
    )
}
