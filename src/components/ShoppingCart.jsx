import React, { Component } from 'react';
import Product from './Product';

class ShoppingCart extends Component {

    constructor(props) {
        //initialize state if needed
        //props passed from parent component
        // first call
        super(props);
    }   

    componentDidMount() {
       // call any backend services or APIs here
       // third, its called after render method
       // load data from server
    }

    componentDidUpdate() {
        // compare prevprops with current props
        // with this you can decide to make a new API call
        // two parameters: prevprops, prevstate
        // fourth, its called after render method
    }

    componentWillUnmount() {
        // cleanup code like removing listeners
        // close connections
        // fifth, its called before component is removed from DOM
    }

    render() {
        return (
            <div>
                <h2>Shopping Cart</h2>
                    {this.props.products.map((product) => (
                   <Product
                        key={product.id}
                        product={product}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                    />
                    ))}
                    <button
                    onClick={this.props.onReset}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                    Reset
                    </button>

            </div>
        );
    }
}

export default ShoppingCart;