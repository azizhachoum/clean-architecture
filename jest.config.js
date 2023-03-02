module.exports = {
    // other configuration options...
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    modulePaths: ['<rootDir>/src', '<rootDir>/src/service'],
  };
  