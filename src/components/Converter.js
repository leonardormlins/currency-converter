import React, { Component } from 'react';
import './Converter.css'

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
        let sentence = `${this.props.currencyA}_${this.props.currencyB}`; 
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${sentence}`
    }

    render(){
        return (
            <div className="Converter">
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
