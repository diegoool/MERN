import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 0
                </div>
                <strong>Copyright &copy; 2018 <a href="#"><span>Webb<b>App</b></span></a>.</strong>
            </footer>
        );
    }
}

export default Footer