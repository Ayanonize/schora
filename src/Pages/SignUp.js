import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';



export default class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            alert: { active: false, color: 'bg-red-500', type: 'Error', message: 'Email already exist!' },
            isdisable: false
        }
    }


    handelsubmit = (e) => {
        e.preventDefault();
        console.log('for submitied')
        axios.get('http://localhost:4001/Schora/signup.php', {
            params: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                token: this.state.name + this.state.email + this.state.password,
                desc: 'hi i am ' + this.state.name
            }
        }).then((res) => {
            let self = this;
            if (res.data.status === 200) {
                this.setState({
                    alert: { active: true, color: 'bg-green-500', type: 'Success', message: 'Congratulations yoou have been signed up successfuly now go to the login page to signin' },
                    isdisable: true
                })


                // console.log(JSON.parse(localStorage.getItem('userData')))
            }
            else {
                this.setState({
                    alert: { active: true, color: 'bg-red-500', type: 'Error', message: 'Email already exist!' }
                })
                console.log('error')
            }
        })


    }

    render() {


        return (
            <>
                {this.state.alert.active && <Alert color={this.state.alert.color} type={this.state.alert.type} message={this.state.alert.message} />}

                <form onSubmit={this.handelsubmit}>
                    <div className="editor mx-auto w-10/12 flex flex-col text-white  p-4 shadow-2xl max-w-2xl">
                        <div className=" heading text-center font-bold text-2xl m-5 text-white ">Sign Up</div>
                        <input className="title bg-schora border  p-2 mb-4 outline-none" spellCheck="false" placeholder="Name" type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} value={this.state.name} required disabled={this.state.isdisable} />
                        <input className="title bg-schora border  p-2 mb-4 outline-none" spellCheck="false" placeholder="Email" type="email" onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} required disabled={this.state.isdisable} />
                        <input className="title bg-schora border  p-2 mb-4 outline-none" spellCheck="false" placeholder="Password" type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} required disabled={this.state.isdisable} />
                        <div className="buttons flex mt-5">
                            <button type='submit' className="btn border border-sky-400 p-1 px-4 font-semibold cursor-pointer text-schora ml-2 bg-sky-400" disabled={this.state.isdisable}>SignUp</button>
                            <Link to="/login"><button className="btn border border-sky-400 p-1 px-4 font-semibold cursor-pointer text-schora ml-2 bg-sky-400">Already have a account</button></Link>

                        </div>
                    </div>
                </form>
            </>
        )
    }
}
