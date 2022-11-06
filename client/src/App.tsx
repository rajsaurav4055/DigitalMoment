import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="h-full justify-center flex bg-pink-300">Sidebar</div>
        <div className="justify-between flex flex-col">
          Mid Section Top
          <div className="border-4">Tweet Component - Khai</div>
          <div className="border-4">Infinite Scroll Component</div>
          Mid Section Bottom
        </div>
      </div>
    </div>
  );
}

export default App;
