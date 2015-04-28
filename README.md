#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A library for generating fake data such as names, addresses, and phone numbers.  NodeJS port of [faker](https://github.com/stympy/faker).


## Install

```sh
$ npm install junker --save
```


## Usage

```js
var junker = new require('junker');

junker.Name();

/**
 * Output
 *  {
 *    first_name: 'Delmer',
 *    last_name: 'Abbott',
 *    prefix: 'Dr.',
 *    suffix: 'IV',
 *    name: 'Ransom Windler',
 *    title: 'Forward Paradigm Supervisor' 
 *  }
 */
```

###junker.Name()
--------------
```js
junker.Name().name #=> "Tyshawn Johns Sr."
junker.Name().first_name #=> "Kaci"
junker.Name().last_name #=> "Ernser"
junker.Name().prefix #=> "Mr."
junker.Name().suffix #=> "IV"
junker.Name().title #=> "Legacy Creative Director"
```

## License

MIT © [tashrafy]()


[npm-image]: https://badge.fury.io/js/junker.svg
[npm-url]: https://npmjs.org/package/junker
[travis-image]: https://travis-ci.org/tashrafy/junker.svg?branch=master
[travis-url]: https://travis-ci.org/tashrafy/junker
[daviddm-image]: https://david-dm.org/tashrafy/junker.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tashrafy/junker
