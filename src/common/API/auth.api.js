import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";

export const signupApi = (data) => {
    console.log("signupApi", data);
    // firebase integration

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "please check email." });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })

                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(error);

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "email already registered" });
                } else {
                    reject({ payload: errorMessage });
                }
            });
    })
}