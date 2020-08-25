/*!
 * name: @feizheng/next-nice-comments
 * description: Build nice comments.
 * homepage: https://github.com/afeiship/next-nice-comments
 * version: 1.1.1
 * date: 2020-08-25T03:18:06.830Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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

//# sourceMappingURL=next-nice-comments.js.map
