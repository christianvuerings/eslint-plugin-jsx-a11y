'use strict';

import getValue from './index';



/**
 * Extractor function for a BinaryExpression type value node.
 * A binary expression has a left and right side separated by an operator
 * such as `a + b`.
 *
 * @param - value - AST Value object with type `BinaryExpression`
 * @returns - The extracted value converted to correct type.
 */
export default function extractValueFromBinaryExpression(value) {
  const { operator, left, right } = value;
  const leftVal = getValue(left);
  const rightVal = getValue(right);

  switch (operator) {
    case '==':
      return leftVal == rightVal;
    case '!=':
      return leftVal != rightVal;
    case '===':
      return leftVal === rightVal;
    case '!==':
      return leftVal !== rightVal;
    case '<':
      return leftVal < rightVal;
    case '<=':
      return leftVal <= rightVal;
    case '>':
      return leftVal > rightVal;
    case '>=':
      return leftVal >= rightVal;
    case '<<':
      return leftVal << rightVal;
    case '>>':
      return leftVal >> rightVal;
    case '>>>':
      return leftVal >>> rightVal;
    case '+':
      return leftVal + rightVal;
    case '-':
      return leftVal - rightVal;
    case '*':
      return leftVal * rightVal;
    case '/':
      return leftVal / rightVal;
    case '%':
      return leftVal % rightVal;
    case '|':
      return leftVal | rightVal;
    case '^':
      return leftVal ^ rightVal;
    case '&':
      return leftVal & rightVal;
    case 'in':
      return leftVal in rightVal;
    case 'instanceof':
      return leftVal instanceof rightVal;
    default:
      return undefined;
  }
}
