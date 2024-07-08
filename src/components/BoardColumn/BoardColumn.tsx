import React from 'react';
import { Section, Column, ColumnHeader, Item } from './BoardColumnStyles';
import { BoardColumnProps } from '../../shared/types';

const BoardColumn: React.FC<BoardColumnProps> = ({ header, items }) => {
  return (
    <Column>
      <ColumnHeader>{header}</ColumnHeader>
      <Section>
        {items.map((item, index) => (
          <Item key={index}>
            {JSON.stringify(item)}
          </Item>
        ))}
      </Section>
    </Column>
  );
};

export default BoardColumn;
