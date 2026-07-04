const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "dist");

const files = [
  "about.html",
  "affiliate-disclosure.html",
  "blog-feminine-minimal-styling.html",
  "blog-korean-capsule-wardrobe.html",
  "blog-korean-fashion-trends.html",
  "blog-korean-layering-techniques.html",
  "blog-soft-girl-aesthetic.html",
  "blog-spring-summer-korean-outfits.html",
  "blog.html",
  "contact.html",
  "index.html",
  "privacy-policy.html",
  "script.js",
  "shop.html",
  "styles.css",
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

fs.cpSync(path.join(root, "assets"), path.join(outDir, "assets"), {
  recursive: true,
});

console.log(`Static site copied to ${path.relative(root, outDir)}`);
