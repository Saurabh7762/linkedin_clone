/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { connect } from 'react-redux';
import { Container,ArtCard,UserInfo,CardBackground,Photo,Link,AddPhotoText,Widget,Item,CommunityCard, FixedContainer  } from './Styles/Leftsidestyle'

function Leftside(props) {
  let photoUrl = props.user
    ? props.user.photoURL
    : "/images/photo.svg";
  
  return (
      <Container>
        <ArtCard>
          <UserInfo>
            <CardBackground />
            <a href="#">
              <Photo photoUrl={photoUrl} />
              <Link>{props.user ? props.user.displayName : "there"}</Link>
            </a>
            <a href="#">
              <AddPhotoText>Add a photo</AddPhotoText>
            </a>
          </UserInfo>
          <Widget>
            <a href="#">
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
          <a href="#">
            <span>Groups</span>
          </a>
          <a href="#">
            <span>
              Events
              <img src="/images/plus-icon.svg" alt="" />
            </span>
          </a>
          <a href="#">
            <span>Follow Hashtags</span>
          </a>
          <a href="#">
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