export type Type = 'error' | 'info' | 'success' | 'warning'

export type Entity = {
  type: Type
  message: string
}
