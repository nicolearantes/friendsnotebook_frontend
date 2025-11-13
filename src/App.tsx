import './App.css';
import Home from './pages/Home';
// import MyNotebooks from './pages/My-notebooks';
// import Login from './pages/Login';
// import HowItWorks from './pages/How-it-works';

function App() {
  return (
    <div className="test">
      <nav>
        <a> How it works? </a>
        <a> My Notebooks </a>

        <Home />
        {/*<HowItWorks />*/}
        {/*<Login />*/}
        {/*<MyNotebooks />*/}
      </nav>
    </div>
  );
}

export default App;
