import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
  height: auto;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(24% + 10px);
    width: 2px;
    background-color: #4088BE;
    z-index: 1;
  }
`;
