import React, {useState} from 'react';
import Photos from "../../shopAssistant/product/Photos";
import style from "../../buyer/product/product.module.css";
import {NavLink} from "react-router-dom";

function PhotoLink(props) {

    return<div onClick={() => props.addCurrentProduct(props.id)}>
            <NavLink to={'/product/' + props.id}>
                <Photos photos={props.photos}/>
            </NavLink>
        </div>

}

export default PhotoLink;