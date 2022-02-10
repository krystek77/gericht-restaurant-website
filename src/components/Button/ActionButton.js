import React from 'react';
import './ActionButton.css';

function ActionButton({label}){
    return <button type="button" className='action-buttton'>{label}</button>
}
export default ActionButton