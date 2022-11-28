import styles from '../styles/Mouse.module.css'

function Mouse() {
    return (
        <div className={styles.scrolldown}>
            <div className={`${styles.chevrons}`}>
                <div className={`${styles.chevrondown}`}></div>
                <div className={`${styles.chevrondown}`}></div>
            </div>
        </div>
    )
}

export default Mouse
