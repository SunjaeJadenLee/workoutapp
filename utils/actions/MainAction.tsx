const setCount = (count) =>({
    type:"SET_COUNT",
    count:count
})

const setCountClosed = (countClosed) =>({
    type:'SET_COUNT_CLOSED',
    countClosed:countClosed
})

export { setCount,setCountClosed }