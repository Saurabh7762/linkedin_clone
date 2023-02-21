/* eslint-disable no-template-curly-in-string */
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { postArticleAPI } from "../actions";
import firebase from "firebase";
import {
  AssetButton,
  AttachAssets,
  Container,
  Content,
  Header,
  SharedContent,
  UserInfo,
  ShareComment,
  PostButton,
  Editor,
  UploadImage,
} from "./Postmodelstyle";

function Postmodel(props) {
  //  text editor functionality on popup
  const [editorText, setEditorText] = useState("");
  // functionality to share the image from computer on the poppop modal
  const [shareImage, setShareImage] = useState("");

  // functionality to share the video from local device
  // for this we have to install react player
  const [videoLink, setVideoLink] = useState("");

  // asset area state
  const [assetArea, setAssetArea] = useState("");
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert("not an image, the files is a ${typeof image}");
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea=(area)=>{
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };
const postArticle=(e)=>{
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    return;
  }

  const payload = {
    image: shareImage,
    video: videoLink,
    user: props.user,
    description: editorText,
    timestamp: firebase.firestore.Timestamp.now(),
  };
  props.postArticle(payload);
  reset(e);
};

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a Post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close-icon.svg" alt="Close" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}

                <span>{props.user ? props.user.displayName : "there"}</span>
              </UserInfo>
              <Editor>
                {/* onchange grab the value from the texteditor on the targetvalue */}
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
                {/* scugly brackets */}
                {/* if the assetsarea is image then do this  */}
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      //jsx inline styling
                      style={{ display: "none" }}
                      //  run the handle change function to set the image for us
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file" style={{ cursor: "pointer" }}>
                        Select an Image to Share
                      </label>
                    </p>
                    {/* if the image already exists then do this to show the import image on the poppop box*/}
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="" />
                    )}
                    {/* for video upload */}
                    {/* first add empty jsx fragment */}
                  </UploadImage>
                ) : (
                  //  and if assetarea is media then do all of this
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        value={videoLink}
                        // take the event and set the video link based on whatever the user gives you the value of the event
                        onChange={(e) => setVideoLink(e.target.value)}
                        placeholder="Please input a video link from browsers or your local"
                      />
                      {/* if video link exist then import react player and set the inline style of jsx and the video url 
                         whichever the video link has been set on the state at the movement*/}
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <SharedContent>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src="/images/share-image.svg" alt="" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src="/images/share-video.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/share-file.svg" alt="file" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/ellipsis.svg" alt="" />
                </AssetButton>
                <ShareComment>
                  <AssetButton>
                    <img src="/images/share-comment.svg" alt="sharecomment" />
                    <span>Anyone</span>
                  </AssetButton>
                </ShareComment>
                <PostButton disabled={!editorText ? true : false} onClick={(event)=> postArticle(event)} >
                  Post
                </PostButton>
              </AttachAssets>
            </SharedContent>
          </Content>
        </Container>
      )}
    </>
  );
}

// store function of redux

//mapstate
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
      };
};

//mapdispatch
const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(Postmodel);
