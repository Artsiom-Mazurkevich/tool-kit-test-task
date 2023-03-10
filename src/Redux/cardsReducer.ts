import {REPOSITORY_CARDS_TYPE} from "../Components/RepositoryList";


const initialState: REPOSITORY_CARDS_TYPE = {
    search_results: {
        name_repositories: [
            {
                __typename: "SearchResultItemEdge",
                repository: {
                    id: '',
                    name: '',
                    description: '',
                    owner: {
                        login: '',
                        url: '',
                        avatarUrl: '',
                        __typename: "User"
                    },
                    languages: {
                        __typename: "LanguageConnection",
                        nodes: [{name: '', __typename: "Language"}]
                    },
                    updatedAt: new Date(),
                    stargazerCount: 0,
                    __typename: "Repository"

                }
            }
        ]
    }
}

type InitailStateType = typeof initialState
export type ActionTypeCardsReducer = ReturnType<typeof setCardsAction>




export const cardsReducer = (state: InitailStateType = initialState, action: ActionTypeCardsReducer): InitailStateType => {
    switch (action.type) {
        case "SET-CARDS":
            return {...action.payload.cards}
        default: return state
    }
}


export const setCardsAction = (cards: REPOSITORY_CARDS_TYPE) => {
    return {
        type: 'SET-CARDS',
        payload: {
            cards
        }
    } as const
}
