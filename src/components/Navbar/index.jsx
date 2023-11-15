import React from 'react'
import { Col, Row } from 'antd';

import { FaPhoneAlt } from "react-icons/fa";
import './index.css'
const Navbar = () => {
  return (
    <>
    <Row >
      <Col className='col nav-logo' span={4}>
        <h2>
            Pulse
            <span>.</span>
        </h2>
      </Col>
      <Col className='col nav-ul' span={16}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </Col>
      <Col className='col reservation' span={4}>
        
        <p><span>Reservations </span> <FaPhoneAlt className='fa-phone'/> 652-345 3222 11  </p>
      </Col>
    </Row>
    
    </>
  )
}

export default Navbar