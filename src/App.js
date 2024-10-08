import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import './navbar.css'
import Notify from './notify'
import Posts from './posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Notify/>
        <Posts/>
      </header>
    </div>
  );
}

export default App;
