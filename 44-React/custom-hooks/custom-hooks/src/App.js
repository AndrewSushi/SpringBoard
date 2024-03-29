import './App.css';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import DogDetail from './DogDetail';
import MoodClicker from './MoodClicker';
import SignupForm from './SignupForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <MoodClicker />
      <ColorPicker />
      <SignupForm />
      <DogDetail />
    </div>
  );
}

export default App;
