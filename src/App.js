import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Intro from './components/Intro';
import Trending from "./components/Trending"

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End Of Intro */}

      {/* Trending Sectipn */}
      <div className='trending'>
        <Trending />
      </div>
      {/* End Trending Section */}
    </div>
  );
}

export default App;
