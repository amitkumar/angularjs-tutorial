#!/usr/bin/env node

var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');

var packageJson = JSON.parse(fs.readFileSync(path.join('./', 'package.json')));
var cmd = packageJson.scripts.precommit;

console.log('running pre-commit: ' + cmd);

exec(cmd, { cwd: '.git/' }, function(error, stdout, stderr){
  if (error){
    console.log(stdout.toString());
    process.exit(1);
    return;
  }
  console.log("OK");
});
