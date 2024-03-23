import './App.css';
import { Helmet } from 'react-helmet';
import HomePage from './components/home';
import Login from './components/login';
import RegisterPage from './components/register';

function App() {
  return (
    <div className="App" class="hori">
      <Helmet>
        <title>Astronomy</title>
      </Helmet>
      <HomePage/>
      <RegisterPage/>
      <Login/>
    </div>
  );
}

export default App;