import React from "react"

const stories = [
    {
        placeholders: ["noun1", "noun2", "adjective", "verb", "color1", "color2"],
        template: "The adjective color1 noun1 verb in the color2 noun2."
    },
    {
        placeholders: ["noun1", "noun2", "verb", "color"],
        template: "A color noun1 verb the noun2."
    },
    {
        placeholders: ["noun1", "noun2", "adjective1", "adjective2", "color1", "color2", "verb"],
        template: "When the adjective1 color1 noun1 looked at the adjective2 color2 noun2, it verb."
    }
];

export default stories;
