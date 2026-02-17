import React, { Component, use } from 'react';
import Joi from 'joi-browser';

class Login extends Component {
    state = { 
        username : "",
        password : "",
        errors: {}
     } 

     schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
      };

    handleSubmit = e => {
        //no reload for the page
        e.preventDefault();

       const errors = this.validate()
       //if there is a error then stop
       if (errors) return;
       console.log("submit");
    }

    validate = () => {
        const errors = {};
        //Clone State
        const state = { ...this.state };
        const res = Joi.validate(state, this.schema, { abortEarly: false });
        console.log(res)
        if (res.error === null) {
          this.setState({ errors: {} });
          return null;
        }
    
        for (const error of res.error.details) {
          errors[error.path] = error.message;
        }
        this.setState({ errors });
        return errors;
      };

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
            {this.state.errors.username && <div className='text-red-500'>Username is required</div>}

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input name ="password" value ={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            {this.state.errors.password && <div className='text-red-500'>Password is required</div>}
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    );
    }
}
 
export default Login;