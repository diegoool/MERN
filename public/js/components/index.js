import { connect } from 'react-redux'
import App from './app.component'
import { getUserDetails, hello } from '../reducers/userReducer.js'

const mapDispatchToProps = {
    getUserDetails,
    hello
}

const mapStateToProps = (state) => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(App)
