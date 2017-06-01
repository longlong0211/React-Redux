import { createStore,bindActionCreators } from 'redux';  
import headerReducer from './../reducers/headerReducer.js'
import {headerAction} from './../actions/headerAction.js'

 /*映射Redux state到组件的属性,当使用了connet执行该方法之后，
 redux会自动将返回的值(state)转换成props传递给子组件 。
 如果使用了combineReducers来整合reducer，那么state下就以每个子reducer的名字为属性，
 而每个子reducer管理各自的数据。 
 */
export const mapStateToProps = (state) => {  
    return { colors: state.headerReducer }  
}  
  
/*映射Redux actions到组件的属性, 当使用connet执行该方法之后，
redux会自动将返回值(dispatch)转换为props传递给子组件。
bindActionCreators函数的作用是将Action和dispath组合起来生成mapDispatchToProps需要的内容，
即是将多个事件操作糅合为一个，更加方便而已，接受2个参数,第一个是Action对象，第二个是dispatch方法。
*/  
export const mapDispatchToProps = dispatch => ({  
    actions:bindActionCreators(headerAction,dispatch)
}) 
