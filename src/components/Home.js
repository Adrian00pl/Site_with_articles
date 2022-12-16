import React, { useEffect,useState } from 'react'
import axios from '../api/axios'
import { BiRightArrowAlt } from 'react-icons/bi';
import { PaginationControl } from 'react-bootstrap-pagination-control';
const Home= () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const response = await axios.get('/api/article/getAll')
        console.log(response.data)
        setData(response.data)

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
              {data.map((item,key)=>
                <article className='article'>
                  <div>
                  <img src='https://cdn.boop.pl/uploads/2022/07/twoj-sklep-lol-2-259x143.jpg'></img>
                  </div>
                  <div className='article_body'>
                  <header>
                        <span>{item.articleTags[0].name}</span>
                        <h3>{item.title}</h3>
                      </header><footer>
                          <p>{item.creationDate}</p>
                        </footer>
                  </div>
                </article>)}
              </li>
            </ul>
            </div> 
            


        </div>
        </div>
    </div>
  )
}

export default Home