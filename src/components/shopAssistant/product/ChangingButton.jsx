import React, {useEffect, useState} from 'react';
import style from './product.module.css';

function ChangingButton(props) {

    return <div>
            {props.condition ? <button className={props.styleOne? props.styleOne : style.buttonChange} onClick={() => props.functionOne()}>{props.textOne}</button>
                : <button className={props.styleTwo? props.styleTwo : style.buttonChange} onClick={() => props.functionTwo()}>{props.textTwo}</button>}
    </div>
}

export default ChangingButton;