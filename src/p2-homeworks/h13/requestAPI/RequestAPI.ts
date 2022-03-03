import axios from "axios";

const instance = axios.create({

   
})

export const todolistAPI = {
    send(value:boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',  {success: value},)
    } 
}
