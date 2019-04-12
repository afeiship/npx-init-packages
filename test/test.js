var nx = require('next-js-core2');
require('../src/next-nice-comments');

test('nx.niceComments', function() {
  var comments = [
    'name: next-nice-comments',
    'description:Just a lite',
    'licence: MIT'
  ];

  console.log(nx.niceComments(comments,'js'));
  console.log(nx.niceComments(comments,'html'));
  // var obj1 = {name: 'fei'};
  // var obj2 = {email: '1290657123@qq.com'};

  // var result = {};

  // nx.niceComments(result, obj1, obj2);

  // expect(result.name, obj1.name).toBe(null);
});
