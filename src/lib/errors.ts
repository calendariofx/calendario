export class TimeZoneError extends Error {
    public constructor(m: string) {
        super(`${m} | Visit https://momentjs.com/timezone/ for a list of Valid TimeZones`)
        Object.setPrototypeOf(this, TimeZoneError.prototype)
    }
}