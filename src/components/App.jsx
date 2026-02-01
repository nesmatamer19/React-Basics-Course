import { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import NavBar from './navbar';
import Count_effect from './count_effect';

class App extends Component {
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

  render() {
    return (
      <div>
        <NavBar productscount={this.state.products.filter(p => p.count > 0).length} />

        <main className='container'>
          <Count_effect/>
          <ShoppingCart products={this.state.products} deleteHandler={this.deleteHandler} resetHandler={this.resetHandler} clickHandler={this.clickHandler} />
        </main>
      </div>
    )
  }
}

export default App
