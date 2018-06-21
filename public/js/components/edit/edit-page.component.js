import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditPage extends Component {
    static propTypes = {
        user: PropTypes.object,
        changeEdit: PropTypes.func,
        saveEdit: PropTypes.func
    }
    
    constructor(props) {
        super(props);
    
        this.onChangeEdit = this.onChangeEdit.bind(this);
        this.onSaveEdit = this.onSaveEdit.bind(this);
    
    }

    onChangeEdit(e) {
        e.preventDefault()
        this.props.changeEdit(e.target.id, e.target.value);
        }
    
        onSaveEdit(e){
        e.preventDefault()
        this.props.saveEdit()
        }

    render(){
        return (
            <div>
                <form id='form-edit' onSubmit={this.onSaveEdit}>
                    <h4>Text format</h4>
                    <hr style={{'border-color': 'lightgrey', 'width':'100%'}} />    
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td><b>Fonts</b></td>
                                <td><b>Size</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'fonts'}
                                        onChange={this.onChangeEdit}
                                        id="text-fonts"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'size'}
                                        onChange={this.onChangeEdit}
                                        id="text-size"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td><b>Color text</b></td>
                                <td><b>Line spacing</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'noKeywords'}
                                        onChange={this.onChangeEdit}
                                        id="text-color"
                                        className="form-control"
                                        />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'noKeywords'}
                                        onChange={this.onChangeEdit}
                                        id="text-line-spacing"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Titles format</h4>
                    <hr style={{'borderColor': 'lightgrey', 'width':'100%'}} />
                    <h4>h1</h4>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td colSpan="2"><b>Fonts</b></td>
                                <td><b>Size</b></td>
                                <td><b>Color</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'fonts'}
                                        onChange={this.onChangeEdit}
                                        id="title-h1-fonts"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'size'}
                                        onChange={this.onChangeEdit}
                                        id="title-h1-size"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'color'}
                                        onChange={this.onChangeEdit}
                                        id="title-h1-color"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td><b>Underline</b></td>
                                <td><b>Bold</b></td>
                                <td><b>Cursiva</b></td>
                                <td><b>Uppercase</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'underline'}
                                        onChange={this.onChangeEdit}
                                        id="title-h1-underline"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'bold'}
                                        onChange={this.onChangeEdit}
                                        id="text-bold"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'cursiva'}
                                        onChange={this.onChangeEdit}
                                        id="title-h1-cursiva"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'uppercase'}
                                        onChange={this.onChangeEdit}
                                        id="text-line-uppercase"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>h2</h4>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td colSpan="2"><b>Fonts</b></td>
                                <td><b>Size</b></td>
                                <td><b>Color</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'fonts'}
                                        onChange={this.onChangeEdit}
                                        id="title-h2-fonts"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'size'}
                                        onChange={this.onChangeEdit}
                                        id="title-h2-size"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'color'}
                                        onChange={this.onChangeEdit}
                                        id="title-h2-color"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td><b>Underline</b></td>
                                <td><b>Bold</b></td>
                                <td><b>Cursiva</b></td>
                                <td><b>Uppercase</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'underline'}
                                        onChange={this.onChangeEdit}
                                        id="title-h2-underline"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'bold'}
                                        onChange={this.onChangeEdit}
                                        id="text-bold"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'cursiva'}
                                        onChange={this.onChangeEdit}
                                        id="title-h2-cursiva"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'uppercase'}
                                        onChange={this.onChangeEdit}
                                        id="text-line-uppercase"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>h3</h4>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td colSpan="2"><b>Fonts</b></td>
                                <td><b>Size</b></td>
                                <td><b>Color</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'fonts'}
                                        onChange={this.onChangeEdit}
                                        id="title-h3-fonts"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'size'}
                                        onChange={this.onChangeEdit}
                                        id="title-h3-size"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'color'}
                                        onChange={this.onChangeEdit}
                                        id="title-h3-color"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td><b>Underline</b></td>
                                <td><b>Bold</b></td>
                                <td><b>Cursiva</b></td>
                                <td><b>Uppercase</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'underline'}
                                        onChange={this.onChangeEdit}
                                        id="title-h3-underline"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'bold'}
                                        onChange={this.onChangeEdit}
                                        id="text-bold"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'cursiva'}
                                        onChange={this.onChangeEdit}
                                        id="title-h3-cursiva"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.keywords : 'uppercase'}
                                        onChange={this.onChangeEdit}
                                        id="text-line-uppercase"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Link format</h4>
                    <hr style={{'borderColor': 'lightgrey', 'width':'100%'}} />
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td><b>Size</b></td>
                                <td><b>Color</b></td>
                                <td><b>Color hover</b></td>
                                <td><b>Cursiva</b></td>
                                <td><b>Bold</b></td>
                                <td><b>Underline</b></td>
                                <td><b>Uppercase</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'size'}
                                        onChange={this.onChangeEdit}
                                        id="link-size"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'color'}
                                        onChange={this.onChangeEdit}
                                        id="link-color"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'color:hover'}
                                        onChange={this.onChangeEdit}
                                        id="link-color-hover"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'cursiva'}
                                        onChange={this.onChangeEdit}
                                        id="link-cursiva"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'bold'}
                                        onChange={this.onChangeEdit}
                                        id="link-bold"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'underline'}
                                        onChange={this.onChangeEdit}
                                        id="link-underline"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={this.props.user !== null ? this.props.user.site.settings.title : 'uppercase'}
                                        onChange={this.onChangeEdit}
                                        id="link-uppercase"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form> 
                <button className="btn btn-primary" style={{margin: '4px'}} type="submit" form='form-edit'>
                    <i className="material-icons">Save</i>
                </button>
            </div>
        );
    }
}

export default EditPage
