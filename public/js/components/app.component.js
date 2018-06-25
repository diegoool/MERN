import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import custom components
import Header from './common/header/header.component';
import Sidebar from './common/sidebar/sidebar.component';
import Footer from './common/footer/footer.component';

class App extends Component {

    static propTypes = {
        // Functions
        fetchUsers: PropTypes.func,
        fetchSites: PropTypes.func,
        getUserDetails: PropTypes.func,

        sites: PropTypes.array,
        user: PropTypes.object
    }
    componentDidMount(){
        this.props.fetchUsers()
        this.props.fetchSites()
        this.props.getUserDetails()
    }
    
    render(){
        return (
            <div className="wrapper">
                <Header />
                <Sidebar user={this.props.user} sites={this.props.sites} />
                <div className="content-wrapper">
                   {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App