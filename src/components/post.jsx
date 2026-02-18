import React from 'react'
import { useState , useEffect } from 'react'

const Post = () => {
    const [post, setpost] = useState(null)
    const [id, setid] = useState('')
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        const fetchpost = async() =>{
            setloading(true);
           const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/?_delay=3000`)
           const data = await res.json()
           setloading(false)
           setpost(data);
        }
        if(id != "") {
           fetchpost();
        }
    }, [id])

  return (
    <div>
    <h1>Post</h1>
    <div>
    <label htmlFor="id">PostID</label>
    <input
    className='border'
     value={id}
     onChange={(e) => setid(e.target.value)}
     name="id"
     id="id"
     type="text"
    />
    </div>
    {id && loading && "Loading..."}
    {!loading && post && JSON.stringify(post)}
    </div>
  )
}

export default Post