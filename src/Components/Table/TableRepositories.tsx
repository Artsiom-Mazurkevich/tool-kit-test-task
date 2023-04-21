import React, { FC, useEffect } from "react";
import { Container, Card, Text, Link, Badge } from "@nextui-org/react";
import { GetRepositoriesQuery } from "../../__generated__/graphql";
import { StargazerCount } from "../Rating/StargazerCount";


export const TableRepositories:FC<{data: GetRepositoriesQuery}> = ({data}) => {
  useEffect(() => {
    }, [])
  return (
    <Container css={{mt: "30px"}}>
      {data.search.edges?.map(r => {
        return <Card key={r?.node?.id} variant={"bordered"} css={{ mb: "30px" }}>
          <Card.Header css={{justifyContent: "space-between"}}>
            <Text b>{r?.node?.name} {r?.node?.isPrivate ? <Badge color={'error'}>Private</Badge> : <Badge>Public</Badge>}</Text>
            <StargazerCount countStars={r?.node?.stargazerCount}></StargazerCount>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text><b>Description 🧾 :</b> {r?.node?.description}</Text>
            <Text><b>Languages 🧱 : </b> {r?.node?.languages?.nodes.map(langn => <span style={{marginRight: '7px'}}>#{langn.name}</span>)}</Text>
            <Text><b>Owner 🙂 :</b> <Link href={r?.node?.owner.url}>{r?.node?.owner.login}</Link></Text>
          </Card.Body>
        </Card>;
      })}
    </Container>
  )
};

