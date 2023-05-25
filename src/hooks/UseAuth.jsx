import api from '../utils/api.jsx'
import flashMessage from "./FlashMessage.jsx";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"

export default function useAuth(){

    const [authenticated, setAuthenticated] = useState(false)
    const {setMessage} = flashMessage()
    let navigate = useNavigate()


    //salva o token por padrão no header
    useEffect(() => {

        const token = localStorage.getItem('token')

        if (token){
            api.defaults.headers.Authorization = token
            setAuthenticated(true)
        }
    },[]/*estado inicial do eseEffect*/)


    //registro de usuário
    async function register(user){

        console.log(user)
        let msgText = 'Cadastro relizado com sucesso'
        let msgType = 'success'

        //registro de usuário
        try {
            const data = await api.post('/cadastrar', user).then((response) =>{
                return response.data
            })

            //se sucesso
            await AuthUser(data)

        }catch (e) {
            console.log(e)

            if(e.response.data.error){

            }
            if(!user.name){
                msgText = 'O campo nome é obrigatório'
            }else if (!user.email){
                msgText = 'O email é obrigatório'
            }else if (!user.password){
                msgText = 'A senha é obrigatória'
            }else {
                msgText = e.response.data.error
            }
            msgType = 'error'
        }


        setMessage(msgText,msgType)
    }


    async function login(user){

        let msgText = 'Login realizado com sucesso!'
        let msgType = 'success'

        try {

            const data = await api.post('/entrar', user).then((response) =>{
                return response.data
            })

            await AuthUser(data)

        }catch (e) {
            msgText = e.response.data.error
            msgType = 'error'
        }

        setMessage(msgText,msgType)
    }


    //se authenticado salva o token de usuário e vai  pra home
    async function AuthUser(data){

        setAuthenticated(true)

        localStorage.setItem('token', JSON.stringify(data.token))
        navigate('/')

    }

    function logout(){

        //flash message ao usuário
        const msgText = 'Sessão finalizada'
        const msgType = 'success'

        //removendo autenticação de usuário
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined

        setMessage(msgText,msgType)

    }



    return {register, authenticated, logout, login}
}