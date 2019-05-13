import test from 'tape'

import Expression from '../../Entities/Expression'
import ExpressionUpdater from './ExpressionUpdater'

const expression = new Expression()
const expressionUpdater = new ExpressionUpdater(expression, {
  displayValue (value: string) {
    //
  }
})

// isNumber tests

test('isNumber should return whether the expression is a number or not',
  (t) => {
  const isNumber = expressionUpdater.isNumber.bind(expressionUpdater)

  t.true(isNumber('22'), '22 is a number')

  t.false(isNumber('26 - 3'), '26 - 3 is not a number')

  t.true(isNumber('0.2'), '0.2 is a number')

  t.true(isNumber('.2'), '.2 is a number')

  t.false(isNumber('0.2 + .34 - '), '0.2 + .34 - is not a number')

  t.false(isNumber(' + '), '+ is not a number')

  t.false(isNumber('_'), '- is not a number')

  t.end()
})

// getLastNumber tests

test('getLastNumber should return the last number from the expression', (t) => {
  const getLastNumber = expressionUpdater.getLastNumber.bind(expressionUpdater)

  t.equal(getLastNumber('22 + 33 - '), '33')

  t.equal(getLastNumber('22 + 33'), '33')

  t.equal(getLastNumber('22 + .33'), '.33')

  t.equal(getLastNumber('0.03 - '), '0.03')

  t.end()
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

test('getSubExpressionWithoutLastValue should return everything but the \
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
