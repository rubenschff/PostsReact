import {useContext, useState} from "react";
import Input from "../../components/form/Input.jsx";

import styles from '../../components/form/Form.module.css'
import {Link} from "react-router-dom";

/*Contexts*/
import {Context} from "../../context/UserContext.jsx";

export default function Register(){

    //objeto usuario
    const [user, setUser] = useState({})
    const { register } = useContext(Context)

    //adiciona ao usuário cada campo do formulário
    function handleChange(e){
        setUser({...user,[e.target.name]: e.target.value})
    }

    //envia os dados ao clicar em cadastrar
    function handleSubmit(e) {
        e.preventDefault() //não recarrega a página
        register(user)
    }



    return(
        <section className={styles.formContainer}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeHolder="Digite seu nome"
                    handleOnChange={handleChange}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeHolder="Digite seu email"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeHolder="Digite a sua senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Cadastrar"/>
            </form>
            <p>
                Já possui conta? <Link to='/login'>Clique aqui</Link>
            </p>
        </section>
    )
}