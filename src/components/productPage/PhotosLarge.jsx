import React, { useState } from 'react';
import arrowNext from '../../public/arrows/arrow_forward.svg';
import arrowBack from '../../public/arrows/arrow_back.svg';
import style from './product.module.css'

let PhotosLarge = React.memo((props) =>{
  const [count, setCount] = useState(0);
  return <div className={style.photo}>
    <button className={style.chengePhoto} onClick={() => {count <= 0 ? setCount(props.photos.length-1) : setCount(count - 1)}}><img src={arrowBack}/></button>
    <div><img className={style.photoImg} width={200} src={props.photos.length === 0 ? '../../../../public/logo192.png' : props.photos[count]}/></div>
    <button className={style.chengePhoto} onClick={() => {count >= props.photos.length-1 ? setCount(0) : setCount(count + 1)}}><img src={arrowNext}/></button>
  </div>
})

export default PhotosLarge;