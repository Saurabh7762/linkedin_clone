import React from 'react'
import { Artical, Container, Description, ShareBox, SharedActor, SharedImg, SocialActions, SocialCounts } from './Mainstyle'

function Main(props) {
  return (
    <Container>
      <ShareBox>
      <div>
        <img src='/images/user.svg' alt=''/>
        <button>Start a post</button>
      </div>

      <div>
        <button>
          <img src='/images/photo-icon.svg' alt=''/>
          <span>Photo</span>
        </button>

        <button>
          <img src='/images/video-icon.svg' alt=''/>
          <span>Video</span>
        </button>

        <button>
          <img src='/images/event-icon.svg' alt=''/>
          <span>Event</span>
        </button>

        <button>
          <img src='/images/writer-artical-icon.svg' alt=''/>
          <span>Write article</span>
        </button>
      </div>
      </ShareBox>
      <div>
        <Artical>
          <SharedActor>
            <a>
              <img src='/images/user.svg' alt=''/>
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src='/images/ellipsis.svg' alt='' />
            </button>
            
          </SharedActor>
          <Description>Des</Description>
          <SharedImg>
            <a>
              <img src='/images/link-home-img.png' alt=''/>
              </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img 
                   src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb'
                   alt=''
                />
                <img 
                   src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'
                   alt=''
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts> 
          <SocialActions>
            <button>
               <img src='/images/like.svg' alt='' />
               <span>Like</span>
            </button> 
            <button>
               <img src='/images/comment.svg' alt='' />
               <span>Comments</span>
            </button> 
            <button>
               <img src='/images/repost.svg' alt='' />
               <span>Repost</span>
            </button> 
            <button>
               <img src='/images/Send.svg' alt='' />
               <span>Send</span>
            </button> 
          </SocialActions>
          
        </Artical>
      </div>
    </Container>
  )
}

export default Main

