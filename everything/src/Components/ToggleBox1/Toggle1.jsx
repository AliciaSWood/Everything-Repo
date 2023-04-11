import React, { useState } from 'react';
import styles from './toggle1.module.scss'
const Toggle1 = () => {

    const [toggle, setToggle] = useState(false)

    const toggleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className = {styles.toggleDiv}>
            <div className = {styles.buttoncheck}>
            <button  className = {styles.button}onClick={toggleClick} >Click here to toggle element</button>
            </div>
        <div className = {styles.toggleSmallerDiv}>
            {toggle &&
            <div className = {styles.toToggle} id = "to_Toggle"></div>}
            </div>

        </div>
    );
};

export default Toggle1;