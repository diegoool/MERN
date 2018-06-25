var express = require('express');
var router = express.Router();
var Site = require('../controllers/SiteController');
var isAuthenticated = require('../middlewares/authentication');

/* "/api/sites"
* GET: finds all sites
* POST: creates a new site
*/
router.route('/sites')

/**
* Creates a new site
*
* HTTP POST http://localhost:3000/api/sites
* @return list of sites in JSON format
*/
.post(function (req, res) {
    Site.store(req, res);
})

/**
* find all the sites
*
* HTTP GET http://localhost:3000/api/sites
* @return list of sites in JSON format
*/
.get( function (req, res) {
// .get(isAuthenticated, function (req, res) {
    Site.findAll(req, res);
});

/* "/api/sites/:id"
* GET: find site by id
* PUT: update site by id
* DELETE: deletes site by id
*/
router.route('/sites/:id')

/**
* Find the site with that id
*
* HTTP GET http://localhost:3000/api/sites/:id
* @return list of sites in JSON format
*/
.get( function (req, res) {
// .get(isAuthenticated, function (req, res) {
    Site.findById(req, res);
})

/**
* Update the site with that id
*
* HTTP PUT http://localhost:3000/api/sites/:id
* @return list of sites in JSON format
*/
.put( function (req, res) {
// .put(isAuthenticated, function (req, res) {
    Site.update(req, res);
})

/**
* Delete the site with that id
*
* HTTP DELETE http://localhost:3000/api/sites/:id
* @return list of sites in JSON format
*/
.delete( function (req, res) {
// .delete(isAuthenticated, function (req, res) {
    Site.delete(req, res);
});

module.exports = router;