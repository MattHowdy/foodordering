import React, {Component} from 'react';

import axios from 'axios';
import classes from './UserManagement.css';
import Button from '../components/common/UI/Button';
//import Login from '../components/UserManagement/Login';

const registrationURL = "http://localhost:5000/register";
const loginURL = "http://localhost:5000/login";


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : null,
            first_name : null,
            last_name : null,
            email: null,
            password : null,
            password2 : null,
            userRegistration: true,
        };
    }


    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({[name] : value
        });
    };

    loginHandler = () => {
        console.log(this.state)
        axios.post(loginURL, this.state)
            .then(response => {
            this.setState({user: response.data});
            console.log(response.data)
                .catch(error => {
                    console.log("Login failed: " + error)
                })
        });
    }

    registrationHandler = () => {
        console.log(this.state)
        axios.post(registrationURL, this.state)
            .then(response => {
                this.setState({user: response.data});
                console.log(response.data)
                    .catch(error => {
                        console.log("Login failed: " + error)
                    })
            });
    }


    toggleUserManagement= ()=>{
        let toggle = this.state.userRegistration;
        this.setState({userRegistration: !toggle});
        console.log("User Management " + toggle);
    };


    render(){

        let context =    <div>
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
                                <Button text="Login" clicked={this.loginHandler}/>
                            </form>
                            <Button text='Register' type="NormalButton"  clicked={this.toggleUserManagement}/>
                        </div>

        if(this.state.userRegistration){
            context = <div>
                        <h1>Registration</h1>
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
                            <input
                                name="password"
                                type='password'
                                placeholder="Password"
                                required
                                onChange={this.handleChange}/>
                            <input
                                name="firstName"
                                type='text'
                                placeholder="First Name"
                                required
                                onChange={this.handleChange}/>
                            <input
                                name="lastName"
                                type='text'
                                placeholder="Last Name"
                                required
                                onChange={this.handleChange}/>
                            <Button text="Register" clicked={this.registrationHandler}/>
                            </form>
                            <Button text="Login" type="NormalButton" clicked={this.toggleUserManagement}/>
                        </div>
        }


        return (
            <div className={classes.UserManagement}>
                {context}
            </div>
        );
    }
}



export default MainPage;