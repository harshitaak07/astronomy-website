import logo from './logo.svg';
import './App.css';
import HomePage from './components/home';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
