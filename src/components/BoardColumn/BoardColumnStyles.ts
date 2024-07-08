import styled from 'styled-components';

interface ColumnProps {
  backgroundColor?: string;
}

export const Column = styled.div<ColumnProps>`
  height: fit-content;
  border: 2px solid #ACC6D7;
  border-radius: 6px;
  padding: 10px;
  background: ${({ backgroundColor }) => backgroundColor || '#D2E4ED'};
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
  background-color: #F5F5F5;
  border-radius: 50%;
  font-size: 14px;
  color: #333;
`

export const Section = styled.div`
  max-height: calc(3 * 100px);
  overflow-y: auto;

  // Scrollbar styling for webkit-based browsers
  ::-webkit-scrollbar {
    width: 32px;
  }

  // Background color of the scrollbar track 
  ::-webkit-scrollbar-track {
    background: #D2E4ED; 
  }

  ::-webkit-scrollbar-thumb {
    // Scrollbar color
    background: #A0BDD1; 
    // Rounded corners for the scrollbar thumb
    border-radius: 32px;
  }

  ::-webkit-scrollbar-thumb:hover {
    // Scrollbar color when hovered
    background: #555; 
  }

  // Scrollbar styling for Firefox
  // thumb color, track color 
  scrollbar-color: #A0BDD1 #D2E4ED;
  // scrollbar width
  scrollbar-width: auto; 
`;
