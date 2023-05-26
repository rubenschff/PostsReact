
import {useState, useEffect} from "react";
import flashMessage from "../../hooks/FlashMessage.jsx";
import api from "../../utils/api.jsx";
import styles from './ListPost.module.css'
import {Link} from "react-router-dom";

export default function ListPost(){

    const [posts, setPosts] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const {setMessage} = flashMessage()

    useEffect(() => {
        api.get('/posts',{
            headers:{
                Authorization: JSON.parse(token)
            }
        }).then((response) => {
            setPosts(response.data)
        })
    }, [token])

    return(
        <section >
            <div className={styles.post_list_header}>
                {posts.length > 0 ?
                    (
                        <div className={styles.post_list_container}>
                            {
                                posts.map((post) => (
                                    <div className={styles.post_list_row} key={post.id}>
                                        <div >
                                        <span className={styles.autor}><p>Autor: </p>{post.autor}</span>
                                            <div>
                                                <h2>{post.titulo}</h2>
                                                <article>{post.conteudo}</article>
                                            </div>
                                            <div className={styles.actions}>
                                                <Link to={`/post/edit/${post.id}`}>Editar</Link>
                                                <button>Excluir</button>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    )
                    :
                    (<h1>Você não possui nenhum post cadastrado</h1>)}
            </div>
        </section>
    )
}