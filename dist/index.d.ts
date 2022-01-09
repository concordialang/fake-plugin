import { AbstractTestScript, Plugin, TestScriptExecutionOptions, TestScriptGenerationOptions, TestScriptGenerationResult } from 'concordialang-plugin';
import { TestScriptExecutionResult } from 'concordialang-types';
export default class FakePlugin implements Plugin {
    generateCode: (abstractTestScripts: AbstractTestScript[], options: TestScriptGenerationOptions) => Promise<TestScriptGenerationResult>;
    executeCode: (options: TestScriptExecutionOptions) => Promise<TestScriptExecutionResult>;
    beforeReporting: (result?: TestScriptExecutionResult | undefined, options?: TestScriptExecutionOptions | undefined) => Promise<void>;
    afterReporting: (result?: TestScriptExecutionResult | undefined, options?: TestScriptExecutionOptions | undefined) => Promise<void>;
}
