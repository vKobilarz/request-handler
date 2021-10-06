import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: #202020;
  height: 100vh;

  color: #fafafa;
  font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;

  margin: 16px 0px;
  padding: 8px 16px;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
`;
