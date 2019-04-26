export interface IExpressionUpdaterInputData {
  value: string,
  type: string
}

interface IExpressionUpdaterInputPort {
  updateExpression (inputData: IExpressionUpdaterInputData): void
}

export default IExpressionUpdaterInputPort
