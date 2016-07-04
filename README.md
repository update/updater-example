# updater-example [![NPM version](https://img.shields.io/npm/v/updater-example.svg?style=flat)](https://www.npmjs.com/package/updater-example) [![NPM downloads](https://img.shields.io/npm/dm/updater-example.svg?style=flat)](https://npmjs.org/package/updater-example)

This is an example updater for the `update` library, to provide a basic demonstration of how updaters work.

## What is "Update"?

Update is a new, open-source developer framework for automating updates of any kind to code projects. For more information:

* Visit the [update project](https://github.com/update/update)
* Visit the [update documentation](https://github.com/update/update)
* Find [updaters on npm](https://www.npmjs.com/browse/keyword/update-updater) (help us [author updaters](https://github.com/update/update/blob/master/docs/updaters.md))

## Install

**Install update**

If you haven't already installed [update](https://github.com/update/update) globally, you can do that now with the following command:

```sh
$ npm i -g update
```

**Install updater-example**

Then install this module:

```sh
$ npm i -g update-example
```

## Usage

Add a file named `example.txt` to the current working directory, then run the updater with the following command:

```sh
$ update example
```

**What will happen?**

This updater will only modify a file named `example.txt` in the current working directory. By default it just adds the string `foo`.

Try the following steps to get familiarized with how update works:

* [ ] run `$ update example` to execute the default task, which will append the string `foo` to the file's contents.
* [ ] run `$ update example:foo` to execute the `foo` task, appending the string `foo` to the file's contents
* [ ] run `$ update example:bar` to execute the `bar` task, appending the string `bar` to the file's contents
* [ ] run `$ update example.abc` to execute the default task on the `abc` (sub-)updater, appending the string `abc:default` to the file's contents
* [ ] run `$ update example.abc:xyz` to execute the `xyz` task on the `abc` (sub-)updater, appending the string `abc:xyz` to the file's contents

See [the code](updatefile.js) for more details.

## Related projects

You might also be interested in these projects:

* [generate](https://www.npmjs.com/package/generate): The Santa Claus machine for GitHub projects. Scaffolds out new projects, or creates any kind… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "The Santa Claus machine for GitHub projects. Scaffolds out new projects, or creates any kind of required file or document from any given templates or source materials.")
* [update](https://www.npmjs.com/package/update): Easily keep anything in your project up-to-date by installing the updaters you want to use… [more](https://github.com/update/update) | [homepage](https://github.com/update/update "Easily keep anything in your project up-to-date by installing the updaters you want to use and running `update` in the command line! Update the copyright date, licence type, ensure that a project uses your latest eslint or jshint configuration, remove dep")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/update/updater-example/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 04, 2016._