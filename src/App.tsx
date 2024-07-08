import { useEffect, useState } from 'react';
import Form from "./components/MemberForm/MemberForm";
import { getLocalStorageData } from './utils/localStorageUtils';
import { BoardData } from './shared/types';
import { BOARD_DATA_KEY, BOARD_SECTIONS } from './shared/constants'; 
import Board from './components/Board/Board';
import { Container, Header } from './AppStyles';

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
    <Container>
      <Header>
        <b>Kanban Board</b>
      </Header>
      <Form />
      <Board boardData={boardData} boardSections={BOARD_SECTIONS} />
    </Container>
  );
}

export default App;
