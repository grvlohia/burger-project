import React, { Component } from 'react';

import Order from './Order/Order';
import axiosInstance from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    };

    componentDidMount() {
        axiosInstance.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key,
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
                console.log(this.state.orders);
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }

    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axiosInstance);
