import {Link} from 'react-router-dom'
import Logo from '../../assets/media_post_social_icon_x64.png'
import styles from './NavBar.module.css'

/*context de usuário*/
import {Context} from "../../context/UserContext";
import {useContext} from "react";

export default function NavBar(){

    const {authenticated, logout} = useContext(Context)

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
                {authenticated ?
                    (<>
                        <li>
                            <Link to="posts/list">Meus posts</Link>
                        </li>
                        <li>
                            <Link to="/user/profile">Perfil</Link>
                        </li>
                        <li onClick={logout}>
                            <Link to="/">Sair</Link>
                        </li>
                    </>)
                    :
                    (<>
                        <li>
                            <Link to="/register">Registrar</Link>
                        </li>
                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>
                    </>)
                }

            </ul>
        </nav>
    )
}