'use strict';
var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');


var UserSchema = new Schema({
    first_name: {
        type: String,
        required: 'Please enter the first name'
    },
    last_name: {
        type: String,
        required: 'Please enter the last name'
    },
    email: {
        type: String,
        required: 'Please enter the email'
    },
    password: {
        type: String,
        required: 'Please enter the last name'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive']
        }],
        default: ['active']
    },
    site: {
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
        formatContent:{
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
                underline: {
                    type: String,
                    default: 'false'
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
                    default: '#383838'
                },
                underline: {
                    type: String,
                    default: 'false'
                },
                bold: {
                    type: String,
                    default: 'true'
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
    }
});

UserSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);