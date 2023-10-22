import React from 'react'
import logo from "../images/logo.svg"
import "../Scss/logo.scss"


function Logo() {
  return (
    <div className="logoComponent">
        <img className="logoImg" alt="logo" src={logo}></img>
    </div>
  )
}

export default Logo