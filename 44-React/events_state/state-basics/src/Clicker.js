import React from "react"

const Clicker = () => {
    const fireLasers = (e) => {
        console.log(e)
    }
    return (
        <>
            <button onMouseOver={fireLasers}>CLICK ME!</button>
            <textarea onScroll={fireLasers} rows="2">
            asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf
            asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf
            asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf
            asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf
            asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf
            asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf
            </textarea>    
        </>
    )
}

export default Clicker