import test from 'tape'

import Expression from '../../Entities/Expression'
import ExpressionUpdater from './ExpressionUpdater'

const expression = new Expression()
const expressionUpdater = new ExpressionUpdater(expression, {
  displayValue (value: string) {
    //
  }
})

// getLastValue tests

test('getLastValue should return the last value from the expression', (t) => {
  const getLastValue = expressionUpdater.getLastValue.bind(expressionUpdater)

  t.equal(getLastValue('234 - '), '-')

  t.equal(getLastValue('233 / '), '/')

  t.equal(getLastValue('234 * 556'), '556')

  t.end()
})

// getSubExpressionWithoutLastValue tests

test('getSubExpressionWithoutLastValue should return everything but the\
  last value from the expression', (t) => {
  const getSubExpressionWithoutLastValue =
    expressionUpdater.getSubExpressionWithoutLastValue.bind(expressionUpdater)

  t.equal(getSubExpressionWithoutLastValue('234'), '23')

  t.equal(getSubExpressionWithoutLastValue('234 + '), '234')

  t.end()
})

// isLastValueOperator tests

test('isLastValueOperator should return if the last Value of the expression'
  + ' is an operator', (t) => {
  const isLastValueOperator =
    expressionUpdater.isLastValueOperator.bind(expressionUpdater)

  t.true(isLastValueOperator('234 + 33 -'), '234 + 33 - ends with an operator')

  t.false(isLastValueOperator('234 - 467'),
    '234 - 467 does not end with an operator')

  t.false(isLastValueOperator('234.'), '234. does not end with an operator')

  t.false(isLastValueOperator('0'))

  t.end()
})
