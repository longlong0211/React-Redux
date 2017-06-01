import React from 'react'

export default class Content extends React.Component{

    render (){
        return (
            <ul>
                {
                    this.props.colors.map((item,index)=>{
                        return <li key={index} ref={item.id}>{item.color}</li>
                    })
                }
            </ul>
        )
    }
}