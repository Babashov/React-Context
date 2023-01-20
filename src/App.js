import './App.css';
import Button from './components/Button';
import {ThemeProvider} from './context/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Button/>
      </ThemeProvider>
    </div>
  );
}

export default App;
