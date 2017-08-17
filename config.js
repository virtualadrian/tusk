'use strict';
const Config = require('electron-config');

module.exports = new Config({
  defaults: {
    zoomFactor: 1,
    lastWindowState: {
      width: 900,
      height: 500
    },
    alwaysOnTop: false,
    lastURL: 'https://www.evernote.com/Login.action'
  }
});
