import axios from 'axios'
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject } from 'firebase/storage';
import { db } from './firebase';

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
        //let res = await axios.post('https://portfolio-api-35q5.onrender.com/auth/login', data)
        let res = await axios.post('localhost:5000/auth/login', data)
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
        let res = await axios.post('https://portfolio-api-35q5.onrender.com/projects/add', data)
    } catch (e) {
        alert(`${e}`)
    }
}

export const deleteProject = async (name, img) => {
    try {
        deleteDoc(doc(db, 'projects', name))
        deleteObject(img)
    } catch (e) {
        alert(`${e}`)
    }
}