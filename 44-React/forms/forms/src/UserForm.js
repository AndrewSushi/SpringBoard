import React, {useState} from "react";

const UserForm = () => {
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    const initialState = {
        username: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    // const handleChange = (e) => {
    //     setUsername(e.target.value)
    // }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {username, email, password} = formData
        alert(`Created user, ${username} with email ${email} & password ${password}`)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input 
                id="username" 
                type="text" 
                name="username"
                placeholder="username" 
                value={formData.username} 
                onChange={handleChange}
            />

            <label htmlFor="email">Email: </label>
            <input 
                id="email" 
                type="text" 
                name="email"
                placeholder="email" 
                value={formData.email} 
                onChange={handleChange}
            />

            <label htmlFor="password">Password: </label>
            <input 
                id="password" 
                type="password" 
                name="password"
                placeholder="password" 
                value={formData.password} 
                onChange={handleChange}
            />
            <button>Add me to list!</button>
        </form>
    )
}

export default UserForm