"use strict";

/* globals window */

let redirect = require("lang-redirect");

const redirection = redirect.suggestRedirect();

if (redirection)
  window.location.replace(redirection);
