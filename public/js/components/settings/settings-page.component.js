import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SettingsPage extends Component {
    static propTypes = {
        user: PropTypes.object,
        changeSettings: PropTypes.func,
        saveSettings: PropTypes.func
    }
    
    constructor(props) {
        super(props);
    
        this.onChangeSettings = this.onChangeSettings.bind(this);
        this.onSaveSettings = this.onSaveSettings.bind(this);
    
    }
    
    onChangeSettings(e) {
        e.preventDefault()
        this.props.changeSettings(e.target.id, e.target.value);
    }

    onSaveSettings(e){
    e.preventDefault()
    this.props.saveSettings()
    }

    render(){
        return (
            <div>
                <h4>Here you can configure your web page.</h4>
                <form id='form-settings' onSubmit={this.onSaveSettings}>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Title</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'noTitle'}
                                        onChange={this.onChangeSettings}
                                        id="site-title"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td>Keywords</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'noTitle'}
                                        onChange={this.onChangeSettings}
                                        id="site-keywords"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.description : 'noDescription'}
                                        onChange={this.onChangeSettings}
                                        id="site-description"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form> 
                <button className="btn btn-primary" style={{margin: '4px'}} type="submit" form='form-settings'>
                    <i className="material-icons">Save</i>
                </button>
            </div>
        );
    }
}

export default SettingsPage