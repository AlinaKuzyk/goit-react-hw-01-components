import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 356px;
  margin: auto;
  margin-top: 150px;
  padding-top: 20px;
  text-align: center;
  background-color: rgba(213, 231, 204, 0.605);
`;

export const StatsMenu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export const StatsItem = styled.li`
  align-items: center;
  height: 50px;
  display: flex;
  background-color: ${({ label }) => {
    switch (label) {
      case 'docx':
        return 'blue';
      case 'pdf':
        return 'tomato';
      case 'mp3':
        return 'deeppink';
      case 'psd':
        return 'royalblue';
      default:
        return 'blue';
    }
  }};
`;
