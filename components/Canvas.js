import React, { useEffect, useRef, useState } from "react";
const rooms = [
  { name: "room 1", lat: 10, long: 2 },
  { name: "room 2", lat: 2, long: 5 },
  { name: "room 3", lat: 30, long: 20 }
];

export default function Canvas() {
  const [Zwidth, setZwidth] = useState(0);
  const [Zheight, setZheight] = useState(0);
  useEffect(() => {
    const latarr = rooms.map((room) => room.lat);
    setZwidth(Math.max(...latarr) + 2);
    const longarr = rooms.map((room) => room.long);
    setZheight(Math.max(...longarr) + 2);
  }, []);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const ref = useRef();
  const userRef = useRef();

  return (
    <>
      <div className="container">
        <input
          ref={ref}
          value={""}
          autoFocus
          onKeyDown={(e) => {
            switch (e.keyCode) {
              case 40:
                userRef.current.scrollIntoView();
                long !== Zheight && setLong(long + 2);
                break;

              case 38:
                userRef.current.scrollIntoView();
                long !== 0 && setLong(long - 2);
                break;
              case 39:
                userRef.current.scrollIntoView();
                lat !== Zwidth && setLat(lat + 2);
                break;
              case 37:
                userRef.current.scrollIntoView();
                lat !== 0 && setLat(lat - 2);
                break;
              default:
                return;
            }
          }}
          onBlur={() => ref.current.focus()}
        />
        <div className="Canvas">
          <div className="Space">
            <div
              ref={userRef}
              className="userContainer"
              style={{
                transform: `translate(${lat}rem,${long}rem)`
              }}
            >
              <div className="user"></div>
            </div>
            {rooms.map((room) => (
              <div
                className="room"
                style={{
                  transform: `translate(${room.lat}rem,${room.long}rem)`
                }}
              >
                {room.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        container {
          width: 100%;
        }
        input {
          opacity: 0;
        }
        .Canvas {
          background: black;
          width: 25rem;
          height: 25rem;
          margin: 1rem auto;
          overflow: auto;
          position: relative;
        }
        .Space {
          width: ${Zwidth}rem;
          height: ${Zheight}rem;
        }
        .userContainer {
          z-index: 5;
          padding: 2rem;
          width: fit-content;
        }

        .user {
          width: 2rem;
          height: 2rem;
          background: white;
          border-radius: 5rem;
        }
        .room {
          width: 4rem;
          height: 4rem;
          background: grey;
          position: absolute;
          top: 0;
          z-index: 1;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
