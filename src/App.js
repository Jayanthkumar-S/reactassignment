import logo from './logo.svg';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/cards';
import Tabs  from "./components/LatestPosts"
import Image from './components/image';
import './App.css';

function App() {
  return (
    <div className="App">
      < Header/>
      <Image/>
      <Tabs/>
      <Card/>
      <Footer/>
       
    </div>
  );
}

export default App;
