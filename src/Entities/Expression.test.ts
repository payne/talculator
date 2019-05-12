import test from 'tape'

import Expression from './Expression'

const expression = new Expression()

// isEvaluatable() tests

test('isEvaluatable should correctly Evaluatableate the expression',
  (t) => {
    const isEvaluatable = expression.isEvaluable

    t.false(isEvaluatable('a0'),
      'a0 is not a Evaluatable numerical expression')

    t.false(isEvaluatable('a'),
      'a is not a Evaluatable numerical expression')

    t.false(isEvaluatable('+'),
      '+ is not a Evaluatable numerical expression')

    t.false(isEvaluatable('.'),
      '. is not a Evaluatable numerical expression')

    t.false(isEvaluatable(' '),
      'an empty space is not a Evaluatable numerical expression')

    t.false(isEvaluatable('22/'),
      '22/ is not a Evaluatable numerical expression')

    t.true(isEvaluatable('44'),
      '44 is a Evaluatable numerical expression')

    t.end()
  })
