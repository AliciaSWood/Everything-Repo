import React, { useState } from 'react';
import styles from './header.module.scss'
import { Link } from 'react-router-dom';


const Header = ({setSearch, search}) => {
const [submit, setSubmit] = useState("")
// On form submission, the 'search' useState is set to the event's target value (within the input)
    const handleChange =(event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }

    // Now that our form has the input of 'search', we need to decide what to do with it. It is currently just being logged to console
    const onSubmitHandler = (event) => {
        event.preventDefault()
        setSubmit(search)
    }

    
    return (
        <div className = {styles.HeaderDiv}>
            <div>
            <h1>Main Page</h1>

            </div>
            <nav className={styles.Navbar}>
            <ul>
            <li>
              <Link to="/morepage">...More</Link>{" "}
            </li>
            </ul>
            </nav>
            <form onSubmit = {onSubmitHandler}>
            <div>
                <input type = "text" placeholder="Look up something..." onChange = {handleChange} ></input>
            </div>
            <div className = {styles.searchResults}>
            {submit && <p><b>Search results for: </b>{submit}</p>}
            </div>
            </form>
        </div>
    );
};

export default Header;