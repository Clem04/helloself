import { useEffect, useState } from 'react';
import MemberForm from "./components/MemberForm/MemberForm";
import { getLocalStorageData, saveLocalStorageData } from './utils/localStorageUtils';
import { BoardData } from './shared/types';
import { BOARD_DATA_KEY, BOARD_SECTIONS } from './shared/constants'; 
import Board from './components/Board/Board';
import { AppContainer, Header } from './AppStyles';
import sampleBoardData from './shared/sampleData';

function App() {
  const [boardData, setBoardData] = useState<BoardData | null>(null);

  useEffect(() => {
    // Already exist in storage?
    const data = getLocalStorageData(BOARD_DATA_KEY, null);
    if (data) {
      setBoardData(data);
    } else {
      // Initialize local storage with sample data
      saveLocalStorageData(BOARD_DATA_KEY, sampleBoardData);
      setBoardData(sampleBoardData);
    }
  }, []);

  const updateBoardData = (newBoardData: BoardData) => {
    setBoardData(newBoardData);
    saveLocalStorageData(BOARD_DATA_KEY, newBoardData);
  };

  if (!boardData) return null;

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
