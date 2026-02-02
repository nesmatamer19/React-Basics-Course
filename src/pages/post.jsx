import React from 'react'
import { useParams , useSearchParams} from 'react-router-dom'


const Post = () => {
    const {id} = useParams();
    const {searchParams} = useSearchParams();
  return (
    <div>
      <h1>This is a post {id}</h1>
    </div>
  )
}

export default Post
