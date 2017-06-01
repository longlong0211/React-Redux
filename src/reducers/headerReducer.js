const initState = [{
    id:"1",
    color:"蓝色"
}]

//reducer是一个纯函数，其返回的状态必须是一个新的状态，容器默认会检测state === newState来判断是否更新组件
let headerReducer = (state=initState,addColor) => {
    switch(addColor.type){
        case "add":
            let newState = state.concat(addColor.color)
            return newState
        default:
            return state 
    }
}

export default headerReducer