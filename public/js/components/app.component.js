import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import custom components
import Header from './common/header/header.component';
import Sidebar from './common/sidebar/sidebar.component';
import Footer from './common/footer/footer.component';

class App extends Component {

    static propTypes = {
        // Functions
        hello: PropTypes.func.isRequired
    }
    componentDidMount(){
        this.fetchUser()
        this.props.hello()
    }
    
    fetchUser(){
        fetch(`/api/users`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }
        );
    }
    render(){
        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                   {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App