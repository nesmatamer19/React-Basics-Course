import React, { Component } from "react";
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

const user = { name: "ahmed" };

class RootLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

class Main extends Component {
  state = {
      items: [
        { id: 1, name: "burger", price: "$5.99" , bool: false},
        { id: 2, name: "fries", price: "$2.99" , bool: false},
        { id: 3, name: "cola", price: "$1.99" , bool: false},
      ],
    };
  

  handleClick = (id) => {
    const items = this.state.items.map((item) => 
     item.id === id ? {...item, bool: !item.bool} : item 
     );
    this.setState({items: items});
  };

  render() {
    const router = createBrowserRouter(
      createRoutesFromElements(
    //takes an array of route elements

        <Route path="/" element={
            <RootLayout
              items={this.state.items}
              handleClick={this.handleClick}
            />
          }
        >
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route
            path="menu"
            element={
              <Menu
                items={this.state.items}
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
