import type {Config} from '@jest/types';
import {jsWithBabel as tsjPreset} from 'ts-jest/presets';

const config: Config.InitialOptions = {
    globals: {
        BUILD_VERSION: '',
        LATEST_COMMIT_HASH: '',
        'ts-jest': {},
    },
    testEnvironment: 'jsdom',
    testRunner: 'jest-jasmin2',
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/tools/jestSetup.ts'],
    transform: {
        ...tsjPreset.transform
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: true,
    moduleNameMapper: {
        // '^@/(.*)$':
    }
}
export default config
