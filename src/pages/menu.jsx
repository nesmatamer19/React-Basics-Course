import React, { Component } from "react";

class Menu extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="font-bold text-4xl p-7">Menu</h1>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>

                <td>
                  <i
                    onClick={() => this.props.handleClick(item.id)}
                    className={`fa-solid fa-cart-arrow-down cursor-pointer ${item.bool ? "text-black" : "text-gray-400"}`}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Menu;
