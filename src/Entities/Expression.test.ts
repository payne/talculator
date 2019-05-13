import test from 'tape'

import Expression from './Expression'

const expression = new Expression()

// isEvaluable() tests

test('isEvaluable should correctly check the evaluability of the expression',
  (t) => {
    const isEvaluable = expression.isEvaluable

    t.false(isEvaluable('a0'),
      'a0 is not a Evaluatable numerical expression')

    t.false(isEvaluable('a'),
      'a is not a Evaluatable numerical expression')

    t.false(isEvaluable('+'),
      '+ is not a Evaluatable numerical expression')

    t.false(isEvaluable('.'),
      '. is not a Evaluatable numerical expression')

    t.false(isEvaluable(' '),
      'an empty space is not a Evaluatable numerical expression')

    t.false(isEvaluable('22/'),
      '22/ is not a Evaluatable numerical expression')

    t.true(isEvaluable('44'),
      '44 is a Evaluatable numerical expression')

    t.end()
  })
