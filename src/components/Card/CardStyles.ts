import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardName = styled.div`
  font-size: 20px;
  font-weight: bold;
`
export const CardAge = styled.div`
  font-size: 12px;
  color: #5B5B5B;
  font-weight: light;
`

export const CardItem = styled.div`
  margin-bottom: 8px;
  color: #5B5B5B;
`;

export const CardPhone = styled(CardItem)`
  color: #CDCDCD;
`
