import * as firebase from 'firebase/app';
import { onMessage, getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCXCPUSMLqN2yr2tEXfC_-Fejfh9gS4E3U",
    authDomain: "sakhierp-fcm-push-notification.firebaseapp.com",
    projectId: "sakhierp-fcm-push-notification",
    storageBucket: "sakhierp-fcm-push-notification.appspot.com",
    messagingSenderId: "610960770942",
    appId: "1:610960770942:web:e3e2819b329c5014ffd52f",
    measurementId: "G-8GZSV566FS"
};


let app;
let message;

function fireabseInit() {

    app = firebase.initializeApp(firebaseConfig);
    message = getMessaging(app)

}


const getBrowserToken = async () => {
    try {
        const token = await getToken(message, { vapidKey: "BM3wE8oClXZTF7svyHQoACdGLeuoTVD1lqwRxowBxk6p3JI4Qp88xCZHGgFZRAmp8TJdSCYRl2w_9Vdhcznj8jo" });
        console.log({ token });
    } catch (error) {
        console.log('An error occurred while retrieving token. ', error);
    }
}

// we are registering an observer which detects new push messages
// and passes the message to the callback nextFunction 
const onMessageListener = (nextFunction) => {
    return onMessage(message, nextFunction);
}


export { fireabseInit , getBrowserToken, onMessageListener }