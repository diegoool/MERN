import { connect } from 'react-redux'
import App from './app.component'
import { getUserDetails, fetchUsers } from '../reducers/userReducer.js'

const mapDispatchToProps = {
    getUserDetails,
    fetchUsers
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
