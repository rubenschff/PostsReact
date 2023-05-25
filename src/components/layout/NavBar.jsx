import {Link} from 'react-router-dom'
import Logo from '../../assets/media_post_social_icon_x64.png'
import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <nav className={styles.navBar}>
            <div className={styles.navBar_logo}>
                <img src={Logo} alt="Posts"/>
                <h2>Posts</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Registrar</Link>
                </li>
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
            </ul>
        </nav>
    )
}