import React, { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Productform() {
  const [state, setState] = useState({ name: "", price: "" });
  const navigate = useNavigate();
  const { id } = useParams(); 
  console.log(id);

 useEffect(() => {
  if (!id || id === "add") return;

  const fetchProduct = async () => {
    const res = await axios.get(`http://localhost:5000/products/${id}`);
    setState({ name: res.data.name, price: res.data.price });
  };

  fetchProduct();
}, [id]);


  const handlesubmit = async e => {
    e.preventDefault();
    //////////////////
    if (!id && id === "add") {
    const obj = { ...state, count: 0, isInCart: false };
    await axios.post("http://localhost:5000/products", obj);
    } else {
    const obj = { ...state, count: 0, isInCart: false };
    await axios.put(`http://localhost:5000/products/` + id , obj);
    }

    navigate("/dashboard");
  };

  const handlechange = e => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <div>
      {!id || id === "add" ? <h1 className="text-2xl font-bold px-5 mt-4">Add Product</h1> : <h1 className="text-2xl font-bold p-5">Edit Product</h1>}
      <form className='p-10' onSubmit={handlesubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input name="name" value={state.name} onChange={handlechange} type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input name="price" value={state.price} onChange={handlechange} type="text" className="form-control" id="price"/>
        </div>
        <button type="submit" className="btn btn-primary">{!id && "Submit" || "Edit"}</button>
        </form>
    </div>
  )
}

export default Productform  

