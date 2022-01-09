"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class FakePlugin {
    constructor() {
        this.generateCode = function generateCode(abstractTestScripts, options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(' > [FAKE-PLUGIN] Generating code... (fake, no code :-)');
                const r = { errors: [], generatedFiles: [] };
                return r;
            });
        };
        this.executeCode = function executeCode(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(' > [FAKE-PLUGIN] Executing code... (fake, no execution :-)');
                const r = {
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
            });
        };
        this.beforeReporting = function (result, options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(' > [FAKE-PLUGIN] Before reporting...');
            });
        };
        this.afterReporting = function (result, options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(' > [FAKE-PLUGIN] After reporting...');
            });
        };
    }
}
exports.default = FakePlugin;
