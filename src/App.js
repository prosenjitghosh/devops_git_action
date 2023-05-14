import './App.css';
import { dayOfTheWeek } from './DayFinder';

function App() {
 

  return (
    <div className="App">
      {`Today is ${dayOfTheWeek()}`}
    </div>
  );
}

export default App;
