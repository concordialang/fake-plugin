import {
    AbstractTestScript,
    Plugin,
    TestScriptExecutionOptions,
    TestScriptGenerationOptions,
    TestScriptGenerationResult,
} from 'concordialang-plugin';
import { TestScriptExecutionResult } from 'concordialang-types';

export default class FakePlugin implements Plugin {

    generateCode = async function generateCode(
        abstractTestScripts: AbstractTestScript[],
        options: TestScriptGenerationOptions
    ): Promise< TestScriptGenerationResult > {
        console.log( ' > [FAKE-PLUGIN] Generating code... (fake, no code :-)' );
        const r: TestScriptGenerationResult = { errors: [], generatedFiles: [] };
        return r;
    }

    executeCode = async function executeCode(
        options: TestScriptExecutionOptions
    ): Promise< TestScriptExecutionResult > {

        console.log( ' > [FAKE-PLUGIN] Executing code... (fake, no execution :-)' );

        const r: TestScriptExecutionResult = {
            schemaVersion: '1.0.0',
            durationMs: 0,
            plugin: {
                name: 'concordialang-fake-plugin',
                description: 'Fake',
                version: 'any'
            },
            results: [],
            sourceFile: 'fake.ext',
            finished: '',
            total: {
                tests: 0,
                skipped: 0,
                passed: 0,
                adjusted: 0,
                failed: 0,
                error: 0,
                unknown: 0
            }
        };

        return r;
    }


    beforeReporting = async function(
        result?: TestScriptExecutionResult,
        options?: TestScriptExecutionOptions
    ): Promise<void> {
        console.log( ' > [FAKE-PLUGIN] Before reporting...' );
    }

    afterReporting = async function(
        result?: TestScriptExecutionResult,
        options?: TestScriptExecutionOptions
    ): Promise<void> {
        console.log( ' > [FAKE-PLUGIN] After reporting...' );
    }


}


