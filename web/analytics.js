// Cookie-free visit counting with GoatCounter (https://www.goatcounter.com).
// Sends only this page's path (like /k_ai-basics/web/09/) — never anything a visitor types.
// We don't load GoatCounter's own script: our CSP allows only this site's scripts.
"use strict";
if (location.hostname.endsWith(".github.io")) { // local testing never counts
  const q = new URLSearchParams({ p: location.pathname, rnd: Math.random().toString(36).slice(2) });
  try { navigator.sendBeacon(`https://khadir-syed.goatcounter.com/count?${q}`); } catch {}
}
