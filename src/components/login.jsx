import React, { Component } from 'react';

class Login extends Component {
    state = {  } 

    username = React.createRef();

    handleSubmit = e => {
        const username = this.username.current.value
        e.preventDefault();
    }

    render() { 
        return (
        <React.Fragment>
            <h1 className='p-3'>Login</h1>
            <form className='p-4' onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input ref={this.username} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    );
    }
}
 
export default Login;