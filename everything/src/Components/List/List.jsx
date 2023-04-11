import React, { useState } from 'react';
import styles from  './list.module.scss'

const List = () => {
    
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

   
    // On form submission, the 'search' useState is set to the event's target value (within the input)
        const handleChange =(event) => {
            event.preventDefault()
            setItem(event.target.value)
        }
    
        // Now that our form has the input of 'search', we need to decide what to do with it. It is currently just being logged to console
        const onSubmitHandler = (event) => {
            event.preventDefault()
            setList(list => [...list, item])
            setItem('')
            
        }

        const clearList = () => {
            setList([])
        }

        return (
            <div className = {styles.ListDiv}>
                <div>
                <h2>Create a list</h2>
                </div>
                <form onSubmit = {onSubmitHandler}>
                <div>
                    <input id = "theInput" type = "text" placeholder="Add your item..." onChange = {handleChange} value = {item}></input>
                </div>
                <div className = {styles.searchResults}>
                {list && <p><b>Here is your list: </b></p>}
                <ul>
                        {list.map((eachItem) => <li key = {eachItem}>{eachItem}</li>)}
                </ul>
                </div>

                </form>
                <button onClick = {clearList}>Clear list</button>
            </div>
        );
};

export default List;