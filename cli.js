#!/usr/bin/env node

const globalip = require(".");

async function main() {
  process.stdout.write(await globalip());
}

main().catch(console.error);
