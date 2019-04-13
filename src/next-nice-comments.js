(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_TYPES = {
    js: {
      start: '/*!\n',
      end: '\n */\n'
    },
    html: {
      start: '<!--\n',
      end: '\n-->\n'
    }
  };

  nx.niceComments = function(inArray, inType) {
    var options = DEFAULT_TYPES[inType] || inType;
    var result = inArray.map(function(item) {
      return ' * ' + item;
    });
    return options.start + result.join('\n') + options.end;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.niceComments;
  }
})();
