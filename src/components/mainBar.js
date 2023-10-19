import React from 'react'
import Logo from "./Logo";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import "./Scss/mainBar.scss";
function mainBar() {
  return (
    <div className=" mainBarComponent">
        <Logo />
        <Menu />
        <MobileMenu />
    </div>
  )
}

export default mainBar