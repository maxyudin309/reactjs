import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent = ({ children, isVisible }) => {
    return (
        <div className={styles.container}>
            {isVisible ? children : <div className={styles.hidden}>Content is hidden</div>}
        </div>
    );
};

export default MyComponent;
