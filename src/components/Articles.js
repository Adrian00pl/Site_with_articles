import React, { useState, useEffect } from 'react'
import {Link, Navigate, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useNavigate } from "react-router-dom";
import axios from '../api/axios'
import parse from 'html-react-parser';

const Articles = () => {
  const parse = require('html-react-parser');
  const [page, setPage] = useState(1);
  const {tagId} = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const response = await axios.get(`/api/article/getByTag/${tagId}`)
        console.log(response.data)
        setData(response.data)

      }
      catch(err){
        console.log(err)

      }
    }
    fetch();
    }, [page,tagId])
  

  return (
    <div className='main_body'>
      <h1>{tagId}</h1>
    <div className='hot_posts_container'>
            <ul className='body_ul'>
              <li>
              {data.map((item,key)=>
                <article className='article'>
                  <div>
                  <img src='https://cdn.boop.pl/uploads/2022/07/twoj-sklep-lol-2-259x143.jpg'></img>
                  </div>
                  <div className='article_body'>
                  <header>
                        <span>{tagId}</span>
                        <h3><Link to="/article" state={item}>{item.title}</Link></h3>
                      </header>
                      <footer>
                          <p>{item.creationDate}</p>
                        </footer>
                  </div>
                </article>)}
              </li>
            </ul>
        </div>
    <PaginationControl
    page={page}
    between={4}
    total={250}
    limit={20}
    changePage={(page) => {
      navigate(`/${tagId}/${page}`,{replace:true});
      setPage(page)
    }}
    ellipsis={1}
  />
    </div>
  )
}
export default Articles