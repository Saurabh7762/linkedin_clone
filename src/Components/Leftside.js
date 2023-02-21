import React from 'react'
import { connect } from 'react-redux';
import { Container,ArtCard,UserInfo,CardBackground,Photo,Link,AddPhotoText,Widget,Item,CommunityCard  } from './Leftsidestyle'

function Leftside(props) {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo></Photo>
            <Link>{props.user ? props.user.displayName : "there"}</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};
// on this app we are not using redux toolkit so we set the props manually of each state
// here we are going to tell redux about the state
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

//  not use dispatch because we are not using ant action of dispatch here
export default connect(mapStateToProps)(Leftside)