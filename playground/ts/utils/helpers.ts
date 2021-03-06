import { lbDate } from 'lbdate'

export function isNullable(value: any): value is null | undefined {
  return value === null || value === undefined
}

export function runAsync(callback: () => void): void {
  setTimeout(() => {
    callback()
  })
}

export function getCurrentToJsonMethodName(): string {
  return lbDate().getGlobalConfig().toNativeJsonName ?? lbDate().getDefaultConfig().toNativeJsonName
}

export function isMethodInDatesPrototype(methodName: string): boolean {
  return !!Date.prototype[methodName]
}
