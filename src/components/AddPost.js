import React from 'react'
import './AddPostCss.css';

const AddPost = () => {
  const handleSubmit = async (e)=>{
    /*
    e.preventDefault();
    try{
        const response = await axios.post(LOGIN_URL,JSON.stringify({user,password}),{headers: {'Content-Type': 'application/json'}, withCredentials:true})
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({user,password,roles,accessToken})
        setUser('');
        setPassword('')
    }
    catch(err){
        setErrMsg(err);

    }

    setSuccess(true);
    */
}
  return (
    <div className='main'>
      <form onSubmit={handleSubmit} className='add_form'>
        <label htmlFor='tittle'>Tytuł:</label>
      <input type='text' id='tittle' required/>
      <label htmlFor='tags'>Tagi:</label>
        <select multiple id='tags'>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor='article_content'>Zawartość:</label>
        <textarea id='article_content' minLength={100}></textarea>
        <button type='submit'>Dodaj</button>
        </form>
        </div>
  )
}

export default AddPost