import React, { FC, useEffect, useState } from "react";
import { Container, Input, Loading } from "@nextui-org/react";
import {useDebounce} from "../../utils/useDebounce";

export const SearchRepository: FC<{setSearchValue: (value: string) => void; loading: boolean}> = ({setSearchValue, loading}) => {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 800)


    useEffect(() => {
        setSearchValue(debouncedValue)
    }, [debouncedValue])

    return (
        <Container display={'flex'} justify={'center'}>
            <Input width={"500px"} contentRight={loading && <Loading size="xs" />} placeholder={'Search' +
              ' repository...'} aria-label={'search_repository'} value={value} onChange={e => setValue(e.currentTarget.value)}></Input>
        </Container>
    );
};

