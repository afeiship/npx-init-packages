# next-nice-comments
> Build nice comments.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-nice-comments
```

## usage
```js
var comments = [
  'name: next-nice-comments',
  'description: Just a lite',
  'licence: MIT'
];

// list, type:
nx.niceComments(comments,'js');
nx.niceComments(comments,'css');
nx.niceComments(comments,'html');
nx.niceComments(comments,'pure');

/*!
 * name: next-nice-comments
 * description: Build nice comments.
 * licence: MIT
 */

<!--!
  * name: next-nice-comments
  * description: Build nice comments.
  * licence: MIT
--> 
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-nice-comments/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-nice-comments
[version-url]: https://npmjs.org/package/@feizheng/next-nice-comments

[license-image]: https://img.shields.io/npm/l/@feizheng/next-nice-comments
[license-url]: https://github.com/afeiship/next-nice-comments/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-nice-comments
[size-url]: https://github.com/afeiship/next-nice-comments/blob/master/dist/next-nice-comments.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-nice-comments
[download-url]: https://www.npmjs.com/package/@feizheng/next-nice-comments
