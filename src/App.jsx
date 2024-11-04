import { useState } from 'react'
import './App.css'
import ShowComments from './components/ShowComments'
import Input from './components/Input'
import data from '../src/data.js'
import del from './utility/delete.js'
import add from './utility/add.js'


function App() {
  const [reply,setReply]=useState(false)
  let [comments, setComments] = useState(data)

console.log(comments)
  return (
    <>
    <div className='m-10 flex flex-col gap-10'>
      <h3 className='font-extrabold'>Comments</h3>
    <Input id={0} comments={comments} setComments={setComments} setReply={setReply}/>
    <ShowComments data={comments}  comments={comments} setComments={setComments}/>
    </div>
    </>
  )
}

export default App
