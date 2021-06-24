import React from 'react';
import Review from "./Review";

function Reviews(props) {

    let reviews = props.reviews? props.reviews.map(el => <Review key={el.id} userId={el.userId} title={el.title} body={el.body}/>) : null;

    return <div>
        {reviews}
    </div>
}

export default Reviews;