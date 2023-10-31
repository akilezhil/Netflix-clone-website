
import './App.css';
import Asked from './components/Asked';
import Footer from './components/Footer';
import Header from './components/Header';
import Phone from './components/Phone';
import TV from './components/TV';
import Watch from './components/Watch';

function App() {
  return (
    <div className="App">
      <Header/>
      <TV/>
      <Phone/>
      <Watch/>
      <Asked/>
      <Footer/>
    </div>
  );
}

export default App;
