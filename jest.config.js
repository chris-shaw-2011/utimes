import { createDefaultEsmPreset } from 'ts-jest';

/** @type {import('jest').Config} */
export default {
	...createDefaultEsmPreset({
		tsconfig: '<rootDir>/tests/tsconfig.json'
	}),
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1'
	},
	roots: ['<rootDir>/tests'],
	testEnvironment: 'node'
};
