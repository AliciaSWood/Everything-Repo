import React, { useState } from 'react';



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
        <div>
            <div>
            <h1>Main Page</h1>
            </div>
            <form onSubmit = {onSubmitHandler}>
            <div>
                <input type = "text" placeholder="Look up something..." onChange = {handleChange} ></input>
            </div>
            {submit && <p>Search results for: {submit}</p>}
            </form>
        </div>
    );
};

export default Header;