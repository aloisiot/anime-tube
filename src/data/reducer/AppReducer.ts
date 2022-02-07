type action = {
    type: string,
    payload: any
}

export default function AppReducer(state: any, action: action){

    function handlerAnimes(){
        if(action.payload){
            const currentValue = state.animes ? state.animes : []
            const animes = currentValue ? currentValue.concat(action.payload) : action.payload
            const newState = {
                animes: animes,
                currentAnime: state.currentAnime,
                pageOffset: state.pageOffset + 20,
                filteredAnimes: state.filtered
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
                pageOffset: state.pageXOffset,
                filteredAnimes: state.filtered
            }
            return newState
        }
        return state
    }

    function handlerAnimesFilteredByKeyWord(){
        if(action.payload){
            const newState = {
                animes: state.animes,
                currentAnime: state.currentAnime,
                pageOffset: state.pageXOffset,
                filteredAnimes: action.payload
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

        case "filtered-by-keyword":
            return handlerAnimesFilteredByKeyWord()

        default:
            return state
    }
}