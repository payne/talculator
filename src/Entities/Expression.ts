class Expression {
  private value: string = '0'

  public setValue = (newValue: string) => {
    this.value = newValue
  }

  public getValue () {
    return this.value
  }

  /*
  * An evaluable expression can only start and end with a number.
  *
  * It cannot contain any alphabetical characters or invalid sequences,
  * i.e two operators cannot occur next to each other.
  *
  */
  public isEvaluable = (value: string): boolean => {
    if (value.slice(-1).match(/\d/) && value.slice(0,1).match(/\d/)) {
      if (value.match(/[a-zA-z]/) || value.match(/[\+\-\*\/][\+\-\*\/]/)) {
        return false
      } else { return true }
    } else { return false }
  }
}

export default Expression
