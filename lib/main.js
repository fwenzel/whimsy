/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, curly:true, browser:true, es5:true, esnext:true,
  indent:2, maxerr:50, devel:true, node:true, boss:true, white:true,
  globalstrict:true, nomen:false, newcap:true*/

/*global self:true, addon:true, dump:true */

"use strict";

require('simple-prefs').prefs['logtoconsole'] = true;
var ponami = require('./ponami.js');
var urlbar = require('./urlbar.js');
var newtabicons = require('./newtabicons.js');

exports.main = function (options, callbacks) {
  urlbar.load();
  ponami.load();
  newtabicons.load();
};

exports.onUnload = function (reason) {
  urlbar.unload();
  ponami.unload();
  newtabicons.unload();
};