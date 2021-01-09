(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
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
