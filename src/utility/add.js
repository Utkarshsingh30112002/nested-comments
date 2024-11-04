export default function add(id, data,obj) {
    if(id===0){
        data.push(obj)
        return data;
    }
    function traverse(data) {
      return data
        .map((curr) => {
          if (curr.id === id) {curr.replies.push(obj); 
          return curr;}
          else if(curr.replies && curr.replies.length > 0){
            curr.replies=traverse(curr.replies)
          }
          return curr;
        })
    }
    
    return traverse(data);
  }
  