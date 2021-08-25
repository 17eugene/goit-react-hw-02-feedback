import PropTypes from 'prop-types';

import styles from './Statistics.module.css'

function Statistics({ good, neutral, bad, total, persentage }) {
    return (
        <div>
            <p className={styles.option}>Good: {good}</p>
            <p className={styles.option}>Neutral: {neutral}</p>
            <p className={styles.option}>Bad: {bad}</p>
            <p className={styles.total}>Total: {total}</p>
            <p className={styles.positive}>Positive feedback: {persentage}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    persentage: PropTypes.number.isRequired,
}

export { Statistics };