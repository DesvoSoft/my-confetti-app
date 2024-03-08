const { execSync } = require('child_process');

// Modify "dist" if your build folder has a different name
execSync('git config core.sparseCheckout true');
execSync('git config core.quotePath false');
execSync('git checkout gh-pages');
try {
  execSync('git rm -rf .'); // Remove existing files on the gh-pages branch
} catch (e) {}
execSync('cp -r dist/* .'); // Copy build files to the gh-pages branch
execSync('git add .');
execSync('git commit -m "Deploy from build"');
execSync('git push origin gh-pages');
execSync('git checkout -f master'); // Switch back to the master branch
execSync('git config core.sparseCheckout false');