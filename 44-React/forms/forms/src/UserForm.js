import React, {useState} from "react";

const UserForm = () => {
    const [username, setUsername] = useState("AndrewSushi")
    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    return (
        <form>
            <input type="text" placeholder="username" value={username} onChange={handleChange}/>
            <button>Add me to list!</button>
        </form>
    )
}

export default UserForm