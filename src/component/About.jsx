import React, { Component } from 'react'
import {Container,Col, Image ,Row} from 'react-bootstrap'
import src from '../face.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <Image className="header-image"></Image>
                <Container>
                     <Row>   
                        <Col xs={12} sm={4} >
                            <Image width="100%" src={src} className="profile-image mx-xs-auto mx-sm-0"></Image>
                        </Col>
                        <Col  xs={12} sm={6}>
                        <h1>Adam</h1>
                            <p>
                                I am god and i want to create this creature and send it to heaven and do nothing if he do somework that i don't
                                like I will send it to hell named Earth
                            </p>
                            <p>
                            that is how the story begin your sience is bull shit what I say is true 
                            </p>
                            <p>so pray for me i need it i'm infinty but i need it  so go don't wait</p>
                                <p>
                            that is how the story begin your sience is bull shit what I say is true 
                            </p>
                            <p>so pray for me i need it i'm infinty but i need it  so go don't wait</p>
                            <p>I am god and i want to create this creature and send it to heaven and do nothing if he do somework that i don't
                                like I will send it to hell named Earth that is how the story begin your sience is bull shit what I say is true 
                                so pray for me i need it i'm infinty but i need it  so go don't wait</p>
                        </Col>
                      </Row>  
                </Container>
            </div>
        )
    }
}
