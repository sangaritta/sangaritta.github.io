importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBaOe8BzcT-d9OmiRXTHJVMB8noE9ZQmto",
  authDomain: "matterportal.firebaseapp.com",
  projectId: "matterportal",
  messagingSenderId: "282540499079",
});

const messaging = firebase.messaging();

// Optional: Add background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('Background message: ', payload);
}); 