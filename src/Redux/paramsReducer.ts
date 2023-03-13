



const initialState = {
    currentPage: 1,
    nameRepository: "",
    repositoryCount: 0,
    countPerPage: 10,
    after: null,
    before: null
}

type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setPageAction>
    | ReturnType<typeof setNameRepositoryAction>
    | ReturnType<typeof setRepositoryCountAction>
    | ReturnType<typeof setAfterID>
    | ReturnType<typeof setBeforeID>

export const paramsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET-NAME-REPOSITORY":
            return {...state, nameRepository: action.payload.name}
        case "SET-COUNT-REPOSITORY":
            return {...state, repositoryCount: action.payload.count}
        case "SET-AFTER-ID":
            return {...state, after: action.payload.id}
        case "SET-BEFORE-ID":
            return {...state, before: action.payload.id}
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

export const setRepositoryCountAction = (count: number) => {
    return {
        type: 'SET-COUNT-REPOSITORY',
        payload: {
            count
        }
    } as const
}

export const setAfterID = (id: string) => {
    return {
        type: 'SET-AFTER-ID',
        payload: {
            id
        }
    } as const
}

export const setBeforeID = (id: string) => {
    return {
        type: 'SET-BEFORE-ID',
        payload: {
            id
        }
    } as const
}
