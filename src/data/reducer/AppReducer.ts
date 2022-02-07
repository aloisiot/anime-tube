type action = {
    type: string,
    payload: any
}

export interface initialState {
    currentAnime: any,
    animes: any[],
    pageOffset: number
}

export default function AppReducer(state: any, action: any){

    function handlerAnimes(){
        if(action.payload){
            const currentValue = state.animes ? state.animes : []
            const animes = currentValue ? currentValue.concat(action.payload) : action.payload
            const offset = state.pageOffset
            const newState = {
                animes: animes,
                currentAnime: state.currentAnime,
                pageOffset: state.pageOffset + 20
            }
            return newState
        }
        return state
    }

    function handlerCurrentAnime(){
        if(action.payload && action.payload[0]){
            const newState = {
                animes: state.animes,
                currentAnime: action.payload[0],
                pageOffset: state.pageXOffset
            }
            return newState
        }
        return state
    }

    switch(action.type){
        case "load-animes":
            return handlerAnimes()
        
        case "load-current-anime":
            return handlerCurrentAnime()

        default:
            return state
    }
}