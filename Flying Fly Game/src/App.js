import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const App = () => {
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  const [rot, setrot] = useState(0);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-200, 200, 100);
  const rotate = gsap.utils.random(-360, 360, 30);
  const imageRef = useRef();

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      rotate: rot,
      duration: 0.5,
    });
  }, [xValue, yValue, rot]);
  return (
    <main>
      <div className="container">
        <button
          onClick={() => {
            setxValue(randomX);
            setyValue(randomY);
            setrot(rotate);
          }}
        >
          Move
        </button>
        <img
          ref={imageRef}
          src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png"
          alt=""
        />
      </div>
    </main>
  );
};

export default App;
