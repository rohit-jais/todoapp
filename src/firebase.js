import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBANrKWHPzHzwXeByglBtMkOpMzDLQTOTE",
        authDomain: "todoapp-a6da0.firebaseapp.com",
        projectId: "todoapp-a6da0",
        storageBucket: "todoapp-a6da0.appspot.com",
        messagingSenderId: "926894486544",
        appId: "1:926894486544:web:a5d4814aa2d6ccd3f30695",
        measurementId: "G-P9Q09MBLPJ"
      });

      const db = firebaseApp.firestore();

export default db;