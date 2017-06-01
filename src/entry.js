import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/rootReducer.js';
import  ColorAppVisible from './containers/connetColorApp.js'

//一个应用只有唯一一个store，Provider组件会保存store给子组件中的connet使用
let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <ColorAppVisible/>
    </Provider>,
    document.getElementById("redux")
)
