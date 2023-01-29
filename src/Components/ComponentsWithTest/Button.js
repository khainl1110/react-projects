import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

export default function Button() {

    //let [buttonColorText, setButtonColorText] = useState('blue');
    let [disabled, setDisabled] = useState(false);

    //let newButtonColor = disabled ? 'gray' : buttonColorText === 'red' ? 'blue' : 'red';

    let [buttonColor, setButtonColor] = useState('MediumVioletRed')

    let newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

    // let onClickButton = () => {
    //     setButtonColorText(buttonColorText === 'red' ? 'blue' : 'red')
    // }

    let setDisabledToggle = () => {
        setDisabled(!disabled)
    }

    return(
        <div>
            <button 
                style={{backgroundColor: disabled ? 'gray' : buttonColor}} 
                onClick = {() => setButtonColor(newButtonColor)}
                disabled = {disabled}
            >Change to {replaceCamelWithSpaces(newButtonColor)}</button>
            <input 
                type = 'checkbox' 
                onClick = {setDisabledToggle}
                id="disable-button-checkbox"
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    )
}