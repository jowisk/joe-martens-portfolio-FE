import axios from 'axios'
import { deleteObject } from 'firebase/storage';

export const sendEmail = async (
    email,
    subject,
    body
) => {
    try {
        const data = { email: email, subject: subject, body: body };
        let res = await axios.post(`https://portfolio-api-35q5.onrender.com/mailer/send`, data)
    } catch (e) {
        alert(`${e} ${res}` )
    }
}

export const login = async (
    username,
    password
) => {
    try {
        const data = {
            username: username,
            password: password
        }
        let res = await axios.post('https://portfolio-api-35q5.onrender.com/auth/login', data)
        return res.data
    } catch (e) {
        alert(`${e}`)
    }
}

export const addProject = async (
     uuid,
     name,
     technologies,
     img,
     deploy,
     git,
     token
) => {
    try {
        const data = {
            uuid: uuid,
            name: name,
            technologies: technologies,
            img: img,
            deploy: deploy,
            git: git
        }
        const config = {
            headers:{
                'auth-token': token
            }
        }
        let res = await axios.post('https://portfolio-api-35q5.onrender.com/projects/add', data, config)
    } catch (e) {
        alert(`${e}`)
    }
}

export const deleteProject = async (name, ref, token) => {
    try {
        let res = await axios.delete('https://portfolio-api-35q5.onrender.com/projects/delete', { data: { name: name }, headers: { 'auth-token': token } });
        deleteObject(ref)
    } catch (e) {
        alert(`${e}`)
    }
}