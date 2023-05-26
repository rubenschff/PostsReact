import {useState} from "react";
import formStyles from './Form.module.css'
import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";

export default function PostForm({handleSubmit, postData, btnText}) {

    const [post, setPost] = useState(postData || {})

    function handleChange(e){
        setPost({...post, [e.target.name]: e.target.value})
    }

    function submit(e){
        e.preventDefault()
        console.log(post)
        handleSubmit(post)
    }

    return(
        <form onSubmit={submit} className={formStyles.formContainer}>
            <Input
                text="Titulo"
                type="text"
                name="titulo"
                placeHolder="Informe o titulo"
                handleOnChange={handleChange}
                value={post.titulo || ''}
            />
            <Input
                text="Autor"
                type="text"
                name="autor"
                placeHolder="Informe o autor"
                handleOnChange={handleChange}
                value={post.autor || ''}
            />
            <TextArea
                text="Conteudo"
                type="text"
                name="conteudo"
                placeHolder="Informe o conteudo do post"
                handleOnChange={handleChange}
                value={post.conteudo || ''}
            />
            <input type="submit" value={btnText}/>
        </form>
    )
}