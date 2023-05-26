import {useState, useEffect} from "react";
import styles from './Posts.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";

import flashMessage from "../../hooks/FlashMessage.jsx";
import api from "../../utils/api.jsx";

export default function Posts() {

    return(
        <div className={styles.postsContainer}>
            <h1>Meus Posts</h1>
            <ul>
                <li>
                    <Link to="/posts/list">Listar</Link>
                </li>
                <li>
                    <Link to="/posts/add">Cadastrar</Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    )
}