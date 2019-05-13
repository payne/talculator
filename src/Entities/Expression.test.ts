import test from 'tape'

import Expression from './Expression'

const expression = new Expression()

// isEvaluable() tests

test('isEvaluable should correctly check the evaluability of the expression',
  (t) => {
    const isEvaluable = expression.isEvaluable

    t.false(isEvaluable('a0'),
      'a0 is not an evaluable expression')

    t.false(isEvaluable('a'),
      'a is not an evaluable expression')

    t.false(isEvaluable('+'),
      '+ is not an evaluable expression')

    t.false(isEvaluable('.'),
      '. is not an evaluable expression')

    t.false(isEvaluable(' '),
      'an empty space is not an evaluable expression')

    t.false(isEvaluable('22/'),
      '22/ is not an evaluable expression')

    t.true(isEvaluable('44'),
      '44 is an evaluable expression')

    t.true(isEvaluable('2*0'),
      '2*0 is an evaluable expression')

    t.true('0/2',
      '0/2 is an evaluable expression')

    t.true('2/0',
      '2/0 is an evaluable expression')

    t.end()
  })
