import './App.module.css';
import {RepositoryList} from "../Components/RepositoryList/RepositoryList";
import {Container, Text} from "@nextui-org/react";

function App() {

    return (
        <Container lg>
            <Text h1 size={60} css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                textAlign: "center",
                "@smMax": {
                    fontSize: "40px"
                },
                "@xsMax": {
                    fontSize: "30px"
                }

            }}
                  weight="bold">GraphQL GitHub API</Text>
            <RepositoryList/>
        </Container>
    )
}

export default App
