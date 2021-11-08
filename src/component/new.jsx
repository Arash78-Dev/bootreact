import React, { Component } from 'react'
import { Card, Col,Button} from 'react-bootstrap'
import {Fade} from 'react-reveal'
import './new.css'


export default class New extends Component {
    render() {
        return (
            <Col className="margin" xs={8} sm={6} md={4} lg={3}>
                <Fade bottom>
                <Card className="mb-5">
                    <Card.Img src={this.props.src} className="w-100"></Card.Img>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <h5>{this.props.title}</h5>
                        <Button className="btn btn-primary font-controls-lg">more....</Button>
                    </Card.Body>
                </Card>
                </Fade>
            </Col>
            
        
        )
    }
}
