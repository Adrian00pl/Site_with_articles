import React, { useEffect } from 'react'
import axios from '../api/axios'
import { BiRightArrowAlt } from 'react-icons/bi';
const Home= () => {
  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const response = await axios.get('/api/post/getAll')
        console.log(response.data)

      }
      catch(err){
        console.log(err)

      }
    }
    fetch();
    }, [])

  return (
    <div className='main_body'>
        <div className='box'>
          <h1>Reklama</h1>
        </div>
        <div className='rec'>
          <h1>Polecane
          </h1>
          <div className='rec_container'>
        <div className='rec1'>
          </div>
          <div className='rec2'>
          </div>

        </div>
        </div>
        <div className='hot_posts_container'>
          <div>
          <h1>Gorące newsy
          </h1>
          </div>
        <div className='hot_posts'>
          <div className='primary'>
            <ul className='body_ul'>
              <li>
                <article className='article'>
                  <div>
                  <img src='https://cdn.boop.pl/uploads/2022/07/twoj-sklep-lol-2-259x143.jpg'></img>
                  </div>
                  <div>
                  <header>
                    <span>League of Legend</span>
                  <h3>“Twój sklep” z League of Legends ponownie trafił na PBE. Co warto o nim wiedzieć?</h3>
                  </header>
                  <footer>
                    <p>godzinę temu</p>
                  </footer>
                  </div>
                </article>
              </li>
            </ul>
            </div> 
            


        </div>
        <nav>
          <ul className='sites'>
          <li><a href='#'>1</a></li>
          <li><a href='#'>2</a></li>
          <li><a href='#'>3</a></li>
          <li><a href='#'>4</a></li>
          <li><a href='#'>Następna<BiRightArrowAlt/></a></li>
          </ul>
          </nav>
        </div>
    </div>
  )
}

export default Home