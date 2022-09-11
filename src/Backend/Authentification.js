import firebase from "firebase";
import { Alert } from "react-native";

export async function registration(email, password, name){
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore()
        db.collection('users').doc(currentUser.uid).set({
             username:username,
             email:email,
             password:password,
        })
    } catch (error) {
        Alert.alert("Something went wrong", error)
    }
}