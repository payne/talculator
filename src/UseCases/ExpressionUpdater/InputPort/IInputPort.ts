export interface IInputData {
  value: string,
  type: string
}

interface IInputPort {
  updateExpression (inputData: IInputData): void
}

export default IInputPort
