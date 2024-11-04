export default function del(id, data) {
    function traverse(data) {
      return data
        .map((curr) => {
          if (curr.id === id) return null; 
          if (curr.replies && curr.replies.length > 0) {
            curr.replies = traverse(curr.replies); 
          }
          return curr;
        })
        .filter((item) => item !== null); 
    }
    
    return traverse(data);
  }
  
  