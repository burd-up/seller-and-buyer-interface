import React from 'react';
import style from './Reviews.module.css';
import userImg from './../../public/user.svg';

function Review(props) {

    return <div className={style.review}>
        <div ><img className={style.userImg} src={ userImg}/></div>
        <div>
            <div className={style.title}>{props.title}</div>
            <div className={style.textReview}>{props.body}</div>
        </div>
    </div>
}

export default Review;