import './App.css';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import MoodClicker from './MoodClicker';
import SignupForm from './SignupForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <MoodClicker />
      <ColorPicker />
      <SignupForm />
    </div>
  );
}

export default App;
