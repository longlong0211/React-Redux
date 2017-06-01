import React from 'react';
import Header from './../components/header.js';
import Content from './../components/content.js';
import Footer from './../components/footer.js';

export default class ColorApp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {colors,actions} = this.props;
        return (
                <div>
                    <Header addColor={actions.addAction}/>
                    <Content colors={colors}/>
                    <Footer/>
                </div>
        )
    }
}