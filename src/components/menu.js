import React, {useState} from 'react';
import "./Scss/menu.scss"
import arrowDownIcon from "./images/icon-arrow-down.svg"
import arrowUpIcon from "./images/icon-arrow-up.svg"
import todoIcon from "./images/icon-todo.svg"
import iconReminder from "./images/icon-reminders.svg"
import iconPlanning from "./images/icon-planning.svg"
import iconCalendar from "./images/icon-calendar.svg"



function Menu(props) {
  const[showMenuListFeatures, setShowMenuListFeatures] =useState(false);
  const[showMenuListCompany, setShowMenuListCompany] =useState(false);


  function showPodMenuFeatures(){
    setShowMenuListFeatures(!showMenuListFeatures);
    
  }
  function showPodMenuCompany(){
    setShowMenuListCompany(!showMenuListCompany);
  }
  return (
    <ul className="menuList">
      <li onClick={() => showPodMenuFeatures()}>Features <img src={showMenuListFeatures ? arrowUpIcon : arrowDownIcon} alt="arrow down/up icon" className="icon"></img>
      {showMenuListFeatures ?
      <ul className="podMenuListFeatures">
        <li><img src={todoIcon} alt="todo icon" className="icon" ></img>Todo List</li>
        <li><img src={iconCalendar} alt="calendar icon" className="icon"></img>Calendar</li>
        <li><img src={iconReminder} alt="reminder icon" className="icon"></img>Reminders</li>
        <li><img src={iconPlanning} alt="planning icon" className="icon"></img>Planning</li>
       </ul> : "" }
       
      </li>
      <li onClick={() => showPodMenuCompany()}>Company <img src={showMenuListCompany ? arrowUpIcon : arrowDownIcon} alt="arrow down/up icon" className="icon"></img>
      {showMenuListCompany ?
      <ul className="podMenuListCompany">
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
       </ul> : "" }
      </li>
      <li >Careers</li>
      <li>About</li>


    </ul>
  )
}

export default Menu