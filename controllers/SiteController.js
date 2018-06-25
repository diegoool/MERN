'use strict';
var Site = require('../models/site');

/**
* Find all the sites
*
* @param {Object} req
* @param {Object} res
*/
exports.findAll = function (req, res) {
    Site.find({}, function (err, site) {
        if (err)
        res.send(err);
        res.json(site);
    });
};

/**
* Store new site
*
* @param {Object} req
* @param {Object} res
*/
exports.store = function (req, res) {
    var newSite = new Site(req.body);
        newSite.save(function (err, site) {
        if (err)
        res.send(err);
        res.json(site);
    });
};

/**
* Find the site by id
*
* @param {Object} req
* @param {Object} res
*/
exports.findById = function (req, res) {
    Site.findById(req.params.id, function (err, site) {
        if (err)
        res.send(err);
        res.json(site);
    });
};

/**
* Update the site by id
*
* @param {Object} req
* @param {Object} res
*/
exports.update = function (req, res) {
    Site.findOneAndUpdate(req.params.id, req.body, {new: true}, function (err, site) {
    if (err)
            res.send(err);
            res.json(site);
    });
};

/**
* Delete the site by id
*
* @param {Object} req
* @param {Object} res
*/
exports.delete = function (req, res) {
    Site.remove({
        _id: req.params.id
        }, function (err, site) {
        if (err)
        res.send(err);
        res.json({message: 'Site successfully deleted'});
    });
};