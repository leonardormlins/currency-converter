import React, { Component } from 'react';

export default class Converter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currencyA_value: "",
            currencyB_value: 0,
        }

        this.convert = this.convert.bind(this);
    }

    convert(){

    }

    render(){
        return (
            <div className="converter">
                <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
                <input type="input"></input>
                <div>
                    <input type="button" value="Converter"></input>
                </div>
                <p></p>
            </div>
        )
    }
}
