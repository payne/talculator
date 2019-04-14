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

  getLength () {
    return this.value.length
  }

  getFinalValue () {
    return this.value[-1]
  }

  isZero () {
    return this.value === "0"
  }

  isNumber () {
    let num = parseInt(this.value)
    return typeof num === "number"
  }

  getFirstToPenultimateValue () {
    return this.value.substr(0, this.getLength() - 1)
  }
}

export default Expression