import React from 'react'
import Logo from "./Logo";
import Menu from "./menu";
import "./Scss/mainBar.scss";
function mainBar() {
  return (
    <div className=" mainBarComponent">
        <Logo />
        <Menu />
    </div>
  )
}

export default mainBar