var fs = require('fs');
var buble = require('buble');


if(require.extensions) {
	require.extensions['.js'] = transpile;
}

function getContents (filename) {
	var contents = fs.readFileSync(filename, 'utf8');
	return contents;
}

function transpile (module, filename) {
	var contents = getContents(filename);
	var result = buble.transform(contents);

	return module._compile(result.code, filename);
}
