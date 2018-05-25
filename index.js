#!/usr/bin/env node

const got = require("got");

async function main() {
  const res = await got("http://globalip.me", {
    headers: { "user-agent": "curl/7.54.0" }
  });
  process.stdout.write(res.body);
}

main().catch(console.error);
