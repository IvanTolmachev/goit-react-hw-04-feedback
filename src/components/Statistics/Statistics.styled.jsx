import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  font-weight: 500;
  font-size: 25px;
`;

export const Item = styled.li``;

export const SpanColor = styled.span`
  font-weight: 700;
  ${props => {
    switch (props.label) {
      case 'good':
        return 'color: green';
      case 'neutral':
        return 'color: orange';
      case 'bad':
        return 'color: red';
      default:
        return;
    }
  }};
`;

export const SpanColorPercentage = styled.span`
font-weight: 700;
margin-left: 5px;
margin-right: 5px;

  color: ${props =>
    props.children > 79 ? 'green' : props.children > 49 ? 'orange' : 'red'};
}
`;
