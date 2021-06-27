import React from 'react';
import style from './Preloader.module.css';


function Preloader(props) {


    return <div className={style.mkSpinnerWrap}>
        <div className={style.mkSpinnerBubbles}></div>
    </div>
};
export default Preloader;