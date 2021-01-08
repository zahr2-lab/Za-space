import React from "react";
import Canvas from "../components/Canvas";

export default function App() {
  return (
    <>
      <div className="App">
        <div>Za Space</div>
        <Canvas />
      </div>
      <style jsx>{`
        .App {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
