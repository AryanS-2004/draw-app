import React, { useRef, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { fabric } from 'fabric';

function Hello() {
  const canvasRef = useRef(null);
  let drawingCanvas: any = null;

  useEffect(() => {
    drawingCanvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });

    drawingCanvas.freeDrawingBrush.color = 'blue';
    drawingCanvas.freeDrawingBrush.width = 2;
  }, []);

  const handleClearCanvas = () => {
    drawingCanvas.clear(); // Clear the canvas by removing all objects
    drawingCanvas.setBackgroundImage('', drawingCanvas.renderAll.bind(drawingCanvas)); // Clear background image if any
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      <button onClick={handleClearCanvas} style={{position: 'absolute', bottom: '0px'}}>Clear Canvas</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
