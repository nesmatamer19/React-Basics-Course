import { link } from 'joi';
import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setposts] = useState([]);

   useEffect(() => {
    const fetchPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    setposts(data);
  }
   fetchPosts();
  },[]);

  return (
    <ul>
      {posts.map((p) => <li key={p.id}>{p.title}</li>)}
    </ul>
  )
}

export default Posts