import React from 'react'
import { Container, Section, Content, Layout } from './Homestyle'
import Main from './Main'
import Rightside from './Rightside'
import Leftside from './Leftside'

function Home() {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry?-</a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business moving.
        </p>
      </Section>
      <Layout>
        <Leftside/>
        <Main/>
        <Rightside/>
      </Layout>
    </Container>
  )
}

export default Home
