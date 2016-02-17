import * as React from 'react';
import * as ReactDom from 'react-dom';

class HelloWorld extends React.Component {
    constructor(props) {
        super();
        this.status = {};
        this.status.test = props.test;
        console.log(typeof this.status.test);
    }
    xxx() {
        alert('1111');
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'span',
                null,
                'hello world'
            ),
            React.createElement('br', null),
            React.createElement(
                'span',
                { onClick: this.xxx },
                this.status.test.name
            )
        );
    }
}
ReactDom.render(React.createElement(HelloWorld, { test: { name: '111' } }), document.getElementById('app'));
