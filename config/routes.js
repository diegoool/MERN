/**
* Load the routes
*/
var login = require('../routes/index');
var users = require('../routes/users');
var auth = require('../routes/auth');
var sites = require('../routes/sites');

module.exports = function (app) {

    console.log('Initializing Routes');

    // Register the routes
    app.use('/', login);
    app.use('/api', users);
    app.use('/api', auth);
    app.use('/api', sites);

};