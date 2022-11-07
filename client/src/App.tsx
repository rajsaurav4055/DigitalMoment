import "./App.css";
import FillerWidget from "./FillerWidget";
import Sidebar from "./Sidebar";
import TweetComponent from "./TweetComponent";
import GoogleMap from './GoogleMap'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="flex">
        <div className="h-full justify-center flex bg-pink-300"></div>
        <div className="justify-between flex flex-col">
          <div className="p-8">
            <TweetComponent />
          </div>
          <div className="border-4">Infinite Scroll Component</div>
        </div>
        <div className="">
          <div style={{ height: '20%', width: '20%' }}>
              <GoogleMap />
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br />
          <div>Random Widget</div>
              <FillerWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
