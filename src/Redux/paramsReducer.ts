



const initialState = {
    currentPage: 1,
    nameRepository: "",
    repositoryCount: 0
}

type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setPageAction> | ReturnType<typeof setNameRepositoryAction>

export const paramsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET-NAME-REPOSITORY":
            return {...state, nameRepository: action.payload.name}
        default: return state
    }
}

export const setPageAction = (page: number) => {
  return {
      type: 'SET-PAGE',
      payload: {
          page
      }
  } as const
}


export const setNameRepositoryAction = (name: string) => {
    return {
        type: 'SET-NAME-REPOSITORY',
        payload: {
            name
        }
    } as const
}
