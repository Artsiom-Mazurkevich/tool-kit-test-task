import {Input} from "@nextui-org/react";
import {useGetRepositoriesQuery} from "../../__generated__/graphql";



export const RepositoryList = () => {
    console.log('RepositoryList is called')


    const {data, error, loading} = useGetRepositoriesQuery({variables: {first:20, query: "it-incubator"}})


    return (
        <div>
            <Input placeholder={'Search repository...'}></Input>
            {error && <div>Some error: {error.message}</div>}
            {data && data.search.edges?.map(el => <div>{el?.node?.name}</div>)}
        </div>
    );
};

