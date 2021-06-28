import React from 'react';
import {NavLink} from "react-router-dom";
import style from './shopAssistant.module.css';
import list1 from '../../public/list.svg';
import list2 from '../../public/list/checklist_black_24dp.svg'

const HeaderOfShopAssistant = React.memo((props) => {

    return (<div className={style.list}>

            <NavLink className={style.titleShopAssistant} to='/shopAssistant'><h2>Interface of assistant</h2></NavLink>
            <NavLink className={style.orders} to='/ordersCompleted'>
                <div> Orders {props.orders.filter(el => el.status === 'completed').length}<img
                    src={list2}/></div>
            </NavLink>
            <NavLink className={style.orders} to='/ordersPerformed'>
                <div> Orders {props.orders.filter(el => el.status === 'perform').length}<img
                    src={list1}/></div>
            </NavLink>
        </div>
    )
});

export default HeaderOfShopAssistant;