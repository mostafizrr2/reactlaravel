import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Blog extends Component 
{
    constructor()
    {
        super();
       
        this.state = {
            blogs : []
        }

        console.log(super());
    }

    componentWillMount()
    {
        Axios.get('api/blog').then(respons => {
            this.setState({
                blogs: respons.data
            });
        }).catch(errors => {
            console.log();
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Blog Component</div>
                            <div className="card-body">
                                {this.state.blogs.map(blog => 
                                 <div>
                                     <div className="card-header">
                                         <Router>
                                            <Link to="api/blog/1" >{ blog.name }</Link>
                                            <Route path="api/blog/1" Component={Blog} />
                                         </Router>
                                     </div>
                                     <div className="card-body">{ blog.body }</div>
                                     <hr/>
                                 </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
