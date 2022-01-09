# concordialang-fake-plugin

> 🔌 Fake Concordia Compiler plug-in

This is an example on how to create a small Concordia Compiler plug-in.

## How to create a plug-in

1. Create a new folder that starts with `concordialang-`.
2. Create a new file `package.json`.
3. Make sure your plug-in name starts with `concordialang-`. Example: `concordialang-my-fancy-plugin`.
4. Add the property `"concordiaPlugin": true` to your `package.json`.
5. Install the packages `concordialang-plugin` and `concordialang-types` as dependencies.
6. Create a file (e.g. `src/index.ts`) with a class that implements the interface `Plugin` (see [concordialang-plugin](https://github.com/thiagodp/concordialang-plugin)).
7. Make sure that the created class has a `default` export (ex. `export default class`).
8. Change the property `"main"` from your `package.json` to indicate the JS file that contains the created class (ex. `"dist/index.js"`).
9. Publish your package if you desire to install it by name.

Note: You can use JavaScript instead of TypeScript.

## How to publish your plug-in

1. Create an [NPM](https://www.npmjs.com/) account.
2. Enter your project folder and run `npm login`.
3. Create a property `"files"` into your `package.json` that indicates the (source code) files to distribute.
4. Make sure the property `"version"` of your package file was set correctly.
5. Run `npm publish --dry-run` to simulate the publishing.
6. Make sure its all correct and then run `npm publish`.

See also:
- [concordialang-plugin](https://github.com/thiagodp/concordialang-plugin)
- [concordialang-types](https://github.com/thiagodp/concordialang-plugin)
- [Concordia](https://concordialang.org)
