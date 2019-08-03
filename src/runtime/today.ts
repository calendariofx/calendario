import { DateTime, Info } from 'luxon'
import { Options } from './options'
import { CalendarioOptions } from '../lib/options'

export class Today extends Options {
    protected today: DateTime
    protected weekdays: string[]
    protected months: string[]

    public constructor(today: DateTime, options: CalendarioOptions) {
        super(options)
        this.today = today.startOf('month').startOf('day')
        this.weekdays = Info.weekdaysFormat(options.weekNameLength)
        this.months = Info.monthsFormat(options.monthNameLength)
    }

    public get month(): number {
        return this.today.month
    }

    public get monthName(): string {
        return this.months[this.today.month - 1]
    }

    public get monthNames(): string[] {
        return this.months
    }

    public get year(): number {
        return this.today.year
    }
}