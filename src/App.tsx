import React from "react";
import "./App.css";
import Form from "./components/MemberForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <b>Kanban Board</b>
      </header>

      <div className="App-content">
        <Form />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>Unclaimed</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>First Contact</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>Preparing Work Offer</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>Send to Therapists</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
