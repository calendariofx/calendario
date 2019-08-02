import { DateTime } from 'luxon'
import { ProcessedCalendarioEvents } from '../lib/events'
import { CalendarioOptions } from '../lib/options'

export class Calendario {
    private today: DateTime
    private events: ProcessedCalendarioEvents
    private options: CalendarioOptions

    public constructor(today: DateTime, events: ProcessedCalendarioEvents, options: CalendarioOptions) {
        this.today = today
        this.events = events
        this.options = options
    }
}