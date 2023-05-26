import api from '../../utils/api.jsx'
import styles from './AddPost.module.css'

import {useState} from "react";


import flashMessage from "../../hooks/FlashMessage.jsx";
import PostForm from "../../components/form/PostForm.jsx";
import {useNavigate} from "react-router-dom";

export default function AddPost() {

    const [token] = useState(localStorage.getItem('token') || '')
    const {setMessage} = flashMessage()
    const navigate = useNavigate()

    async function regiterPost(post){

        let msgType = 'success'
        let msgText = 'Cadastrado com sucesso'

        const data = await api.post('posts', post, {
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) =>{
            navigate('/posts/list')
            return response.data

        }).catch((e) => {

            if (!post.titulo){
                msgText = 'O Titulo é obrigatório'
            }else if (!post.autor){
                msgText = 'O Autor é obrigatório'
            }else if (!post.conteudo){
                msgText = 'O Conteudo é obrigatório'
            }else {
                msgText = e.response.data.error
            }
            msgType = 'error'

        })

        setMessage(msgText, msgType)

    }

    return(
        <section className={styles.addPostHeader}>
            <div>
                <PostForm handleSubmit={regiterPost} btnText = "Cadastrar" />
            </div>
        </section>
    )

}