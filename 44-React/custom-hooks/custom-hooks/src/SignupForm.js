import React from "react"
import useFields from "./hooks/useFields"

const SignupForm = () => {
    const [formData, handleChange, resetForm] = useFields({
        username: "",
        email: "",
        password: ""
    })
    const handleSubmit = e => {
        e.preventDefault()
        resetForm()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="username"
                    />
                <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email"
                    />
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignupForm