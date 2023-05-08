import PropTypes from 'prop-types';
import {
  StatisticsList,
  Item,
  SpanColor,
  SpanColorPercentage,
} from './Statistics.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <Item>
        Good: <SpanColor label="good">{good}</SpanColor>
      </Item>
      <Item>
        Neutral: <SpanColor label="neutral">{neutral}</SpanColor>
      </Item>
      <Item>
        Bad: <SpanColor label="bad">{bad}</SpanColor>
      </Item>
      <Item>
        Total: <SpanColor>{total()}</SpanColor>
      </Item>
      <Item>
        Positive feedback:
        <SpanColorPercentage>{positivePercentage()}</SpanColorPercentage>%
      </Item>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
