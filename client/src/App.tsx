import "./App.css";
import TweetComponent from "./TweetComponent";
import SubSection from "./SubSection";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="h-full justify-center flex bg-pink-300">Sidebar</div>
        <div className="justify-between flex flex-col">
          Mid Section Top
          <div className="p-8">
            <TweetComponent />
          </div>
          <div className="border-4 p-8">
            <SubSection />
            Infinite Scroll Component</div>
          Mid Section Bottom
        </div>
        
      </div>
    </div>
  );
}

export default App;
