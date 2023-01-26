import { useState } from "react";

export default function Button() {

    let [buttonColor, setButtonColor] = useState('red');
    let [disabled, setDisabled] = useState(false);

    let newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    
    let onClickButton = () => {
        setButtonColor(buttonColor === 'red' ? 'blue' : 'red')
    }

    let setDisabledToggle = () => {
        setDisabled(!disabled)
    }

    return(
        <div>
            <button 
                style={{backgroundColor: buttonColor}} 
                onClick = {onClickButton}
                disabled = {disabled}
            >Change to {newButtonColor}</button>
            <input 
                type = 'checkbox' 
                onClick = {setDisabledToggle}
            />
        </div>
    )
}