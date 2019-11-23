# next-nice-comments
> Build nice comments.

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
nx.niceComments(comments,'html');

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
