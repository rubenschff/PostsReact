import styles from './Profile.module.css'
import formStyles from '../../components/form/Form.module.css'
import Input from "../../components/form/Input.jsx";
import {useEffect, useState} from "react";
import flashMessage from '../../hooks/FlashMessage.jsx'
import api from "../../utils/api.jsx";


export default function Profile() {

    const [user, setUser] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')
    const {setMessage} = flashMessage()

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let msgText = "Usuário alterado com sucesso"
        let msgType = "success"

        let formData = new FormData()

        console.log(user)


        const data = await api.patch('/usuario', user, {
            headers: {
                Authorization: JSON.parse(token)
            }
        }).then((response) => {

        }).catch((e) => {
            console.log(e)
            msgText = e.response.data.error
            msgType = 'error'
        })

        setMessage(msgText, msgType)

    }


    useEffect(()=>{

        api.get('/usuario',{
            headers:{
                Authorization: JSON.parse(token)
            }
        }).then((response) =>{
            setUser(response.data)
        })

    },[token])

    return(
        <section >
            <div className={styles.profileHeader}>
                <h1>Perfil</h1>
            </div>
            <form className={formStyles.formContainer} onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeHolder="Digite seu nome"
                    handleOnChange={handleChange}
                    value={user.name || ''}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeHolder="Digite seu email"
                    handleOnChange={handleChange}
                    value={user.email || ''}
                />
                <Input
                    text="Senha antiga"
                    type="password"
                    name="oldPassword"
                    placeHolder="Digite a sua senha"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha nova"
                    type="password"
                    name="password"
                    placeHolder="Digite a sua senha"
                    handleOnChange={handleChange}
                />
                <input type={"submit"} value="Editar"/>
            </form>
        </section>
    )
}