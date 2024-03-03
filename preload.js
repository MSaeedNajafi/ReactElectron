const {ipcRenderer, contectBridge} = require('electron');

contectBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            console.log(message)
            ipcRenderer.send('notify', message)
        }
    }
})