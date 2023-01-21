import './App.css';
import Container from './components/Container';
import { UserProvider } from './context/UserContext';
import {ThemeProvider} from './context/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <Container/>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
