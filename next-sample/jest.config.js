const { TestEnvironment } = require('jest-environment-jsdom')
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/.next/','</rootDir>/nodemodules/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    TestEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)