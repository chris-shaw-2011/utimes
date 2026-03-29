const fs = require('node:fs');
const path = require('node:path');

for (const dirName of ['build', 'dist', 'packages']) {
	fs.rmSync(path.join(__dirname, '..', dirName), { recursive: true, force: true });
}
