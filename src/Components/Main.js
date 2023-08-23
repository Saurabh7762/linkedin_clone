import React from "react";
import { useEffect, useState } from "react";
import {
  getArticlesAPI,
  updateArticleAPI,
  toggleCommentInput,
} from "../actions";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import {
  Artical,
  Container,
  Description,
  ShareBox,
  SharedActor,
  SharedImg,
  SocialActions,
  SocialCounts,
  Content,
  CommentSection,
  CommentSectioninp,
} from "./Styles/Mainstyle";
import Postmodel from "./Postmodel";

function Main(props) {
  const [showModal, setShowModal] = useState("close");

  // use useeffect to retain the article data from firebase to frontend
  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  function likeHandler(event, postIndex, id) {
    event.preventDefault();
    let currentLikes = props.articles[postIndex].likes.count;
    let whoLiked = props.articles[postIndex].likes.whoLiked;
    let user = props.user.email;
    let userIndex = whoLiked.indexOf(user);

    if (userIndex >= 0) {
      currentLikes--;
      whoLiked.splice(userIndex, 1);
    } else if (userIndex === -1) {
      currentLikes++;
      whoLiked.push(user);
    }

    const payload = {
      update: {
        likes: {
          count: currentLikes,
          whoLiked: whoLiked,
        },
      },
      id: id,
    };

    props.likeHandler(payload);
  }

  
  

  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="" />
          ) : (
            <img src="/images/user.svg" alt="" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
        </div>

        <div>
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            <img
              src="/images/photo-icon.svg"
              alt=""
              onClick={handleClick}
              disabled={props.loading ? true : false}
            />
            Photo
          </button>

          <button onClick={handleClick} disabled={props.loading ? true : false}>
            <img
              src="/images/video-icon.svg"
              alt=""
              onClick={handleClick}
              disabled={props.loading ? true : false}
            />
            Video
          </button>

          <button onClick={handleClick} disabled={props.loading ? true : false}>
            <img
              src="/images/event-icon.svg"
              alt=""
              onClick={handleClick}
              disabled={props.loading ? true : false}
            />
            Event
          </button>

          <button onClick={handleClick} disabled={props.loading ? true : false}>
            <img
              src="/images/writer-artical-icon.svg"
              alt=""
              onClick={handleClick}
              disabled={props.loading ? true : false}
            />
            Write article
          </button>
        </div>
      </ShareBox>
      <>
        {props.articles.length === 0 ? (
          <p>There are No Articles</p>
        ) : (
          <Content>
            {props.loading && <img src={"/images/Spin-loader.svg"} alt="" />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Artical key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && (
                          <img src={article.sharedImg} alt="" />
                        )
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    {props.articles[key].likes.count > 0 && (
                      <>
                        <li>
                          <button>
                            <img
                              src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                              alt=""
                            />
                            {/* <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="" /> */}
                            <span>{props.articles[key].likes.count}</span>
                          </button>
                        </li>
                        <li>
                          <a>{article.comments} comments</a>
                        </li>
                      </>
                    )}
                  </SocialCounts>
                  <SocialActions>
                    <button
                      onClick={(event) =>
                        likeHandler(event, key, props.ids[key])
                      }
                      className={
                        props.articles[key].likes.whoLiked.indexOf(
                          props.user.email
                        ) >= 0
                          ? "active"
                          : null
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="rgba(0, 0, 0, 0.6)"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                      </svg>
                      <span>Like</span>
                    </button>
                    <button onClick={() => props.toggleCommentInput(key)}>
                      <img src="/images/comment.svg" alt="" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="/images/repost.svg" alt="" />
                      <span>Repost</span>
                    </button>
                    <button>
                      <img src="/images/Send.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialActions>
                  {props.commentInputVisibility[key] && (
                    <>
                      <CommentSectioninp>
                        {props.user && props.user.photoURL ? (
                          <img src={props.user.photoURL} alt="" />
                        ) : (
                          <img src="/images/user.svg" alt="" />
                        )}
                        <input placeholder="This feature under development..." />
                        <button>Post</button>
                      </CommentSectioninp>
                      {/* <CommentSection>
                        <a>
                          {props.user && props.user.photoURL ? (
                            <img src={props.user.photoURL} alt="" />
                          ) : (
                            <img src="/images/user.svg" alt="" />
                          )}
                          <div>
                            <span>{props.user.displayName}</span>
                            <span>{props.user.email}</span>
                            <span>{props.user.timestamp}</span>
                          </div>
                        </a>
                      </CommentSection> */}
                    </>
                  )}
                </Artical>
              ))}
          </Content>
        )}
      </>
      <Postmodel showModal={showModal} handleClick={handleClick} />
    </Container>
  );
}
// on this app we are not using redux toolkit so we set the props manually of each state
// here we are going to tell redux about the state
const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
    ids: state.articleState.ids,
    commentInputVisibility: state.articleState.commentInputVisibility,
  };
};

// redux stuffs for fetch data from firebase to frontend
const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
  likeHandler: (payload) => dispatch(updateArticleAPI(payload)),
  toggleCommentInput: (articleIndex) => {
    dispatch({ type: "TOGGLE_COMMENT_INPUT", payload: { articleIndex } });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
