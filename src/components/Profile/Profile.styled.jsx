import styled from '@emotion/styled';

export const Card = styled.div`
  max-width: 320px;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const DescriptionTextName = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const DescriptionText = styled.p`
  font-size: 20px;
   margin: 2px;
  color: gray;
  text-align: center;
`;

export const Menu = styled.ul`
list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  background-color: rgba(86, 116, 116, 0.802);
      justify-content: space-around;
`;

export const MenuItem = styled.li`
 padding: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
