import { useRef, useEffect } from "react";
import test from "../assets/dev4.png";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvas2 = canvasRef2.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const context = canvas.getContext("2d");
    const context2 = canvas2.getContext("2d");
    //Our first draw
    for (var x = 1; x < canvas.width; x += 20) {
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
    }

    for (var y = 1; y < canvas.height; y += 20) {
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
    }
    var imageObj1 = new Image();
    imageObj1.src = test;
    imageObj1.onload = () => {
      context2.drawImage(imageObj1, 0, 0, 50, 50);
    };

    context.strokeStyle = "#ddd";
    context.stroke();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} {...props} />
      <canvas ref={canvasRef2} width={50} height={50} {...props} />
    </>
  );
};
export default Canvas;
