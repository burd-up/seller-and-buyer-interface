import React from 'react';

function Url(props) {

    return (<div>
            {props.url}
            <button onClick={() => props.deleteURL(props.id)}>delete link</button>
        </div>
    )
};
export default Url;