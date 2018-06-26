import { connect } from 'react-redux'
import App from './app.component'
import { getUserDetails, fetchUsers } from '../reducers/userReducer.js'
import { fetchSites, loadUserSite } from '../reducers/siteReducer.js'

const mapDispatchToProps = {
    fetchSites,
    loadUserSite,
    getUserDetails,
    fetchUsers
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    sites: state.site.sites
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
