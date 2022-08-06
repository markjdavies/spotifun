
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '__mocks__/',
        '/__fixtures__/',
        '.history',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '__mocks__/',
        '/__fixtures__/',
        '.history',
    ],
};
