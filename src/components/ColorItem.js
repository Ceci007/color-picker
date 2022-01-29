import React from 'react';
import './ColorPicker.css';

const ColorItem = (props) => {
  const { name, label, className } = props;

  return (
    <div className='color-container'>
      <label htmlFor={label}>
        <div className='color-item'>
          <input 
            type="radio"
            value={label}
            name={name}
            id={label}
          />
          <span className={`checkmark ${className}`}></span>
          <h4 className='color-name'>{label}</h4>
        </div>
      </label>
    </div>
  )
}

export default ColorItem;

