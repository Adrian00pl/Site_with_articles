import React from 'react'
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
const Article = () => {
  const location = useLocation();
  const data = location.state;
  const parse = require('html-react-parser');
  return (
    <StyledArticle>
      <h1>{data.title}</h1>
      <div className='form'>

      <div>
        {parse(data.content)}
      </div>
      </div>
      </StyledArticle>
  )
}

export default Article
const StyledArticle = styled.div`
  width: 60%;
  margin-top: 100px;
  border-radius: 15px;
  border: 1px solid white;
  padding: 15px;
  .form{
    display:flex;
    flex-direction:column;
  }
  }
`;