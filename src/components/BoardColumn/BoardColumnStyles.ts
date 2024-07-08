import styled from 'styled-components';

export const Column = styled.div`
  height: fit-content;
  border: 2px solid #ACC6D7;
  border-radius: 6px;
  padding: 10px;
`;

export const ColumnHeaderContainer = styled.b`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ColumnHeader = styled.div`
  font-weight: bold;
`

export const ColumnCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  font-size: 14px;
  color: #333;
`

export const Section = styled.div`
  background: #D2E4ED;
  height: 100%;
`;
