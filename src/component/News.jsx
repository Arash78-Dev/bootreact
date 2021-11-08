import React, { Component } from 'react'
import { Container , Row } from 'react-bootstrap'
import './news.css'
import src1 from '../news.jpg'
import src2 from '../face.jpg'
import src3 from '../eve.jpg'
import src4 from '../god.jpg'


import New from './new'

export default class News extends Component {
    render() {
        return (
            <div>
              <div className="header text-center">
                <Container className=" d-flex flex-column justify-content-center h-100"> 
                        <h1>HN</h1>
                    <h3 className="display-4">Heaven News</h3>
                    <p className="text-dark  lead">The Cable News Network is a  news-based pay revelation channel headquartered in Heaven City. 
                        It is owned by Gabriel</p>
                </Container>
              </div> 


              <Container className="mt-2">
                  <h1 className="text-center border-bottom">News</h1>
                  <Row>
                    <New title="heaven trees are going to be old and we have to think about it" src={src1} />
                    <New title="Adam build a new angel factory out of town"  src={src2}/>
                    <New title="There is some rumor about Eve and her suicide ,is it finally happened??"  src={src3}/>
                    <New title="God say it's not true all news about Eve"  src={src4}/>
                    <New title="Adam build a new angel factory out of town"  src={src1}/>
                    <New title="heaven trees are going to be old and we have to think about it" src={src2}/>
                    <New title="There is some rumor about Eve and her suicide ,is it finally happened??"  src={src3}/>
                    <New title="God say it's not true all news about Eve" src={src4}/>
                    <New title="heaven trees are going to be old and we have to think about it" src={src1} />
                    <New title="Adam build a new angel factory out of town"  src={src2}/>
                    <New title="There is some rumor about Eve and her suicide ,is it finally happened??"  src={src3}/>
                    <New title="God say it's not true all news about Eve"  src={src4}/>
                    <New title="Adam build a new angel factory out of town"  src={src1}/>
                    <New title="heaven trees are going to be old and we have to think about it" src={src2}/>
                    <New title="There is some rumor about Eve and her suicide ,is it finally happened??"  src={src3}/>
                    <New title="God say it's not true all news about Eve" src={src4}/>
                   </Row>   


              </Container>

            </div>
        )
    }
}
