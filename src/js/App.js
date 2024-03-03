import React from 'react';

export default function App() {
    return (
      <>
        <h1>I am a react applciation</h1>
        <button onClick={()=> {
            electron.notificationApi.sendNotification("My custon notification")
        }}>Notify</button>
      </>
    );
}