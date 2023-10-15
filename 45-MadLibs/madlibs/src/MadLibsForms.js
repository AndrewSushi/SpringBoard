import React, { useState } from "react";
import stories from "./Stories";

const MadLibsForms = ({ selectedStory }) => {
    selectedStory = selectedStory ? selectedStory : 0
    let selectedStories = stories[selectedStory]
    const placeholder = selectedStories.placeholders
    const initialState = placeholder.reduce((acc, placeholder) => {
        acc[placeholder] = ""
        return acc
    }, {})

    const [formData, setFormData] = useState(initialState)
    const [story, setStory] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((data) => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const selectedTemplate = stories[selectedStory].template
        const placeholders = stories[selectedStory].placeholders
    
        let updatedStory = selectedTemplate
        placeholders.forEach((placeholder, index) => {
            updatedStory = updatedStory.replace(new RegExp(placeholder, "g"), formData[placeholder])
        })
        setStory(updatedStory)
    }
  

    const restart = () => {
        setFormData(initialState)
        setStory()
    }

    return (
        <div>
            {story ? (
                <div>
                <h3>{story}</h3>
                <button onClick={restart}>Restart</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                {placeholder.map((placeholder, index) => (
                    <input
                    key={index}
                    id={placeholder}
                    type="text"
                    name={placeholder}
                    placeholder={placeholder}
                    value={formData[placeholder]}
                    onChange={handleChange}
                    />
                ))}
                <button>Get Story</button>
                </form>
            )}
        </div>
    )
}

export default MadLibsForms
