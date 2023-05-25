import {useState, useContext} from "react";
import Input from "../../components/form/Input.jsx";

//styles padrão dos formulários
import styles from '../../components/form/Form.module.css'

/*Contexto de usuário*/
import {Context} from "../../context/UserContext.jsx";
import {Link} from "react-router-dom";

export default function Login(){

    const [user , setUser] = useState({})
    const {login} = useContext(Context)


    function handleChange(e){
        setUser({...user,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        login(user)
    }

    return(
        <section className={styles.formContainer}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Email"
                    type="email"
                    name="email"
                    placeHolder="Informe seu email"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeHolder="Informe sua senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Entrar"/>
            </form>
            <p>
                Não possui conta? <Link to='/register'>Clique aqui</Link>
            </p>
        </section>
    )
}