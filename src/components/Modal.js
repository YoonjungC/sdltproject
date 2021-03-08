import React, { useRef, useEffect } from "react";

export default function Modal({ setVisible }) {
    const modalRef = useRef(null);

    useEffect(() => {
      document.body.style.overflow = "hidden"
    }, [ setVisible ]) 
    //run everytime a component is mounted 
    //array defines when you want to run the useEffect 
    //when value of setVisible changes, the useEffect will run if setVisible is defined
    //if empty, it will just run whenever the component is mounted
    //can track which values are changing

    return (
      <div
        style={{
          position: "absolute",
          display: "flex",
          direction: "row",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: "100",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
        onClick={(e) => {
          if (modalRef.current.contains(e.target)) {
            return;
          }
          setVisible(false);
        }}
      >
        <div style={{ backgroundColor: "white" }} ref={modalRef}>
          <h1>Course Modal</h1>
          <button onClick={() => setVisible(false)}> close</button>
        </div>
      </div>
    );
  }