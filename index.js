// eslint plugin
// rule
module.exports = {
  rules: {
    get: {
      create(context) {
        return {
          FunctionDeclaration(node) {
            const functionName = node.id.name
            const BlockStatementBody = node.body.body
            if (BlockStatementBody.length === 0) {
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