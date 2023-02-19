import { auth, Provider } from "../firebase";
import { SET_USER } from "./actionType";


export const setUser=(payload)=>({
    type: SET_USER,
    user: payload,
})
export function signInAPI(){
    return (dispatch)=>{
        auth.signInWithPopup(Provider).then((payload)=>{
            //console.log(payload);
            dispatch(setUser(payload.user));
        })
        .catch((error)=>alert(error.message));
    };
}

// authentication information

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
        if (user) {
            dispatch(setUser(user));
        }
        })
    }
};

// signout functionality come from firebase

export function signOutAPI() {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        }).catch((error) => {
            console.log(error.message);
        });
    };
}