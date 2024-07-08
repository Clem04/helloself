import React, { useEffect, useState } from 'react';
import "./App.css";
import Form from "./components/MemberForm";
import { getLocalStorageData } from './localStorageUtils';
import { BoardData } from './types';
import { BOARD_DATA_KEY, BOARD_SECTIONS } from './constants'; 

function App() {
  const [boardData, setBoardData] = useState<BoardData>({
    unclaimed: [],
    firstContact: [],
    preparingWorkOffer: [],
    sentToTherapist: []
  });

  useEffect(() => {
    const data = getLocalStorageData(BOARD_DATA_KEY, {
      unclaimed: [],
      firstContact: [],
      preparingWorkOffer: [],
      sentToTherapist: []
    });
    setBoardData(data);
  }, []);

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
              <b>{BOARD_SECTIONS.UNCLAIMED}</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              >
                {boardData.unclaimed.map((item, index) => (
                  <div key={index} style={{ marginBottom: "10px", color: "white" }}>
                    {JSON.stringify(item)}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>{BOARD_SECTIONS.FIRST_CONTACT}</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              >
                {boardData.firstContact.map((item, index) => (
                  <div key={index} style={{ marginBottom: "10px", color: "white" }}>
                    {JSON.stringify(item)}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>{BOARD_SECTIONS.PREPARING_WORK_OFFER}</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              >
                {boardData.preparingWorkOffer.map((item, index) => (
                  <div key={index} style={{ marginBottom: "10px", color: "white" }}>
                    {JSON.stringify(item)}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>{BOARD_SECTIONS.SENT_TO_THERAPISTS}</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              >
                {boardData.sentToTherapist.map((item, index) => (
                  <div key={index} style={{ marginBottom: "10px", color: "white" }}>
                    {JSON.stringify(item)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
