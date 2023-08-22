import React from 'react'
import { Container, Content, Layout } from './Styles/Homestyle'
import Main from './Main'
import Rightside from './Rightside'
import Leftside from './Leftside'
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";

function Home(props) {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Content>
      <Layout>
        <Leftside/>
        <Main/>
        <Rightside/>
      </Layout>
      </Content>
    </Container>
  )
}

// on this app we are not using redux toolkit so we set the props manually of each state
// it update the current user state, user login, signin or signout on redux
const mapStateToProps = (state) => {
return {
    user: state.userState.user,
};
};

//  not use dispatch because we are not using ant action of dispatch here

export default connect(mapStateToProps)(Home);
