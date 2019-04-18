/**
 * An expression is made up of one or more numbers and zero or more operators.
 * Each number or operator is followed by a space.
 **/

class Expression {
  private value: string = "0"

  setValue (newValue: string) {
    this.value = newValue
  }

  getValue () {
    return this.value
  }
}

export default Expression