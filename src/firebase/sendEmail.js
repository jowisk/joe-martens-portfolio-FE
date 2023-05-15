import { db } from './firebase'
import { collection, addDoc } from "firebase/firestore";

export default async function sendEmail(subject, email, body) {

    const collectionRef = collection(db, 'mail');

    const emailContent = {
        to: "jnmartenss@gmail.com",
        message: {
            subject: (subject + " from: " + email),
            text: body,
            html: `<p>${body}</p>`,
        },
    };
    return await addDoc(collectionRef, emailContent)
}