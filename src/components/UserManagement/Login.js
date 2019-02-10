import React, {Component, Fragment} from 'react';
import Button from "../../containers/UserManagement";


class Login extends Component{
    render() {

        return (
            <Fragment>
                <h1>Login</h1>
                <form action='/'>
                <input
                    name="email"
                    type='email'
                    placeholder="Email"
                    required
                    onChange={this.handleChange}/>
                    <input
                        name="password"
                        type='password'
                        placeholder="Password"
                        required
                        onChange={this.handleChange}/>
                    <Button type=".NormalButton" text="Login" clicked={this.loginHandler}/>
                </form>
            </Fragment>
        );
    }
};

export default Login;
