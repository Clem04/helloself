import React from 'react';
import { 
  Section, 
  Column, 
  ColumnHeaderContainer, 
  ColumnHeader, 
  ColumnCount 
} from './BoardColumnStyles';
import { BoardColumnProps } from '../../shared/types';
import Card from '../Card/Card';

const BoardColumn: React.FC<BoardColumnProps> = ({ header, items }) => {
  return (
    <Column>
      <ColumnHeaderContainer>
      <ColumnHeader>{header}</ColumnHeader>
      <ColumnCount>{items.length}</ColumnCount>
      </ColumnHeaderContainer>
      <Section>
        {items.map((item, index) => (
           <Card
            key={index}
            name={item.name}
            age={item.age}
            email={item.email}
            phone={item.phone}
         />
        ))}
      </Section>
    </Column>
  );
};

export default BoardColumn;
