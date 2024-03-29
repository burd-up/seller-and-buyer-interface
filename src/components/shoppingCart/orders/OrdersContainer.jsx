import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Orders from "./Orders";
import {completeTheOrder} from "../../../redux/shopAssistantReducer";

class OrdersContainer extends React.Component {
  render() {
    return <Orders {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    orders: state.shopAssistantPage.orders,
    ordersPerform: state.shopAssistantPage.orders.filter(el => el.status === 'perform'),
  }
}

export default compose(
    connect(mapStateToProps,{completeTheOrder})
)(OrdersContainer)
