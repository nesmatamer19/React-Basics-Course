import React from 'react'
import { useLoaderData } from 'react-router-dom'

export async function Dataloader() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  return result.json()
}

const Data = () => {
   const data = useLoaderData();
  return (
    <div>Data</div>
  )
}

export default Data