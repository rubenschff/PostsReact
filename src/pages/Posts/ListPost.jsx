
import {useState, useEffect} from "react";
import flashMessage from "../../hooks/FlashMessage.jsx";
import api from "../../utils/api.jsx";
import styles from './ListPost.module.css'
import {Link} from "react-router-dom";

export default function ListPost() {

    const [posts, setPosts] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const {setMessage} = flashMessage()

    useEffect( () => {
         api.get('/posts', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            setPosts(response.data)
        })
    }, [token])

    async function removePost(id){

        let msgType = 'success'
        let msgText = 'Excluido com sucesso'

        const data = await api.delete(`/posts?id=${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) =>{
            const updatedPosts = posts.filter((post) => post.id !== id)
            setPosts(updatedPosts)
            return response.data
        }).catch((e) => {
            msgType = 'error'
            msgText = e.response.data.error
        })

        setMessage(msgText,msgType)

    }

    return (
        <section>
            <div className={styles.post_list_header}>
                {posts.length > 0 ?
                    (
                        <div className={styles.post_list_container}>
                            {
                                posts.map((post) => (
                                    <div className={styles.post_list_row} key={post.id}>
                                        <div>
                                            <span className={styles.autor}><p>Autor: </p>{post.autor}</span>
                                            <div>
                                                <h2>{post.titulo}</h2>
                                                <article>{post.conteudo}</article>
                                            </div>
                                            <div className={styles.actions}>
                                                <Link to={`/edit/${post.id}`}>Editar</Link>
                                                <button onClick={() => {
                                                   removePost(post.id)
                                                }}>
                                                    Excluir</button>
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