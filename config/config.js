var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'hellonodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hellonodeblog-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'hellonodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hellonodeblog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'hellonodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/hellonodeblog-production'
  }
};

module.exports = config[env];
