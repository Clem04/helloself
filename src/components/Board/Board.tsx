import React from 'react';
import { BoardProps } from '../../shared/types';
import BoardColumn from '../BoardColumn/BoardColumn';
import { BoardContainer } from './BoardStyles';

const Board: React.FC<BoardProps> = ({ boardData, boardSections }) => {
  return (
    <BoardContainer>
      <BoardColumn
        header={boardSections.UNCLAIMED}
        items={boardData.unclaimed}
        />
      <BoardColumn
        header={boardSections.FIRST_CONTACT}
        items={boardData.firstContact}
        backgroundColor='#B9D1DF'
      />
      <BoardColumn
        header={boardSections.PREPARING_WORK_OFFER}
        items={boardData.preparingWorkOffer}
        backgroundColor='#B9D1DF'
      />
      <BoardColumn
        header={boardSections.SENT_TO_THERAPISTS}
        items={boardData.sentToTherapist}
        backgroundColor='#B9D1DF'
      />
    </BoardContainer>
  );
};

export default Board;
