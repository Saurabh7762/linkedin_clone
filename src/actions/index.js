/* eslint-disable eqeqeq */
/* eslint-disable no-template-curly-in-string */
import { auth, Provider, storage } from "../firebase";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionType";
import db from "../firebase";


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


// SET_LOADING_STATUS
export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload, id) => ({
  type: GET_ARTICLES,
  payload: payload,
  id: id,
});

export function postArticleAPI(payload) {
  return (dispatch) => {

    //loading bar end
    if (payload.image != "") {
      dispatch(setLoading(true));
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      //upload images to firebase
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //progress bar
          console.log(`progress: ${progress}%`);

          if (snapshot.state === "RUNNING") {
            console.log(`progress: ${progress}%`);
          }
        },
        (error) => alert(error),
        //download url
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          //db collection for images
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            likes: {
              count: 0,
              whoLiked: [],
            },
            comments: 0,
            description: payload.description,
          });
          // finish the loading here
          dispatch(setLoading(false));
        }
      );
    }
    // db collection for video
    else if (payload.video) {
      dispatch(setLoading(true));
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        likes:{
          count: 0,
          whoLiked: [],
        },
        comments: 0,
        description: payload.description,
      });
      // finish the loading here
      dispatch(setLoading(false));
    } else if(payload.image ==="" && payload.video===""){
      dispatch(setLoading(true));
      db.collection("articles").add({
        actor:{
          description:payload.user.email,
          title:payload.user.displayName,
          date: payload.timestamp,
          image:payload.user.photoURL,
        },
        video:"",
        sharedImg:"",
        likes:{
          count:0,
          whoLiked:[],
        },
        comments:0,
        description:payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}


// fetch the article on main content area from firebase by using useeffect
export function getArticlesAPI() {
    return (dispatch) => {
        dispatch(setLoading(true));
        let payload;
        let id;
    //  fetch data from database
    db.collection("articles")
      .orderBy("actor.date", "desc")
    // this allow to retain data from firebase
      . onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        id = snapshot.docs.map((doc) => doc.id);
        dispatch(getArticles(payload, id));
    });
    dispatch(setLoading(false));
    };
}

export function updateArticleAPI(payload) {
  return (dispatch) => {
    db.collection("articles").doc(payload.id).update(payload.update);
  };
}