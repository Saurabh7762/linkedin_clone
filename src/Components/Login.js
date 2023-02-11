import React from 'react'
import { Container, SignIn, Nav, Join, Section,Logingthumb, Form,Googleloging} from "./Loginstyle";



function Login(props) {
  return (
    <Container>
        <Nav>
            <a href='/'>
                <img src='./images/login-logo.svg' alt=''/>
            </a>
            <div>
                <Join>Join now</Join>
                <SignIn>Sign In</SignIn>
            </div>
        </Nav>
        <Section>
            <Logingthumb>
                <h1>Welcome to your professional community</h1>
                <img src='./images/login-hero.svg' alt='' />
            </Logingthumb>
            <Form>
                <Googleloging>
                    <img src='./images/google.svg' alt='' />
                    Sign in with Google
                </Googleloging>
            </Form>
            
        </Section>
    </Container>
  )
}



export default Login
