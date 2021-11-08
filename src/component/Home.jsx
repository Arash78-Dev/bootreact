import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Container , Col ,Row,Image,Button} from 'react-bootstrap'
import './home.css'
import src from '../face.jpg'
import src1 from '../eve.jpg'
import src2 from '../god.jpg'


class Home extends Component {
    render() {
        return (
           <Container>
               <div className="jumb text-center mb-4">
                    <h2>welcome to Heaven</h2>
                    <p>This site created by react , react-bootstrap and router</p>
                    <Link to="/about"><Button variant="primary" className="text-white">learn  more</Button></Link>
               </div>
               <Row className="show-grid text-center">
                   <Col xs={12} sm={4} className="person-wrapper">
                       <Image width="70%"  src={src} alt="as"
                       roundedCircle className="profile-pic" />

                       <h1>Adam</h1>
                       <p>this human you see is the first and his wife was Eve</p>
                   </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                       <Image width="70%"  src={src1} alt="as"
                       roundedCircle className="profile-pic" />

                       <h1>Eve</h1>
                       <p>this women you see is the first and his husband was Adam</p>
                   </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                       <Image width="70%"  src={src2} alt="as"
                       roundedCircle className="profile-pic" />

                       <h1>God</h1>
                       <p>this is not Christianity god he look better than this this god of muslim</p>
                   </Col>
               </Row>
           </Container>
        )
    }
}

export default Home