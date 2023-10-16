import React, {useState} from "react"
import MadLibsForms from "./MadLibsForms"
import StorySelector from "./StorySelector"

const MadLibs = () => {
    const [selectedStory, setSelectedStory] = useState("")
    const handleStoryChange = (e) => {
        setSelectedStory(e.target.value)
    }
    return (
        <div>
            <h1>Madlibs!</h1>
            <StorySelector selectedStory={selectedStory} onStoryChange={handleStoryChange}/>
            <MadLibsForms selectedStory={selectedStory}/>
        </div>
    )
}

export default MadLibs