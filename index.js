const got = require("got");

module.exports = () =>
  got("http://globalip.me", {
    headers: { "user-agent": "curl/7.54.0" }
  }).then(res => res.body);
