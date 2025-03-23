importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBaOe8BzcT-d9OmiRXTHJVMB8noE9ZQmto",
  authDomain: "matterportal.firebaseapp.com",
  projectId: "matterportal",
  storageBucket: "matterportal",
  messagingSenderId: "282540499079",
  appId: "1:282540499079:web:YOUR_APP_ID_HERE"
});

const messaging = firebase.messaging();

// Optional background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message:', payload);
  
  // Parse notification data safely
  const notificationTitle = payload.notification ? 
    (payload.notification.title || 'New Message') : 'New Message';
  const notificationOptions = {
    body: payload.notification ? 
      (payload.notification.body || 'You have a new message') : 'You have a new message',
    icon: '/favicon.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  console.log('Notification click Received.', event);
  event.notification.close();
  
  // This looks for the first client window that's already open and focuses it
  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    })
    .then(function(clientList) {
      if (clientList.length > 0) {
        let client = clientList[0];
        for (let i = 0; i < clientList.length; i++) {
          if (clientList[i].focused) {
            client = clientList[i];
            break;
          }
        }
        return client.focus();
      }
      return clients.openWindow('/');
    })
  );
});