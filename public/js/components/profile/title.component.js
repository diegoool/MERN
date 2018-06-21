import React, { Component } from 'react';

class Title extends Component {
    render(){
        return (
            <section className="content-header">
                <h1>Profile</h1>
                <ol className="breadcrumb">
                    <li><a href="#/dashboard"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Profile</li>
                </ol>
            </section>
        );
    }
}

export default Title