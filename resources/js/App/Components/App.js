import React from 'react';

export default class App extends React.Component {

    componentDidMount() {
        fetch('/api/person')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });
    }

    render() {
        return (
            <h1>App component</h1>
            
        )
    }
}