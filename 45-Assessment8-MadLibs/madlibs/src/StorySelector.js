import React from "react";

function StorySelector({ selectedStory, onStoryChange }) {
    const stories = [
        { value: 0, label: "Story 1" },
        { value: 1, label: "Story 2" },
        { value: 2, label: "Story 3" }
    ];

    return (
        <select value={selectedStory} onChange={onStoryChange}>
        {stories.map((story) => (
            <option key={story.value} value={story.value}>
            {story.label}
            </option>
        ))}
        </select>
    )
}

export default StorySelector;
