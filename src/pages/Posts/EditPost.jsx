import api from "../../utils/api.jsx";
import {useState, useEffect} from "react";
import styles from './EditPost.module.css'
import {useParams, useNavigate} from "react-router-dom";


import PostForm from "../../components/form/PostForm.jsx";

import flashMessage from "../../hooks/FlashMessage.jsx";


export default function EditPost(){

    const [post, setPost] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')
    const {id} = useParams()
    const {setMessage} = flashMessage()
    let navigate = useNavigate()

    async function updatePost(post){

       let msgText = 'Alterado com sucesso'
       let msgType = 'success'

        const data = await api.patch('/posts', post,{
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            navigate('/posts/list')
            return response.data
        }).catch((e) => {
            msgText = e.response.data.error
            msgType = 'error'
        })

        setMessage(msgText, msgType)
    }


    useEffect(() => {

            api.get(`/posts?id=${parseInt(id)}`, {
                headers:{
                    Authorization: `Bearer ${JSON.parse(token)}`
                }
            }).then((response) => {
                setPost(response.data)
            })

    },[token])


    return(
        <section className={styles.edit_header}>
            <div>
                <h1>Editanto o post do Autor: {post.autor}</h1>
                {post.autor && (
                    <PostForm handleSubmit={updatePost} btnText="Atualizar" postData={post}/>
                )}
            </div>
        </section>
    )
}