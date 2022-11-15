// eslint plugin
// rule
module.exports = {
  rules: {
    get: {
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
                message: `${functionName} must return a value`
              })
            }
          }
        }
      }
    }
  }
}