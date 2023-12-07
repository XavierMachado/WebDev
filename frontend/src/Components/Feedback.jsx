import { useState } from 'react'
import React from 'react'

function Feedback() {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('this is an example of feedback item');
    const handleClick = ()=>{
        setRating((prev)=>{
            return prev+1
        })
        setText('Now that is a new rating')
    }
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Click me to change</button>
      
    </div>
  )
}

export default Feedback