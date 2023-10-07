import React from 'react'
import Logo from "./Logo";
import Menu from "./menu";
import LoginRegister from "./LoginRegister";
import "./Scss/mainBar.scss";
function mainBar() {
  return (
    <div className=" mainBarComponent">
        <Logo />
        <Menu />
        <LoginRegister />
    </div>
  )
}

export default mainBar