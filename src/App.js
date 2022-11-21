import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import './Site.css';

function App() {
  return (
    <div className="Home">     
      <Navbar /> 
      <Content />
      <Footer />   
    </div>
  );
}

export default App;
