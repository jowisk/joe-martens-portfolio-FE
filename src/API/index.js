import axios from 'axios'

export const sendEmail = async (
    email,
    subject,
    body
) => {
    console.log("here!!")
    try {
        const data = { email: email, subject: subject, body: body };
        console.log(data)
        let res = await axios.post(`http://localhost:5000/send`, data)
    } catch (e) {
        alert(e)
    }
}