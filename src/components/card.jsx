import React from 'react'
import Input from "./Input";
import del from "../utility/delete.js";
import { useState } from "react";

const Card = ({curr,comments,setComments}) => {
    const [reply,setReply]=useState(false)
  return (
    <>
   <h4>{curr.text}</h4>
    <div className='m-5'>
            {reply?<Input id={curr.id} setComments={setComments} comments={comments} data={comments} setReply={setReply}/>:<button className='p-1 bg-slate-300' onClick={()=>setReply(true)}>reply</button>}
            <button className='p-1 bg-slate-300 mx-2' onClick={()=>{
              comments=del(curr.id,comments)
              setComments([...comments])
            }
            }>delete</button>
    </div>
    </>
  )
}

export default Card