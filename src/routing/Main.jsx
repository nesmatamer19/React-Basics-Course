import { Component } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "../components/navbar";
import ShoppingCart from "../components/ShoppingCart";
import ErrorPage from "../pages/error_page";
import DashboardLayout from "../layout/dashboardlayout";
import Dashboard from "../pages/dashboard";
import Protected_route from "../components/protected_route";
import Menu from "../pages/menu";
import Login from "../components/login";
import axios from "axios";
import Posts from "../components/posts";

const user = { name: "ahmed" };

class RootLayout extends Component {
  render() {
    return (
      <div>
         <Navbar
          productsCount={this.props.products.filter((p) => p.bool).length}
        />
        <Outlet />
      </div>
    );
  }
}

class Main extends Component {
  state = {
      products: []
    };

  async componentDidMount() {
    //call backend
    const { data } = await axios.get('http://localhost:5000/products');
   this.setState({products: data})     
  }

  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };

  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };

  handleDelete = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    //Edit
    products.splice(index, 1);
    //Set State
    this.setState({ products });
  };


  handleClick = (id) => {
    const products = this.state.products.map((product) => 
     product.id === id ? {...product, bool: !product.bool} : product 
     );
    this.setState({products: products});
  };

  render() {
    const router = createBrowserRouter(
      createRoutesFromElements(
    //takes an array of route elements

        <Route path="/" element={
            <RootLayout
              products={this.state.products}
              handleClick={this.handleClick}
            />
          }
        >
          <Route path="/login" element={<Login/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route
            path="/cart"
            element={
              <ShoppingCart
                products={this.state.products.filter((p) => p.bool)}
                onIncrement={this.IncrementHandler}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
              />
            }
          />
          <Route
            path="menu"
            element={
              <Menu
                products={this.state.products}
                handleClick={this.handleClick}
              />
            }
          />

          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/dashboard"
            element={
              <Protected_route user={user}>
                <DashboardLayout />
              </Protected_route>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      )
    );

    return <RouterProvider router={router} />;
  }
}

export default Main;
