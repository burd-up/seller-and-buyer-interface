import React, { useState } from 'react';

function Photos(props) {
  const [count, setCount] = useState(0);
  return <div>
    <button onClick={() => {count <= 0 ? setCount(props.photos.length-1) : setCount(count - 1)}}>back</button>
    <img width={200} src={props.photos.length === 0 ? '../../../../public/logo192.png' : props.photos[count]}/>
    <button onClick={() => {count >= props.photos.length-1 ? setCount(0) : setCount(count + 1)}}>next</button>
  </div>
}

export default Photos;