'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

var SiteSchema = new Schema({
    siteName: {
        type: String
    },
    ownerId: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    settings: {

        title: {
            type: String,
            default: 'My site title'
        },
        keywords: {
            type: String,
            default: 'keywords'
        },
        description: {
            type: String,
            default: 'My site description'
        }
    },
    formatContent: {
        text: {
            font: {
                type: String,
                default: 'Arial, \'Helvetica Neue\', Helvetica, sans-serif'
            },
            size: {
                type: String,
                default: '1em'
            },
            color: {
                type: String,
                default: '#000'
            },
            lineheight: {
                type: String,
                default: 'normal'
            }
        },
        h1: {
            font: {
                type: String,
                default: 'Arial, \'Helvetica Neue\', Helvetica, sans-serif'
            },
            size: {
                type: String,
                default: '2em'
            },
            color: {
                type: String,
                default: '#000'
            },
            underline: {
                type: String,
                default: 'false'
            },
            bold: {
                type: String,
                default: 'false'
            },
            cursiva: {
                type: String,
                default: 'false'
            },
            uppercase: {
                type: String,
                default: 'false'
            }
        },
        h2: {
            font: {
                type: String,
                default: 'Arial, \'Helvetica Neue\', Helvetica, sans-serif'
            },
            size: {
                type: String,
                default: '1.5em'
            },
            color: {
                type: String,
                default: '#000'
            },
            underline: {
                type: String,
                default: 'false'
            },
            bold: {
                type: String,
                default: 'false'
            },
            cursiva: {
                type: String,
                default: 'false'
            },
            uppercase: {
                type: String,
                default: 'false'
            }
        },
        h3: {
            font: {
                type: String,
                default: 'Arial, \'Helvetica Neue\', Helvetica, sans-serif'
            },
            size: {
                type: String,
                default: '1.2em'
            },
            color: {
                type: String,
                default: '#000'
            },
            underline: {
                type: String,
                default: 'false'
            },
            bold: {
                type: String,
                default: 'false'
            },
            cursiva: {
                type: String,
                default: 'false'
            },
            uppercase: {
                type: String,
                default: 'false'
            }
        },
        link: {
            font: {
                type: String,
                default: 'Arial, \'Helvetica Neue\', Helvetica, sans-serif'
            },
            size: {
                type: String,
                default: '1em'
            },
            color: {
                type: String,
                default: '#000'
            },
            colorHover: {
                type: String,
                default: 'grey'
            },
            underline: {
                type: String,
                default: 'false'
            },
            bold: {
                type: String,
                default: 'false'
            },
            cursiva: {
                type: String,
                default: 'false'
            },
            uppercase: {
                type: String,
                default: 'false'
            }
        }
    }
    
});

module.exports = mongoose.model('Site', SiteSchema);