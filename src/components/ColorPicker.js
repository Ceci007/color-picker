import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ColorItem from './ColorItem';
import './ColorPicker.css';

const options = [
  { id: 1, label: "Pale Blue" }, 
  { id: 2, label: "Lake"}, 
  { id: 3, label: "Harvey" },
  { id: 4, label: "Sunshine" },
  { id: 5, label: "Flare" },
  { id: 6, label: "Water" },
  { id: 7, label: "Sensei" },
  { id: 8, label: "Pink" },
  { id: 9, label: "Ember" },
  { id: 10, label: "Indigo" },
  { id: 11, label: "Yoda" },
  { id: 12, label: "Apple" }
];

function ColorPicker() {
  const [isToggled, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const { y } = useSpring({
    y: isToggled ? 180 : 0 
  });

  const menuAppear = useSpring({
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isToggled ? 1 : 0
  });

  const toggling = (e) => {
    e.preventDefault();
    setToggle(!isToggled);
  }

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
  }

  return (
    <main className='container'>
      <form className='form'>
        <label className='label'>Custum Select</label>
        <div 
          className='text'
          onClick={toggling}
        >
          <input 
            className='text__input'
            type="text"
            value={ selectedOption || "Select a gradient"}
            onChange={() => {}}
            placeholder='Select a gradient' 
          />
          <button className='text__button'>
            <animated.i 
              className='fas fa-caret-down'
              style={{ transform: y.interpolate(y => `rotateX(${y}deg)`)}}
            ></animated.i>
          </button>
        </div>
      </form>
      <animated.div style={menuAppear}>
        { isToggled ?
          <div className='dropdown__container'>
            <div className='dropdown-list__container'>
              <ul className='dropdown-list'>
                { options.map((option, i) => {
                  return (
                    <li
                      key={i}
                      onClick={onOptionClicked(option.label)}
                      className='dropdown-list__item'
                    >
                      <ColorItem 
                        name="color"
                        label={option.label}
                        className={`gradient-${i + 1}`}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div> : null
        }
      </animated.div>
    </main>
  )
}

export default ColorPicker;