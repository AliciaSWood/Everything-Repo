import React, { useState } from 'react';
import styles from './counter.module.scss'

const Counter = () => {

 const [count, setCount] = useState(0)

    return (
        <div className = {styles.CounterDiv}>
            <h2>Counter</h2>
            <div className = {styles.buttonHolder}>
            <button className = {styles.button} onClick = {() => setCount(count-1)}>-</button>
            <p className = {styles.counter}>Count is: {count}</p>
            <button className = {styles.button} onClick = {() => setCount(count +1)}>+</button>
            </div>
        </div>
    );
};

export default Counter;