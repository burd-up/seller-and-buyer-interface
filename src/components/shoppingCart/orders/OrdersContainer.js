import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Orders from "./Orders";

class OrdersContainer extends React.Component {
  render() {
    return <Orders {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    orders: state.shopAssistantPage.orders,
  }
}

export default compose(
    connect(mapStateToProps,{})
)(OrdersContainer)
