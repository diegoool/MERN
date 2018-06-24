import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { changeEdit, saveEdit } from '../../reducers/userReducer'

// Import custom components
import Title from './title.component';
import EditPage from './edit-page.component';

class Edit extends Component {

    static propTypes = {
        user: PropTypes.object,
        changeEdit: PropTypes.func,
        saveEdit: PropTypes.func
    }

    render(){
        return (
            <div>
                <Title />

                <section className="content">
                    <EditPage
                        user={this.props.user}
                        changeEdit={this.props.changeEdit}
                        saveEdit={this.props.saveEdit}
                    />
                </section>

            </div>
        );
    }
}

const mapDispatchToProps = {
    changeEdit,
    saveEdit
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
