import React, { Component } from 'react';
import axios from 'axios';
import './post.css';
//import Accordion from 'react-bootstrap/Accordion';
//import Card from 'react-bootstrap/Card';

class Posts extends Component {
    state = {
        posts: [],
        comments: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3")
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
        axios.get("https://jsonplaceholder.typicode.com/comments?_limit=12")
            .then(response => {
                this.setState({
                    comments: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => {
                        let postComment = [];

                        this.state.comments.map((comment, index) => {
                            if (post.id === comment.postId) {
                              //  return (postComment.push(comment))
                             postComment.push(comment)
                            }
                            return postComment;
                        })

                        return (
                            <div className="container">

                                <div className="row row-cols-2 postContainer">
                                    <div className="col">
                                        <h3>{post.title.substring(0, 10)}</h3>
                                        <p>{post.body}</p>
                                    </div>
                                    <div className="col">
                                        <h5> Comments</h5>
                                        {postComment.map((postC, index) => {
                                            return (
                                                <div>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div style={{ color: "gray" }}>
                                                                        {postC.name.substring(0, 8)}
                                                                    </div>
                                                                    {postC.body.substring(0, 150)}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Posts;