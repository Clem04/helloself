import { useEffect, useState } from 'react';
import MemberForm from "./components/MemberForm/MemberForm";
import { getLocalStorageData, saveLocalStorageData } from './utils/localStorageUtils';
import { BoardData } from './shared/types';
import { BOARD_DATA_KEY, BOARD_SECTIONS } from './shared/constants'; 
import Board from './components/Board/Board';
import { AppContainer, Header } from './AppStyles';

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

  const updateBoardData = (newBoardData: BoardData) => {
    setBoardData(newBoardData);
    saveLocalStorageData(BOARD_DATA_KEY, newBoardData);
  };

  return (
    <AppContainer>
      <Header>
        <b>Kanban Board</b>
      </Header>
      <MemberForm updateBoardData={updateBoardData} />
      <Board boardData={boardData} boardSections={BOARD_SECTIONS} />
    </AppContainer>
  );
}

export default App;
