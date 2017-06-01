import headerReducer from './headerReducer.js'
import {combineReducers} from 'redux';

//combineReducers管理多个reducer，生成一个类似reducer的函数，每个reducer管理各自的Action
const rootReducer = combineReducers({
    headerReducer
})

export default rootReducer;