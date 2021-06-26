import React from 'react';
import Review from "./Review";
import style from './Reviews.module.css'

function Reviews(props) {

    let reviews = props.reviews? props.reviews.map(el => <Review key={el.id} userId={el.userId} title={el.title} body={el.body}/>) : null;

    return <div className={style.allReviews}>
        <div className={style.titleOfReviews}>
            <h2>Revievs:</h2>
            <div></div>
            <button onClick={() => props.closeReviews()} className={style.buttonCloseReviews}>x</button>
        </div>
        {reviews}
    </div>
}

export default Reviews;