import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div
      className="container container-fluid"
      style={{
        height: '10vh',
        opacity: 0.8,
        position: absolute,
        bottom: 0,
        right: 0,
      }}
    >
      <img style={{ height: '100%' }} src="../../../public/img/WA.png" />
    </div>
  </div>
)

export default Footer
