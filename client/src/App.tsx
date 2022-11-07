import "./App.css";
import TweetComponent from "./TweetComponent";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="h-full justify-center flex bg-pink-300">Sidebar</div>
        <div className="justify-between flex flex-col">
          <div className="p-8">
            <TweetComponent />
          </div>
          <div className="border-4">Infinite Scroll Component</div>
        </div>
        <div className="">
          <div>Google Maps Widget</div>
          <div>Random Widget</div>
        </div>
      </div>
    </div>
  );
}

export default App;
