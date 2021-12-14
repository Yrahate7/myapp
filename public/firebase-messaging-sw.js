importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');
const firebaseConfig = {
    apiKey: "AIzaSyCXCPUSMLqN2yr2tEXfC_-Fejfh9gS4E3U", authDomain: "sakhierp-fcm-push-notification.firebaseapp.com", projectId:
        "sakhierp-fcm-push-notification", storageBucket: "sakhierp-fcm-push-notification.appspot.com", messagingSenderId: "610960770942", appId:
        "1:610960770942:web:e3e2819b329c5014ffd52f", measurementId: "G-8GZSV566FS"
};

firebase.initializeApp(firebaseConfig);
// // // Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();