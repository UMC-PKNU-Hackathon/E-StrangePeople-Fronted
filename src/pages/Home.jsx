import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Posting from '../components/Posting';
import Posts from './Posts';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios'



export default function Home() {
    const [selectedLocation, setSelectedLocation] = useState(''); // 선택된 여행지
    const [selectedSeason, setSelectedSeason] = useState(''); // 선택된 계절
  
  return (
    <div className="homeWrap">
      <div className='container'>
      <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/474x/8c/96/58/8c9658a942ee19a2b2bcf6e338509a48.jpg"
                        alt="First slide"
                        style={{ width: '1000px', height: '600px' }}
                    />
                    <Carousel.Caption>
                        <h3>Sunset Serenity by the Shore!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/474x/06/2f/1f/062f1fd54eb130f682d810afb5474e52.jpg"
                        alt="Second slide"
                        style={{ width: '1000px', height: '600px' }}
                    />
                    <Carousel.Caption>
                        <h3>Lost in the Streets of History!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/474x/93/fd/05/93fd0569c4e0b9426fa50bf6e9a15e16.jpg"
                        alt="Third slide"
                        style={{ width: '1000px', height: '600px' }}
                    />
                    <Carousel.Caption>
                        <h3>Exploring the Beauty of Nature!</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/474x/1c/d5/2d/1cd52daef62c88cd97d9910e9d6bca39.jpg"
                        alt="Four slide"
                        style={{ width: '1000px', height: '600px' }}
                    />
                    <Carousel.Caption>
                        <h3>My favorite trip place!</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Dropdown style={{display:"flex",justifyContent:"center"}}>
            <DropdownButton id="dropdown-basic-button" title="보고싶은 여행지" style={{marginTop:"30px",marginRight:"20px",}}>
                <Dropdown.Item href="#/action-1" onClick={()=>{
                    axios.get('http://43.200.230.191:8080')
                }}>국내</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => setSelectedLocation('해외')}>해외</Dropdown.Item>
            </DropdownButton>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginTop:"30px",backgroundColor:"#88C1E5"}}>
                계절별로 보기
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={() => setSelectedSeason('봄')}>봄</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" >여름</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">가을</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">겨울</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">그밖에...</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Posts location={selectedLocation} season={selectedSeason} />
      </div>

    </div>
  )
}