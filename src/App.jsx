import "./index.css";
import { useEffect, useState } from "react";

function Card() {
  const [flipped, setFlipped] = useState(Math.random() > 0.5);
	const flipDuration = 500; // miliseconds
	const [flipTimer, setFlipTimer] = useState(false);

  return (
    <div
      className={`card ${flipped ? "flip" : ""}`}
      onMouseOver={() => {
        setFlipped(!flipped);
				setFlipTimer(false);
				setTimeout(() => setFlipTimer(true), flipDuration);
      }}
    >
      <div className="inner">
        <div className="front"></div>
        <div className="back"></div>
      </div>
    </div>
  );
}

function App() {
	const [windowWidth, setWindowWidth] = useState(1500);
	const [windowHeight, setWindowHeight] = useState(800);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);
		}
		window.addEventListener('resize', handleResize);
		handleResize();
	});

	const generateNumCards = () => {
		const idealCardSize = 50;
		const numCols = Math.floor(windowWidth / idealCardSize);
		const numRows = Math.floor(windowHeight / idealCardSize);
		const numCards = numCols * numRows;
		return numCards;
	}

  return (
    <div className="container">
      {Array(generateNumCards())
        .fill()
        .map((x, idx) => (
          <Card key={idx}/>
        ))}
    </div>
  );
}

export default App;
