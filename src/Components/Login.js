import React from 'react'
import { Container, SignIn, Nav, Join, Section,Logingthumb, Form,Googleloging} from "./Loginstyle";
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Navigate } from 'react-router-dom';



function Login(props) {
  return (
    <Container>
        {props.user && 
        <Navigate to="/home"/>}
        <Nav>
            <a href='/'>
                <img src='./images/login-logo.svg' alt=''/>
            </a>
            <div>
                <Join>Join now</Join>
                <SignIn onClick={()=> props.signIn()}>Sign In</SignIn>
            </div>
        </Nav>
        <Section>
            <Logingthumb>
                <h1>Welcome to your professional community</h1>
                <img src='./images/hero-image-v2.svg' alt='' />
            </Logingthumb>
            <Form>
                <Googleloging onClick={()=> props.signIn()}>
                    <img src='./images/google.svg' alt='' />
                    Sign in with Google
                </Googleloging>
            </Form>
            
        </Section>
    </Container>
  )
}

const mapStateToProps=(state)=>{
    return {
        user: state.userState.user,
    };
};
const mapDispatchToProps=(dispatch)=>({
    signIn: ()=>dispatch(signInAPI()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
