var types = require('./type.js'),
    test = types.regexp;
    util = require('./utilities'),
    forge = util.forge

// Ripped from
// code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
var patterns = {
  username: /^[a-z0-9_-]{3,16}$/,
  password: /^[a-z0-9_-]{6,18}$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
  slug: /^[a-z0-9-]+$/,
  email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
}

function pattern(expected, actual) {
  return test(regexp) && expected.test(actual);
}

var username = forge(pattern, patterns.username),
    password = forge(pattern, patterns.password),
    hex      = forge(pattern, patterns.hex),
    slug     = forge(pattern, patterns.slug),
    email    = forge(pattern, patterns.email),
    url      = forge(pattern, patterns.url),
    ip       = forge(pattern, patterns.ip);

module.exports = {
  pattern: pattern,
  username: username,
  password: password,
  hex: hex,
  slug: slug,
  email: email,
  url: url,
  ip: ip
}