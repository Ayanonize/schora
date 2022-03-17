import axios from 'axios';
import React, { Component } from 'react'
import Alert from '../components/Alert';

export default class Post extends Component {


    constructor() {
        super();
        this.state = {
            title: '',
            desc: '',
            alert: { active: false, color: '', type: '', message: '' },

        }
    }


    handelsubmit = (e) => {
        e.preventDefault();
        let localdata = JSON.parse(localStorage.getItem('UserData'));
        axios.get('http://localhost:4001/Schora/post.php', {
            params: {
                id: localdata.id,
                name: localdata.name,
                title: this.state.title,
                desc: this.state.desc,
            }
        }).then((res) => {
            this.setState({ alert: { active: true, color: 'bg-green-500', type: 'Success', message: 'Your Post Have Been Successfuly Created!' } })
        })
    }


    render() {
        return (
            <>
                {this.state.alert.active && <Alert color={this.state.alert.color} type={this.state.alert.type} message={this.state.alert.message} />}

                <form onSubmit={this.handelsubmit}>
                    <div className="editor mx-auto w-10/12 flex flex-col text-white  p-4 shadow-2xl max-w-2xl">
                        <div className=" heading text-center font-bold text-2xl m-5 text-white ">New Post</div>
                        <input className="title bg-schora border  p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} />
                        <textarea className="description bg-schora  sec p-3 h-60 border   outline-none" spellCheck="false" placeholder="Describe everything about this post here" value={this.state.desc} onChange={(e) => { this.setState({ desc: e.target.value }) }}></textarea>

                        <div className="buttons flex mt-5">
                            <button type='submit' className="btn border border-sky-400 p-1 px-4 font-semibold cursor-pointer text-schora ml-2 bg-sky-400">Post</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
