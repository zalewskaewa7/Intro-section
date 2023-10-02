import React from 'react'
import logo from "./images/logo.svg"


function Logo() {
  return (
    <div className="logoComponent">
        <img className="logoImg" alt="logo" src={logo}></img>
    </div>
  )
}

export default Logo