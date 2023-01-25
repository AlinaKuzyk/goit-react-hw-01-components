import styled from "styled-components";

export const FriendCard = styled.li`
border: 1px solid tomato`;

export const FriendStatus = styled.span`
display: block;
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${(status)=> console.log(status.isOnline)};
`