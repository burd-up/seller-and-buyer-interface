import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import PhotosBuyer from "./PhotosBuyer";

function PhotoLink(props) {

    return<div onClick={() => props.addCurrentProduct(props.id)}>
                <PhotosBuyer id={props.id} photos={props.photos}/>
        </div>
}

export default PhotoLink;