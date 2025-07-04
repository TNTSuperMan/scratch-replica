import { serve } from "bun";
import apiApp from "./api";
import webApp from "./www";
import prjApp from "./prj";
import resApp from "./res";
import astApp from "./ast";

const apiServer = serve({
  fetch: apiApp.fetch,
  port: 4519
});
const wwwServer = serve({
  fetch: webApp.fetch,
  port: 4517
});
const prjServer = serve({
  fetch: prjApp.fetch,
  port: 4513
});
const resServer = serve({
  fetch: resApp.fetch,
  port: 4514
});
const astServer = serve({
  fetch: astApp.fetch,
  port: 4518
});

console.log(`API server is running at ${apiServer.url.toString()}`);
console.log(`Web server is running at ${wwwServer.url.toString()}`);
console.log(`Prj server is running at ${prjServer.url.toString()}`);
console.log(`Res server is running at ${resServer.url.toString()}`);
console.log(`Ast server is running at ${astServer.url.toString()}`);
