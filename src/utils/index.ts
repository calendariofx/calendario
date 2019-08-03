// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function applyMixins(derivedCtor: any, baseCtors: any[]): void {
    baseCtors.forEach((baseCtor): void => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name): void => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name))
        })
    })
}
