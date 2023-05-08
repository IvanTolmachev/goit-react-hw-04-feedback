import PropTypes from 'prop-types';
import { FeedBackList, FeedBackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedBackList>
      {options.map(({ id, category }) => (
        <li key={id}>
          <FeedBackBtn
            onClick={() => {
              onLeaveFeedback(category);
            }}
          >
            {category}
          </FeedBackBtn>
        </li>
      ))}
    </FeedBackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
