import React, { Component } from 'react';

class Title extends Component {
    render(){
        return (
            <section className="content-header">
                <h1>Edit</h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Edit</li>
                </ol>
            </section>
        );
    }
}

export default Title