import React, { Component } from 'react';

class Try extends Component {

    render() {
        const {value} = this.props
        return (
            <>
                <ul>
                    {value.map((v, i) => {
                        return <li key={i}>{v.fruit}는 {v.taste}</li>
                    })}
                </ul>
            </>
        );
    }
}

export default Try;