import React, {useCallback, useEffect, useState} from 'react';
import plus from '../../public/plus.svg';
import minus from '../../public/minus.svg';
import style from './product.module.css';

const PluseMinusButton = React.memo ((props) =>{

    return <div>
                    <button className={style.plusMinus} onClick={() => {
                        props.addToShoppingCart(props.id)
                    }}><img src={plus}/></button>
                    <button className={style.plusMinus} onClick={() => {
                        props.deleteFromShoppingCart(props.id)
                    }}><img src={minus}/></button>
                </div>
})

export default PluseMinusButton;