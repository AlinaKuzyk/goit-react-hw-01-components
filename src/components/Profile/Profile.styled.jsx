import styled from '@emotion/styled';

export const Card = styled.div`
  max-width: 320px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Menu = styled.ul`
  display: flex;
  
  list-style: none;
`;

export const MenuItem = styled.li`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-right: 25px;
`;
