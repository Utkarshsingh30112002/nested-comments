import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import add from '../utility/add';


const Input = ({id,setComments,comments,setReply}) => {
    
    const [input,setInput]=useState('')
    function submit(e){
      e.preventDefault()
      if(!input.trim())return;
      const obj={
        id:uuidv4(),
        text:input,
        replies:[]
      }
      comments=add(id,comments,obj)
      setInput('')
      setComments([...comments])
      setReply(false)
    }
  return (
    <>
    <form  onSubmit={submit}>
    <input placeholder='inter new comment' value={input} onChange={(e)=>setInput(e.target.value)}/>
    </form>
    </>
  )
}

export default Input