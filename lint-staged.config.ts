module.exports = {
  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames: string[]) => [
    `npx eslint --fix ${filenames.join(' ')}`,
  ],
};
