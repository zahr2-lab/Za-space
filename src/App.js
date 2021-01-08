import React, { useState } from "react";
import Canvas from "../components/Canvas";
import Menu from "../components/Menu";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="App">
        <div className="topBar">
          <div>Home</div>
          <div>Za Space</div>
          <div onClick={() => setShow(!show)} className="burger">
            |||
          </div>
        </div>
        <div className="main">
          <span
            onClick={() => {
              setShow(false);
            }}
          >
            <Canvas />
          </span>
          {show && <div className="menu">Profile</div>}
        </div>
      </div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>{`
        .App {
          width: 100vw;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .topBar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #09f;
          padding: 0.8rem;
          color: white;
          font-size: 1.2rem;
        }
        .burger {
          letter-spacing: 0px;
          transform: rotate(90deg);
        }
        .main {
          display: flex;
          overflow: hidden;
        }
        .menu {
          width: 20rem;
          background: #09f;
          color: white;
          padding: 2rem;
        }
      `}</style>
    </>
  );
}
