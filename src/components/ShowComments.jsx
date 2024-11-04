import del from "../utility/delete.js";
import Card from "./card.jsx";
import Input from "./Input";
import { useState } from "react";
const ShowComments = ({ data ,setComments,comments}) => {
  const [reply,setReply]=useState(false)
  return (
    <div>
      {data.map((curr) => (
        <div key={curr.id} style={{ marginLeft: '20px', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
          <Card id={curr.id} setComments={setComments} comments={comments} data={comments} curr={curr}/>
          {curr.replies && curr.replies.length > 0 && (
            <ShowComments data={curr.replies}  comments={comments} setComments={setComments}/>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowComments;