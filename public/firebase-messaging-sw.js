/* firebase-messaging-sw.js */
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
 apiKey: "AIzaSyBeOkbLdFCI_35aldSHTGcXh7OLfMFVsko",
   authDomain: "kodo-scholarship-1da4f.firebaseapp.com",
   projectId: "kodo-scholarship-1da4f",
   storageBucket: "kodo-scholarship-1da4f.firebasestorage.app",
   messagingSenderId: "907983623209",
   appId: "1:907983623209:web:7d9b5899ed041c7f23b838",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./favicon.ico"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
