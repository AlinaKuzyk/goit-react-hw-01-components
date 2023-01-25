import styled from 'styled-components';

export const FriendCard = styled.li`
  max-width: 300px;
border: 1px solid gray;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
