

/** @ignore */
var special = {
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': '\'',
  '&lt;': '<',
  '&gt;': '>'
};
var values = Object.values(special);
var re = new RegExp('(' + values.join('|') + ')', 'g');
var reverse = {};
for (var key in special) {
    reverse[special[key]] = key;
}


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

    return String(html).replace(re, (match) => reverse[match]);
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    if (!html) {
      return '';
    }

    var re = new RegExp('(' + Object.keys(special).join('|') + ')', 'g');

    return String(html).replace(re, (match) => special[match]);
  }
};
