// eslint plugin
// rule
module.exports = {
  rules: {
    get: {
      meta: {
        fixable: "code"
      },
      create(context) {
        return {
          FunctionDeclaration(node) {
            const functionName = node.id.name

            if (!functionName.startsWith('get')) return

            const blockStatementBody = node.body.body

            const lastNode = blockStatementBody[blockStatementBody.length - 1]
            if (!lastNode || lastNode.type !== 'ReturnStatement') {
              context.report({
                node,
                message: `${functionName} must return a value`,
                fix(fixer) {
                  return fixer.replaceTextRange([node.range[1] - 1, node.range[1]], " return ''}")
                }
              })
            }
          }
        }
      }
    }
  }
}