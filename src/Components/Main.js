import React from 'react';
import { useEffect, useState } from "react";
import { getArticlesAPI } from "../actions";
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
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
} from "./Mainstyle";
import Postmodel from './Postmodel';

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
  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are No Articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>

            <div>
              <button>
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>

              <button>
                <img src="/images/video-icon.svg" alt="" />
                <span>Video</span>
              </button>

              <button>
                <img src="/images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>

              <button>
                <img src="/images/writer-artical-icon.svg" alt="" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
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
                        <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      {
                        !article.sharedImg && article.video ? <ReactPlayer width={'100%'} url={article.video}/>
                        :
                        (
                          article.sharedImg && <img src={article.sharedImg} alt=""/>
                        )
                      }
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img
                          src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                          alt=""
                        />
                        <img
                          src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                          alt=""
                        />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments}</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button>
                      <img src="/images/like.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
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
                </Artical>
              ))}
          </Content>
          <Postmodel showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
}
// on this app we are not using redux toolkit so we set the props manually of each state
// here we are going to tell redux about the state
const mapStateToProps = (state) => {
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles,
    };
};

// redux stuffs for fetch data from firebase to frontend
const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
