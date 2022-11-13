import type {Config} from '@jest/types';
import {jsWithBabel as tsjPreset} from 'ts-jest/presets';

const config: Config.InitialOptions = {
    preset: 'jest-playwright-preset',
    testRunner: 'jest-jasmine2',
    moduleDirectories: ['node_modules', 'src'],
    testEnvironmentOptions: {
        'jest-playwright': {
            browsers: ['chromium'], // и/или 'firefox', 'webkit'
        },
        exitOnPageError: false,
        launchOptions: {
            headless: false,
        },
    },
    transform: {
        ...tsjPreset.transform,
    },
    transformIgnorePatterns: ['node_modules'],
    verbose: true,
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^.+\\.(css|less)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'mocks/fileMock.ts',
    },
};

export default config;
