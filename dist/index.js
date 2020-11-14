/*!
 * name: @jswork/next-nice-comments
 * description: Build nice comments.
 * homepage: https://github.com/afeiship/next-nice-comments
 * version: 1.0.0
 * date: 2020-11-14T04:35:47.107Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_TYPES = {
    js: {
      start: '/*!\n',
      lineWith: ' * ',
      end: '\n */\n\n'
    },
    css: {
      start: '/*!\n',
      lineWith: ' * ',
      end: '\n */\n\n'
    },
    html: {
      start: '<!--\n',
      lineWith: ' * ',
      end: '\n-->\n\n'
    },
    raw: {
      start: '',
      lineWith: ' ',
      end: ''
    }
  };

  nx.niceComments = function (inArray, inType) {
    var options = DEFAULT_TYPES[inType] || inType;
    var result = inArray.map(function (item) {
      return options.lineWith + item;
    });
    return options.start + result.join('\n') + options.end;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.niceComments;
  }
})();
