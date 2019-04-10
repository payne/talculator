class Expression {
  _value: string = "0"

  setValue = (newValue: string) => {
    this._value = newValue
  }

  getValue = () => {
    return this._value
  }
}

export default Expression