import React from 'react'
import MainBar from "./mainBar";
import LoginRegister from "./LoginRegister";

import "./Scss/header.scss"

function Header() {

  
  return (
    <header>
        <MainBar />
        <LoginRegister />

    </header>
  )
}

export default Header