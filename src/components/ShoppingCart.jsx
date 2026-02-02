import React, { Component } from 'react';
import Product from './Product';

class ShoppingCart extends Component {

state = {
        products: [
            { name: "coffee", count: 5, id: 1 },
            { name: "tea", count: 10, id: 2 },
            { name: "hot chocolate", count: 15, id: 3 }]
    }

    deleteHandler = (product) => {
        const products = this.state.products.filter((p) => p.id !== product.id);
        this.setState({ products: products });
    }

    resetHandler = () => {
        const products = this.state.products.map((p) => {
            p.count = 0;
            return p;
        });
        this.setState({ products: products });
    }

    clickHandler = (product) => {
        const products = this.state.products.map(p =>
            p.id === product.id ? { ...p, count: p.count + 1 } : p
        )
        this.setState({ products: products });
    }

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
                {this.state.products.map((product) => {
                    return <Product onDelete={() => this.state.deleteHandler(product)} key={product.id} product={product}
                        onClick={() => this.state.clickHandler(product)} />
                })}
                <button onClick={this.state.resetHandler} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>

            </div>
        );
    }
}

export default ShoppingCart;