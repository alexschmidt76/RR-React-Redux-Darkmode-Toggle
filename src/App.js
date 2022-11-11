import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import ModeInput from './components/ModeInput';
import { useSelector } from 'react-redux';

function App() {
  const color = useSelector((state) => state.mode.color1)
  
  return (
    <div style={{ backgroundColor: color, color: 'black' }} className="App">
      <Nav />
      <ModeInput />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
