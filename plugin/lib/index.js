/**
 * @fileoverview 写着玩的
 * @author coderL
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports.rules = requireIndex(__dirname + '/rules')
module.exports = {
  rules: requireIndex(__dirname + '/rules'),
  configs: {
    recommended: {
      plugins: ['l-lint'],
      rules: {
        'l-lint/no-var': [2],
      },
    },
  },
}
