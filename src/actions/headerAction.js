import {ACTION_ADD} from './../constant/ActionType.js'

const guid = () => {//生成uuid
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

//定义头部组件的操作事件
export const headerAction = {
    addAction:(colorText) => ({
                            type:ACTION_ADD,
                            color:{
                                id:guid(),
                                color:colorText
                            }
                        })
}

