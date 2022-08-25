import React from 'react'
import Daba from './Daba'
import text from './text'
import { Container } from 'react-bootstrap';
function About() {
    return ( 
        <Container className=' my-4'>
            <h1>About Us</h1>
        {text.map(t=>{
           return <Daba text={t} />
        })}
        </Container>

    )
}

export default About;