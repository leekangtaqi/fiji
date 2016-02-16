import * as React from 'react';
import * as ReactDom from 'react-dom';

class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                <span>111</span>
            </div>  
        )  
    }
}  
ReactDom.render(
    <HelloWorld/>,
    document.getElementById('app')
)
