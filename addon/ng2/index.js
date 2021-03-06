/* jshint node: true */
'use strict';

module.exports = {
  name: 'ng2',
  includedCommands: function() {
    return {
      'new'       : require('./commands/new'),
      'init'      : require('./commands/init'),
      'install'   : require('./commands/install'),
      'uninstall' : require('./commands/uninstall'),
      'test'      : require('./commands/test'),
      'lint'      : require('./commands/lint'),
      'format'    : require('./commands/format')
    };
  }
};
