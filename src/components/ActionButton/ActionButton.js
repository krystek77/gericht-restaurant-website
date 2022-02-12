import React from 'react';
import './ActionButton.css';

function ActionButton({label, type="button"}){
    return <button type={type} className='action-button'>{label}</button>
}
export default ActionButton