import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfilePage extends Component {
    static propTypes = {
        user: PropTypes.object,
        changeProfile: PropTypes.func,
        saveProfile: PropTypes.func
    }
    
    constructor(props) {
        super(props);
    
        this.onChangeProfileEdit = this.onChangeProfileEdit.bind(this);
        this.onSaveProfile = this.onSaveProfile.bind(this);
    
      }
    
    onChangeProfileEdit(e) {
    e.preventDefault()
    this.props.changeProfile(e.target.id, e.target.value);
    }

    onSaveProfile(e){
    e.preventDefault()
    this.props.saveProfile()
    }
    
    render(){
        
        let fullName = this.props.user !== null ? this.props.user.first_name + ' ' + this.props.user.last_name : 'noName'
        
        
        return (
            <div>
                <h4>{fullName}</h4>
                <form id='form-edit-profile' onSubmit={this.onSaveProfile}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <input
                                    type="text"
                                    defaultValue={this.props.user !== null ? this.props.user.first_name : 'noName'}
                                    onChange={this.onChangeProfileEdit}
                                    id="first-name"
                                    className="form-control"
                                    />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    defaultValue={this.props.user !== null ? this.props.user.last_name : 'noLast'}
                                    onChange={this.onChangeProfileEdit}
                                    id="last-name"
                                    className="form-control"
                                    />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    defaultValue={this.props.user !== null ? this.props.user.email : 'noEmail'}
                                    onChange={this.onChangeProfileEdit}
                                    id="email"
                                    className="form-control"
                                />
                            </th>

                        </tr>
                    </tbody>
                </table>
                </form> 
                <button className="btn btn-primary" style={{margin: '4px'}} type="submit" form='form-edit-profile'>
                    <i className="material-icons">Save</i>
                </button>
            </div>
        );
    }
}

export default ProfilePage
