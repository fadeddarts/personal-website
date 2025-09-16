import React from 'react'
import { Container } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Content from './Content'
import Technologies from './Technologies'
import Projects from '../projects/Projects'
import Footer from './Footer'

const Homepage = () => {
  return (<Container minH="100vh" maxW="100%" p={0} position="relative" zIndex="1">
    <Navbar />
    <Content />
    <Technologies />
    <Projects />
    <Footer />
  </Container>
  )
}

export default Homepage