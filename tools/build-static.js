const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "dist");

const files = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((file) => file.endsWith(".html") || file === "script.js" || file === "styles.css");

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

fs.cpSync(path.join(root, "assets"), path.join(outDir, "assets"), {
  recursive: true,
});

console.log(`Static site copied to ${path.relative(root, outDir)}`);
