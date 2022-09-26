import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarCss.css';
import { BsSearch,BsFillPersonFill } from "react-icons/bs";

const NavbarCom = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <nav className='navbar_items'>
    <div className='navbar_brand'>
  <a href='/' >Strona z artykułami</a>
  </div>
    <div className='navbar_links'>
        <li onMouseEnter={()=>{setOpen1(!open1)}} onMouseLeave={()=>{setOpen1(!open1)}}><a href='#'>TECH</a>{open1 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li onMouseEnter={()=>{setOpen2(!open2)}} onMouseLeave={()=>{setOpen2(!open2)}}><a href='#'>TECH</a>{open2 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li onMouseEnter={()=>{setOpen3(!open3)}} onMouseLeave={()=>{setOpen3(!open3)}}><a href='#'>TECH</a>{open3 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li onMouseEnter={()=>{setOpen4(!open4)}} onMouseLeave={()=>{setOpen4(!open4)}}><a href='#'>TECH</a>{open4 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li><a href='/add'>Dodaj</a></li>
        <li><a href='#'>KONTAKT</a></li>
        <li><a href='#'>WSPOLPRACA</a></li>
      </div>
  <div className='search_menu'>
          <form className='form'>
        <input className='navbar_input' type="text" placeholder='Napisz cos'>
        </input>
        <button className='navbar_button'>
        <BsSearch className='search'>Search</BsSearch>
        </button>
      </form>
      </div>
      <div onMouseEnter={()=>{setOpen5(!open5)}} onMouseLeave={()=>{setOpen5(!open5)}}>
         <BsFillPersonFill className='navbar_user'/>
         {open5 && (
         <ul className='drop2'>
          <li><a className='user_a' href='/add'>Dodaj artykuł</a></li>
          <li><a className='user_a' href='/add'>Twoje artykuły</a></li>
          <li><a className='user_a' href='/add'>Ustawienia</a></li>
          <li><a className='user_a' href='/add'>Wyloguj</a></li>
         </ul>)}
      </div>
      
</nav>

  )
}

export default NavbarCom