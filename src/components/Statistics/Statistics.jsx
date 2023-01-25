import PropTypes from 'prop-types';
import {StatisticsWrapper, StatsMenu, StatsItem} from 'components/Statistics/Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
        {title && (<h2 className="title">{ title}</h2>)}

      <StatsMenu>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem label={label.slice(1)} key={id}>
              <span className="label">{label }</span>
              <span className="percentage">{percentage }%</span>
          </StatsItem>
        ))}
 
      </StatsMenu>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
