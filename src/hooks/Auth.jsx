import api from '../utils/api.jsx'
import flashMessage from "./FlashMessage.jsx";
import {useState} from "react";
import { useNavigate } from "react-router-dom"

export default function Auth(){

    const [authenticated, setAuthenticated] = useState(false)
    const {setMessage} = flashMessage()
    let navigate = useNavigate()

    async function register(user){

        let msgText = 'Cadastro relizado com sucesso'
        let msgType = 'success'

        //registro de usuário
        try {
            const data = await api.post('/cadastrar', user).then((response) =>{
                return response.data
            })
            console.log(data)
            AuthUser(data)
        }catch (e) {

            console.log(e)
            if(e.response.data.body.name){
                msgText = 'O campo nome é obrigatório'
            }else if (e.response.data.body.email){
                msgText = 'O email é obrigatório'
            }else if (e.response.data.body.password){
                msgText = 'A senha é obrigatória'
            }
            msgType = 'error'
        }


        setMessage(msgText,msgType)
    }

    //se authenticado salva o token de usuário e vai  pra home
    async function AuthUser(data){

        setAuthenticated(true)

         localStorage.setItem('token', JSON.stringify(data.token))
         navigate('/',{replace:true})

    }

    return {register}
}