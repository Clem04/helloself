import React from 'react';
import { BoardProps } from '../../shared/types';
import BoardColumn from '../BoardColumn/BoardColumn';
import { ColumnContainer } from './BoardStyles';

const Board: React.FC<BoardProps> = ({ boardData, boardSections }) => {
  return (
    <ColumnContainer>
      <BoardColumn
        header={boardSections.UNCLAIMED}
        items={boardData.unclaimed}
      />
      <BoardColumn
        header={boardSections.FIRST_CONTACT}
        items={boardData.firstContact}
      />
      <BoardColumn
        header={boardSections.PREPARING_WORK_OFFER}
        items={boardData.preparingWorkOffer}
      />
      <BoardColumn
        header={boardSections.SENT_TO_THERAPISTS}
        items={boardData.sentToTherapist}
      />
    </ColumnContainer>
  );
};

export default Board;
