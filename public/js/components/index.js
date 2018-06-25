import { connect } from 'react-redux'
import App from './app.component'
import { getUserDetails, fetchUsers } from '../reducers/userReducer.js'
import { fetchSites } from '../reducers/siteReducer.js'

const mapDispatchToProps = {
    fetchSites,
    getUserDetails,
    fetchUsers
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    sites: state.site.sites
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
