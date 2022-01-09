# concordialang-fake-plugin

> 🔌 Fake Concordia Compiler plug-in

This is an example on how to create a small Concordia Compiler plug-in.

1. Create a new file `package.json`.
2. Add the property `"concordiaPlugin": true` to your `package.json`.
3. Install the packages `concordialang-plugin` and `concordialang-types` as dependencies.
4. Create a file (e.g. `src/index.ts`) with a class that implements the interface `Plugin` (see [concordialang-plugin](https://github.com/thiagodp/concordialang-plugin)).
5. Make sure that the created class has a `default` export (ex. `export default class`).
6. Change the property `"main"` from your `package.json` to indicate the JS file that contains the created class (ex. `"dist/index.js"`).
7. Publish your package if you desire to install it by name (i.e.,`npm publish`).

Note: You can use JavaScript instead of TypeScript.

See also:
- [concordialang-plugin](https://github.com/thiagodp/concordialang-plugin)
- [concordialang-types](https://github.com/thiagodp/concordialang-plugin)
- [Concordia](https://concordialang.org)
