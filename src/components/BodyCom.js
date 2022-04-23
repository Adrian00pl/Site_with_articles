import React, { useEffect } from 'react'
import './BodyCss.css';
import api from './api/posts'
const BodyCom = () => {
  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const response = await api.get('/api/post/getAll')
        console.log(response.data)

      }
      catch(err){
        console.log(err)

      }
    }
    fetch();
    }, [])

  return (
    <div className='main'>
        <div className='box'>
          <h1>Reklama</h1>
        </div>
        <div className='rec'>
        <div>
          <h1>Polecane
          </h1>
          </div>
          <div className='recom'>

          </div>
        </div>
        <div className='hot_posts_container'>
          <div>
          <h1>Gorące newsy
          </h1>
          </div>
        <div className='hot_posts'>
            <div className='post'>
            </div>
            <div className='post'>
            </div>
            <div className='post'>
            </div>
            <div className='post'>
            </div>
            <div className='post'>
            </div>
            <div className='post'>
            </div>
            <div className='post'>
            </div>
            <div className='post'>
            </div> 
            


        </div>
        </div>
    </div>
  )
}

export default BodyCom