'use strict';

const fs = require('fs');
const buble = require('buble');
const chalk = require('chalk');

if (require.extensions) {
	require.extensions['.js'] = loadFile;
}

function loadFile(module, filename) {
	let contents = fs.readFileSync(filename, 'utf8');

	try {
    let result = buble.transform(contents);
  	return module._compile(result.code, filename);
	} catch(err) {
    handleLoadingError(err, filename);
	}
}

function handleLoadingError(err, filename) {
  if (err.name === 'CompileError') {
    console.error(chalk.red.bold('CompileError:'), chalk.white(err.message));
    console.error(`\n${ filename }:`);
    console.error(err.snippet);
    return;
  }
  if (err.code === 'MODULE_NOT_FOUND') {
    console.error(chalk.red.bold('LoadingError:'), chalk.white(err.message));
    console.error(` from: ${ filename }`);
    return;
  }

  throw err;
}
