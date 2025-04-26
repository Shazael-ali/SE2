import type {Config} from '@jest/types';

const config : Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots:['<rootDir>/tests'],
    testMatch: ['**/*.test.ts'],
    collectCoverage:true,
    collectCoverageFrom:['src/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageThreshold:{
        global:{
            functions:100,
            statements:100
        }
    }

}

export default config;