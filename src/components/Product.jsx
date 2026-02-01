import React, { Component } from 'react';

class Product extends Component {
   

     changeColor = () => {
        return this.props.product.count === 0 ? 'bg-yellow-500' : 'bg-green-500';
     }

    render() { 
        return (
            <React.Fragment>
            <div className='flex flex-row items-center space-x-2 mb-4'>
                <div className='font-bold'>{this.props.product.name} </div>
                <div className={`rounded full border p-2 ${this.changeColor()}`}>{this.props.product.count} </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.props.onClick(this.props.product)}>+</button>
                <i onClick={() => this.props.onDelete(this.props.product)} className="fa-solid fa-trash"></i>
            </div>
            </React.Fragment>   
        );
    }
}
 
export default Product;