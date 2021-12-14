import './App.css';
import { Button } from 'react-bootstrap';
import { getBrowserToken, onMessageListener } from './firebase';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        onMessageListener(onNotification);
    }, []);

    function onNotification(payload) {
        const data = payload.notification;
        const notificationTitle = data.title;
        const notificationOptions = {
            body: data.body
        };

        if (!('Notification' in window)) {
            console.log("Browser does not support system notification");

        } else if (Notification.permission === "granted") {
            new Notification(notificationTitle, notificationOptions);
        }
    }

    return (
        <div className="App">
            <Button onClick={getBrowserToken}>
                Generate Token
            </Button>
        </div>
    );
}

export default App;
