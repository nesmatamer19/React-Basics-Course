import React, { Component, use } from 'react';

class Login extends Component {
    state = { 
        username : "",
        password : ""
     } 


    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = e => {
       let state = {...this.state}
       state[e.currentTarget.name] = e.currentTarget.value;
       this.setState( state);
    }

    render() { 
        return (
        <React.Fragment>
            <h1 className='p-3'>Login</h1>
            <form className='p-4' onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input name ="username" value ={this.state.username} onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input name ="password" value ={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    );
    }
}
 
export default Login;