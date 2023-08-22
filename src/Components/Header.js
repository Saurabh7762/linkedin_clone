/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import {
  Container,
  Content,
  Logo,
  Search,
  SearchIcon,
  Nav,
  NavListWrap,
  NavList,
  SignOut,
  User,
  Work,
  NavListMess,
  NavListMessup,
  ContentMob,
  SearchMob,
  UserMob,
  UserMobbt,
} from "./Styles/Headerstyle";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";


function Header(props) {
  
  return (
    <>
      <Container>
        <Content>
          <ContentMob>
            <UserMob>
              <User>
                <a href="#">
                  {/* user login photo come from google authentication */}
                  {props.user && props.user.photoURL ? (
                    <img
                      src={props.user.photoURL}
                      alt={props.user.displayName}
                    />
                  ) : (
                    //if user photo is not existing the show the dummy image
                    <img src="/images/user.svg" alt="" />
                  )}
                 
                </a>

                <SignOut onClick={() => props.signOut()}>
                  
                  <a>Sign Out</a>
                </SignOut>
              </User>
            </UserMob>
            <Logo>
              <a href="/home">
                <img src="/images/home-logo.svg" alt="" />
              </a>
            </Logo>
            <SearchMob>
              <Search>
                <div>
                  <input type="text" placeholder="Search" />
                </div>
                <SearchIcon>
                  <img src="/images/search-icon.svg" alt="" />
                </SearchIcon>
              </Search>
            </SearchMob>
            <NavListMessup>
              <NavList>
                <a href="#">
                  <img src="/images/nav-messaging.svg" alt="" />
                  <span>Messaging</span>
                </a>
              </NavList>
            </NavListMessup>
          </ContentMob>
          <Nav>
            <NavListWrap>
              <NavList className="active">
                <a href="#">
                  <img src="/images/nav-home.svg" alt="" />
                  <span>Home</span>
                </a>
              </NavList>

              <NavList>
                <a href="#">
                  <img src="/images/nav-network.svg" alt="" />
                  <span>My Network</span>
                </a>
              </NavList>

              <NavList>
                <a href="#">
                  <img src="/images/nav-jobs.svg" alt="" />
                  <span>Jobs</span>
                </a>
              </NavList>

              <NavListMess>
                <NavList>
                  <a href="#">
                    <img src="/images/nav-messaging.svg" alt="" />
                    <span>Messaging</span>
                  </a>
                </NavList>
              </NavListMess>

              <NavList>
                <a href="#">
                  <img src="/images/nav-notifications.svg" alt="" />
                  <span>Notifications</span>
                </a>
              </NavList>
              <UserMobbt>
                <User>
                  <a href="#">
                    {/* user login photo come from google authentication */}
                    {props.user && props.user.photoURL ? (
                      <img
                        src={props.user.photoURL}
                        alt={props.user.displayName}
                      />
                    ) : (
                      //if user photo is not existing the show the dummy image
                      <img src="/images/user.svg" alt="" />
                    )}
                    <span>
                      Me
                      <img src="/images/down-icon.svg" alt="" />
                    </span>
                  </a>

                  <SignOut onClick={() => props.signOut()}>
                    <a>Sign Out</a>
                  </SignOut>
                </User>
              </UserMobbt>
              <Work>
                <a href="#">
                  <img src="/images/nav-work.svg" alt="" />
                  <span>
                    Work
                    <img src="/images/down-icon.svg" alt="" />
                  </span>
                </a>
              </Work>
            </NavListWrap>
          </Nav>
        </Content>
      </Container>
    </>
  );
}

// dispatch function for redux

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
