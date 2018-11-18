"use strict";

var redirect = require("lang-redirect");

var redirection = redirect.suggestRedirect();

if (redirection)
  window.location.replace(redirection);
