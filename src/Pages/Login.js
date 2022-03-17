import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Alert from '../components/Alert';



export default class Login extends Component {
    constructor() {

        super();
        this.state = {
            email: '',
            password: '',
            alert: { active: false, color: 'bg-red-500', type: 'Error', message: 'Email already exist!' },
            isdisable: false
        }
    }


    handelsubmit = (e) => {
        e.preventDefault();
        let raw_data = {};

        axios.get('http://localhost:4001/Schora/login.php', {
            params: {
                email: this.state.email,
                password: this.state.password
            }
        }).then((res) => {
            if (res.data.status == 200) {
                this.setState({
                    alert: { active: true, color: 'bg-green-500', type: 'Success', message: 'You Have Been Loged In' },
                    isdisable: true
                })
                raw_data = res.data;
                localStorage.setItem('UserData', JSON.stringify(raw_data))
                console.log("data", JSON.parse(localStorage.getItem('UserData')))

            }

            else {
                this.setState({
                    alert: { active: true, color: 'bg-red-500', type: 'Error', message: 'Email or password may be incorrect' }
                })
            }

        })

    }


    render() {
        return (
            <>

                {this.state.alert.active && <Alert color={this.state.alert.color} type={this.state.alert.type} message={this.state.alert.message} />}

                <form onSubmit={this.handelsubmit}>
                    <div className="editor mx-auto w-10/12 flex flex-col text-white  p-4 shadow-2xl max-w-2xl">
                        <div className=" heading text-center font-bold text-2xl m-5 text-white ">Sign In</div>
                        <input className="title bg-schora border  p-2 mb-4 outline-none" spellCheck="false" placeholder="Email" type="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} required disabled={this.state.isdisable} />
                        <input className="title bg-schora border  p-2 mb-4 outline-none" spellCheck="false" placeholder="Password" type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} required disabled={this.state.isdisable} />
                        <div className="buttons flex mt-5">
                            <button type='submit' className="btn border border-sky-400 p-1 px-4 font-semibold cursor-pointer text-schora ml-2 bg-sky-400" disabled={this.state.isdisable}>Login</button>
                            <Link to="/signup"><button className="btn border border-sky-400 p-1 px-4 font-semibold cursor-pointer text-schora ml-2 bg-sky-400">Create Account</button></Link>

                        </div>
                    </div>
                </form>
            </>


        )
    }
}
