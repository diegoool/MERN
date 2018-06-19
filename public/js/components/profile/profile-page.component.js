import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfilePage extends Component {
    static propTypes = {
        user: PropTypes.object,
        changeProfileEdit: PropTypes.func
    }
    
    constructor(props) {
        super(props);
    
        this.onChangeProfileEdit = this.onChangeProfileEdit.bind(this);
    
      }
    
    onChangeProfileEdit(e) {
    console.log(e.target)
    this.props.changeProfileEdit(e.target.id, e.target.value);
    }
    
    render(){
        
        let fullName = this.props.user !== null ? this.props.user.first_name + ' ' + this.props.user.last_name : 'noName'
        
        
        return (
            <div>
                <h4>{fullName}</h4>
                <form>
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
            </div>
        );
    }
}

export default ProfilePage
