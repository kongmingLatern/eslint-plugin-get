const { RuleTester } = require('eslint')

const { rules } = require('../index')

const ruleTester = new RuleTester()


ruleTester.run('get', rules.get, {
  valid: [
    {
      name: 'success',
      code: "function getName() {  return '' }"
    }
  ],
  invalid: [
    {
      name: 'body is empty',
      code: 'function getName() {}',
      output: "function getName() { return ''}",
      errors: [{
        message: 'getName must return a value'
      }]
    },
    {
      name: 'body is not empty',
      code: "function getName() { var name = '123';}",
      output: "function getName() { var name = '123'; return ''}",
      errors: [{
        message: 'getName must return a value'
      }]
    }
  ]
})