/** @ignore */
var special = {
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': '\'',
  '&lt;': '<',
  '&gt;': '>'
};
var values = Object.values(special);
var specialRe = new RegExp('(' + values.join('|') + ')', 'g');
var escapedRe = new RegExp('(' + Object.keys(special).join('|') + ')', 'g');
var reverse = {};
for (var key in special) {
    reverse[special[key]] = key;
}

module.exports = {
  special: special,
  reverse: reverse,
  specialRe: specialRe,
  escapedRe: escapedRe
};
