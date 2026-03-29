const fs = require('node:fs');
const path = require('node:path');

const packagesDir = path.join(__dirname, '..', 'packages');
const stageDir = path.join(__dirname, '..', 'build', 'stage');

if (!fs.existsSync(stageDir)) {
	process.exit(0);
}

fs.mkdirSync(packagesDir, { recursive: true });

for (const filePath of findTarballs(stageDir)) {
	fs.copyFileSync(filePath, path.join(packagesDir, path.basename(filePath)));
}

function findTarballs(dirPath) {
	const tarballs = [];

	for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
		const entryPath = path.join(dirPath, entry.name);

		if (entry.isDirectory()) {
			tarballs.push(...findTarballs(entryPath));
			continue;
		}

		if (entry.isFile() && entry.name.endsWith('.tar.gz')) {
			tarballs.push(entryPath);
		}
	}

	return tarballs;
}
