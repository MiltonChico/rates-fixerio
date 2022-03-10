import React from 'react'
import propTypes from "prop-types"

const CurrencyInput = (props) => {

    return (
        <div className="currency-input">
            <input type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)}  />
            <select value={props.currency} onChange ={event => props.onCurrencyChange(event.target.value)}>
                {props.currencies.map((currency,i) => (
                    <option key={i} value={currency}>{currency}</option>
                ))}
                </select>   
        </div>
    )
}

CurrencyInput.propTypes = {
    onAmountChange: propTypes.func,
    onCurrencyChange: propTypes.func
}

export default CurrencyInput