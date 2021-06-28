import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import OrdersCompleted from "./OrdersCompleted";
import {completeTheOrder} from "../../../redux/shopAssistantReducer";

class OrdersCompletedContainer extends React.Component {
  render() {
    return <OrdersCompleted {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    orders: state.shopAssistantPage.orders,
    ordersCompleted: state.shopAssistantPage.orders.filter(el => el.status === 'completed'),
  }
}

export default compose(
    connect(mapStateToProps,{completeTheOrder})
)(OrdersCompletedContainer)
