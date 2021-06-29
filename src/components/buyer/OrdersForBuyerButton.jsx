import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../buyer/buyer.module.css";
import list1 from '../../public/list.svg';

const OrdersForBuyerButton = (props) => {
    return (
            <NavLink className={style.nav} to='/ordersForBuyer'>
                <div className={style.orders}><img className={style.imgForOrders}  src={list1}/><br/>{props.orders.length}</div>
            </NavLink>
    )
};

export default OrdersForBuyerButton;