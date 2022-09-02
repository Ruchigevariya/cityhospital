import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

                if (user.emailVerified) {
                    resolve({ payload: user });
                } else {
                    reject({ payload: "First verify email." });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "email or password is wrong" });
                } else if (errorCode.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "password is wrong" });
                } else {
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
                resolve({ payload: "LogOut Successful" })
            })
            .catch((error) => {
                reject({ payload: error })
            })
    })
}

export const forgotPasswordApi = (data) => {
    console.log("forgotPasswordApi", data);

    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "please check your email reset password." });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject({ payload: errorCode });
            })
    })
}

export const googleSigninApi = () => {
    console.log("googleSigninApi");

    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                resolve({payload: user})
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject({payload: error})
            });
    })
}