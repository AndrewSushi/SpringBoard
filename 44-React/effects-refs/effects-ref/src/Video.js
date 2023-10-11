import React, {useState, useEffect, useRef} from "react"

const Video = ({src = "https://media.giphy.com/media/hrBmVoBi0dekru0VdP/giphy.mp4"}) => {
    const [speed, setSpeed] = useState(1)
    const videoRef = useRef()
    
    // useEffect(() => {
    //     const video = document.querySelector('video')
    //     video.playbackRate = speed
    // }, [speed])
    useEffect(() => {
        videoRef.current.playbackRate = speed
    }, [speed])

    return (
        <div>
            <video muted autoPlay loop ref={videoRef}>
                <source src={src}/>
            </video>
            <div>
                <button onClick={() => setSpeed(s => s / 2)}>slow</button>
                <button onClick={() => setSpeed(s => s * 2)}>fast</button>
                <p>Current speed: {speed}</p>
            </div>
        </div>
    )
}

export default Video