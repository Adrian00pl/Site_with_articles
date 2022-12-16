import React from 'react'
import { useState } from 'react';
import {Editor} from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import draftToHtml from 'draftjs-to-html';
import axios from '../api/axios'

const AddPost = () => {
const [editorState, setEditorState] = useState(EditorState.createEmpty());
const [png, setPng] = useState();
const [title, setTitle] = useState();
const [tags,setTags] = useState();
const [content, setContent] = useState([]);
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/article/add',
      JSON.stringify({ title:title, content:content,user:{nickname:"Adrian",password: "Adrian1!"},articleTags:[tags] }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    );
    
    console.log(response?.err);
  } catch (err) {
    console.log(err)
}
}
const onEditorStateChange=(editorState)=>{
setEditorState(editorState);
const rawContentState = convertToRaw(editorState.getCurrentContent());
console.log(draftToHtml(rawContentState))
setContent(draftToHtml(rawContentState))
}
  return (
    <div className='main_add'>
      <h1>Dodawanie artykułu</h1>
      <form onSubmit={handleSubmit} className='add_form'>
        <div className='first'>
      <label htmlFor='myFile'>Obraz tytułowy:</label>
      <input type="file" id="myFile" name="filename" value={png} onChange={(e) => setPng(e.target.files[0])}/>
        <label htmlFor='tittle'>Tytuł: </label>
      <input type='text' id='tittle' required onChange={(e) => setTitle(e.target.value)}/>
      <label htmlFor='tags'>Tagi: </label>
        <select multiple id='tags' onChange={(e) => setTags(e.target.value)}>
          <option value={"league-of-legends"}>League of Legends</option>
          <option value={"CS-GO"}>CS:GO</option>
          <option value={"overwatch-2"}>Overwatch 2</option>
          <option value={"path-of-exile"}>Path of Exile</option>
        </select>
        </div>
        <div className='second'>
        <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
  toolbarClassName="e_toolbar"
  wrapperClassName="wrapperClassName"
  editorClassName="e_editor"
/>
        <button type='submit'>Dodaj</button>
        </div>
        </form>
        <div className='form_container'>
        </div>
        </div>

  )
}

export default AddPost