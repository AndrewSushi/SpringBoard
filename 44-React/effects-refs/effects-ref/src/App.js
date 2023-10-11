import React from "react"
import './App.css';
// import Timer from './Timer';
import TimerWrapper from "./TimerWrapper";
import Counter from "./Counter";
import ProfileViewer from "./ProfileViewer";
import ProfileSearchWithSearch from "./ProfileViewerWithSearch";
import Video from "./Video";
import Focuser from "./Focuser";

function App() {
  return (
    <div className="App">
      <Counter />
      <TimerWrapper />
      <ProfileViewer name="AndrewSushi" color="pink"/>
      <ProfileSearchWithSearch />
      <Video />
      <Focuser />
    </div>
  );
}

export default App;
