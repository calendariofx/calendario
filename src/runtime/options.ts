import { CalendarioOptions } from '../lib/options'
import { StringUnitLength, NumberingSystem } from 'luxon'

export class Options {
    protected options: CalendarioOptions

    public constructor(options: CalendarioOptions) {
        this.options = options
    }

    public getOption(key: string): StringUnitLength | NumberingSystem | boolean | string {
        return this.options[key]
    }
}