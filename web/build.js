import * as React from 'react';
import * as ReactDom from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'span',
                null,
                '111'
            )
        );
    }
}
ReactDom.render(React.createElement(HelloWorld, null), document.getElementById('app'));
