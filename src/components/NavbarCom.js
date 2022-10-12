import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import useLogout from '../hooks/useLogout';
import useAuth from "../hooks/useAuth";


const NavbarCom = () => {
  
  const logout = useLogout();
  const navigate = useNavigate();
  const { auth } = useAuth();
  

  const signOut = async () => {
    await logout();
    navigate('/');
}

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <nav className='navbar_items'>
      <div className='navbar_brand'>
        <Link to='/' >Strona z artykułami</Link>
      </div>
      <div className='navbar_links'>
      
        <li onMouseEnter={() => { setOpen1(!open1) }} onMouseLeave={() => { setOpen1(!open1) }}><a href='#'>League of Legends</a>{open1 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li onMouseEnter={() => { setOpen2(!open2) }} onMouseLeave={() => { setOpen2(!open2) }}><a href='#'>CS:GO</a>{open2 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li onMouseEnter={() => { setOpen3(!open3) }} onMouseLeave={() => { setOpen3(!open3) }}><a href='#'>Overwatch 2</a>{open3 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li onMouseEnter={() => { setOpen4(!open4) }} onMouseLeave={() => { setOpen4(!open4) }}><a href='#'>Path of Exile</a>{open4 && (<ul className='drop'><li ><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li><li><a href='#'>AAAAAAAAA</a></li></ul>)}</li>
        <li><a href='#'>Kontakt</a></li>
        
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
      <div className='navbar_user_container' onMouseEnter={() => { setOpen5(!open5) }} onMouseLeave={() => { setOpen5(!open5) }}>
        <BsFillPersonFill className='navbar_user' />
        {open5 && (
          <ul className='drop2'>
            {auth?.accessToken && auth?.roles?.includes(5150) && <li><Link to='/add' className='user_a'>Dodaj artykuł</Link></li>}
            {auth?.accessToken && <li><Link to='/articles' className='user_a'>Twoje artykuły</Link></li>}
            {auth?.accessToken && auth?.roles?.includes(5150) && <li><Link to='/verfication' className='user_a'>Werfikacja artykułow</Link></li>}
            {auth?.accessToken && <li><Link to='/add' className='user_a'>Ustawienia</Link></li>}
            {auth?.accessToken ? <li><button onClick={signOut}>Wyloguj</button></li>:<li><Link to='/login' className='user_a'>Zaloguj</Link></li>}
            
          </ul>)}
      </div>

    </nav>

  )
}

export default NavbarCom