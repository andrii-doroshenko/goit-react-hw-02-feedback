import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.feedback}>
        {options.map(option => {
          const id = shortid.generate();
          return (
            <li className={styles.feedback__item} key={id} id={id}>
              <button
                className={styles.feedback__btn}
                name={option}
                type="button"
                onClick={onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
