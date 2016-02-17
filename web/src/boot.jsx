import * as React from 'react';
import * as ReactDom from 'react-dom';

class HelloWorld extends React.Component{
    constructor(props){
        super();
        this.status = {};
        this.status.test = props.test; 
        console.log(typeof this.status.test)
    }
    xxx(){
        alert('1111');
    }
    render(){
        return(
            <div>
                <span>hello world</span><br/>
                <span onClick={this.xxx}>{this.status.test.name}</span>
            </div>  
        )  
    }
}  
ReactDom.render(
    <HelloWorld test={{name: '111'}}/>,
    document.getElementById('app')
)
