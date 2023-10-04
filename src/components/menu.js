import React from 'react'
import "./Scss/menu.scss"
import todoIcon from "./images/icon-todo.svg"
import iconReminder from "./images/icon-reminders.svg"
import iconPlanning from "./images/icon-planning.svg"
import iconCalendar from "./images/icon-calendar.svg"



function menu() {
  return (
    <ul className="menuList">
      <li>Features
       <ul>
        <li><img src={todoIcon} alt="todo icon" className="icon"></img>Todo List</li>
        <li><img src={iconCalendar} alt="calendar icon" className="icon"></img>Calendar</li>
        <li><img src={iconReminder} alt="reminder icon" className="icon"></img>Reminders</li>
        <li><img src={iconPlanning} alt="planning icon" className="icon"></img>Planning</li>
       </ul>
      </li>
      <li>Company
      <ul>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
       </ul>
      </li>
      <li>Careers</li>
      <li>About</li>


    </ul>
  )
}

export default menu