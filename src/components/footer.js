import React from "react";

export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flag : 3,
            result:''
        }
    }
    
    testPromise(){
        let promise = new Promise((resolve,reject)=>{
            if(this.state.flag == 1){
                resolve("操作成功！")
            }else if(this.state.flag == 0){
                reject("操作失败")
            }
        })

        return promise  
    }

    testPromise1(){
        let promise = this.testPromise()
        let a = Promise.reject(promise)
                console.log(promise)
                console.log(a)
                console.log(promise === a)  
    
    }
   

    render(){
        return (
            <div>
                <p>
                    测试promise
                    <button style={{margin:"0 10px"}} onClick={this.testPromise1.bind(this)}>执行</button>
                </p>
                <div>{this.state.result}</div>
            </div>

        )
    }
}