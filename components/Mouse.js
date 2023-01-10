import styles from '../styles/Mouse.module.css'

function Mouse() {
    const scrollToView = () => {
        const element = document.getElementById('about')
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div onClick={() => scrollToView('about')} className={`${styles.scrolldown} cursor-pointer`}>
            <div className={`${styles.chevrons}`}>
                <div className={`${styles.chevrondown}`}></div>
                <div className={`${styles.chevrondown}`}></div>
            </div>
        </div>
    )
}

export default Mouse
