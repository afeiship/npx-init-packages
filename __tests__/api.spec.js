const nx = require('@feizheng/next-js-core2');
require('../src/next-nice-comments');

describe('api.basic test', () => {
  test('nx.niceComments', function () {
    var comments = [
      'name: next-nice-comments',
      'description:Just a lite',
      'licence: MIT'
    ];

    console.log(nx.niceComments(comments, 'js'));
    console.log(nx.niceComments(comments, 'css'));
    console.log(nx.niceComments(comments, 'html'));
    console.log(nx.niceComments(comments, 'pure'));
  });
});
