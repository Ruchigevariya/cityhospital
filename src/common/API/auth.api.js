import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
                    reject({ payload: errorCode });
                }
            });
    })
}

export const signinApi = (data) => {
    console.log("signinApi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                if(user.emailVerified){
                    resolve({payload: user});
                }else{
                    reject({payload: "First verify email."});
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                  if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "email or password is wrong" });
                } else if (errorCode.localeCompare("auth/wrong-password") === 0){
                    reject({ payload: "password is wrong" });
                } else{
                    reject({ payload: errorCode });
                }
            });
    })
}

export const SignOutApi = () => {
    console.log("SignOutApi");

    return new Promise((resolve, reject) => {
        signOut(auth)
        .then(() => {
            resolve({ payload: "LogOut Successful"})
        })
        .catch((error) => {
            reject({ payload: error}) 
        })
    })
}