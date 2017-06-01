import React from 'react'

export default class Header extends React.Component{

    addColor(){
        let colorName = this.refs.addColor.value
        if(colorName.trim() !== ""){
            this.props.addColor(colorName)
            this.refs.addColor.value = ""
        }
    }

    render (){
        return (
            <div>
                <input ref="addColor" type="text" placeholder="请输入一种颜色"/>
                <button style={{margin:"0 10px"}} onClick={this.addColor.bind(this)}>添加颜色</button>
            </div>
        )
    }
}