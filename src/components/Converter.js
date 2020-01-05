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
        let url = `https://free.currconv.com/api/v7/convert?q=${sentence}&compact=ultra&apiKey=1b7a6ebc052541a5deea`

        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(cont=>{
            let price = cont[sentence];
            let target = this.state.currencyA_value
            let result = (parseFloat(target)*price).toFixed(2);
            console.log(result);
            this.setState({currencyB_value: result});
        })
    }

    render(){
        return (
            <div className="Converter">
                <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
                <input type="input"
                    onChange={(event)=>{this.setState({ currencyA_value: event.target.value })}} ></input>
                <div className="Button">
                    <input type="button"
                        id="submit"
                        value="Converter"
                        onClick={this.convert} ></input>
                </div>
                <div className="Result">
                    <h3>R$ {this.state.currencyB_value}</h3>
                </div>
            </div>
        )
    }
}
