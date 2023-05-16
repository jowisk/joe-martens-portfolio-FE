import axios from 'axios'

export const sendEmail = async (
    email,
    subject,
    body
) => {
    try {
        const data = { email: email, subject: subject, body: body };
        console.log(data)
        let res = await axios.post(`https://portfolio-api-xype.onrender.com/send`, data)
    } catch (e) {
        alert(`${e} ${res}` )
    }
}