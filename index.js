/** @ignore */
var {special, reverse, specialRe, escapedRe} = require("src/init");


/**
 * Scapegoat
 * https://github.com/ULL-ESIT-DSI-1617/scapegoat
 *
 * Copyright (c) 2017 Casiano Rodríguez León
 * Licensed under the MIT license.
 *
 * Escape  and Unescape special characters in a given string of html.
 *
 */
module.exports = {
  /**
   * Escape special characters in the given string of html
   * @param {String} html
   * @returns {String} 
   */
  escape: function(html) {
    if (!html) return '';

    return String(html).replace(specialRe, (match) => reverse[match]);
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    if (!html) return '';

    return String(html).replace(escapedRe, (match) => special[match]);
  }
};
