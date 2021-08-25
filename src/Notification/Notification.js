import PropTypes from 'prop-types';

import styles from './Notification.module.css'

function Notification({text}) {
    return (
        <p className={styles.text}>{text}</p>
    );
};

Notification.propTypes = {
    text: PropTypes.string.isRequired,
};

export { Notification };