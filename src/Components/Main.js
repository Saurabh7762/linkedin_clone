import React from 'react'
import { Artical, Container, Description, ShareBox, SharedActor, SharedImg } from './Mainstyle'

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
          <img src='/images/repost.svg' />
        </Artical>
      </div>
    </Container>
  )
}

export default Main

