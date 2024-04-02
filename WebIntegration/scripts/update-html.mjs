
import sh from "shelljs";
import fs from 'fs/promises';

try {
    // check bundle.js exists
    if (!sh.test('-f', '../Web/bundle.js')) {
        console.log("Creating bundle.js symlink...");
        sh.ln("./dist/bundle.js", "../Web/bundle.js");
    }
    console.log("Updating index.html...");
    let data = await fs.readFile('../Web/index.html', 'utf8');
    if (!data.includes('bundle.js')) {
        data = data.replace(/<\/body>/, '<script src="bundle.js"></script>\n</body>');
    }
    if (!data.includes('window.GameInstance')) {
        data = data.replace(/\(unityInstance\) => {/, '(unityInstance) => {\n\t\t\t\t\t\twindow.GameInstance = unityInstance;');
    }
    await fs.writeFile('../Web/index.html', data);
    console.log("index.html updated successfully.");
} catch (err) {
    console.error(`Error reading file from disk: ${err}`);
}
