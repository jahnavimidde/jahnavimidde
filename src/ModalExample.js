import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  // The modal content is rendered *outside* the normal DOM hierarchy
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>This is a Modal Window</h2>
        <p>Rendered using React Portals!</p>
        <button onClick={onClose} style={styles.button}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root") // target div outside main app
  );
}

export default function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>React Modal with Portal</h2>
      <button onClick={() => setOpen(true)} style={styles.button}>Open Modal</button>

      {/* Show modal only if open is true */}
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}

// Simple inline CSS
const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
  },
  button: {
    padding: "8px 16px",
    marginTop: "10px",
    cursor: "pointer",
  }
};
