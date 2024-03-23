import './App.css';
import HomePage from './components/home';
import Login from './components/login';
import RegisterPage from './components/register';

function App() {
  return (
    <div className="App" class="hori">
      <HomePage/>
      <RegisterPage/>
      <Login/>
    </div>
  );
}

export default App;
