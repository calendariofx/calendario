import { DateTime } from 'luxon'
import { ProcessedCalendarioEvents } from '../lib/events'
import { CalendarioOptions } from '../lib/options'
import { Today } from './today'

export class Calendario extends Today {
    private events: ProcessedCalendarioEvents

    public constructor(today: DateTime, events: ProcessedCalendarioEvents, options: CalendarioOptions) {
        super(today, options)
        this.events = events
    }

    public get head(): string[] {
        const weekdays: string[] = []

        for(let i = 0; i < this.weekdays.length; i++) {
            weekdays.push(this.weekdays[(i + this.options.startIn) % this.weekdays.length])
        }

        return weekdays
    }
}