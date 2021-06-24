import React from 'react';
import style from './Reviews.module.css';

function Review(props) {

    return <div className={style.reviews}>
        <div>{props.userId}</div>
        <div>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </div>
    </div>
}

export default Review;