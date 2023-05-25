
import styles from './Footer.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>
                <span className="bold">Posts</span> &copy; 2023
            </p>
        </footer>
    )
}