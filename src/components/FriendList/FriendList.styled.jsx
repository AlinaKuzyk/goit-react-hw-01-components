import styled from "styled-components";

export const FriendWrapper = styled.ul`
max-width: 300px;
    margin: auto;
    padding: 0;
list-style: none;
 box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
     transition: 0.3s;
     &:hover {
       box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
     }
`;