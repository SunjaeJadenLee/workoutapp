const initialState = {
    theme:'light',
    count: 0,
    countClosed: false
}

const reducer = (state:any=initialState,action) =>{
    switch(action.type){
        case 'SET_COUNT':
            return {...state,count:action.count}
        case 'SET_COUNT_CLOSED':
            return {...state,countClosed:action.countClosed}
        default:
            return {...state}
    }
}

export default reducer