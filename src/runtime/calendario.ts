import { DateTime, StringUnitLength, NumberingSystem } from 'luxon'
import { ProcessedCalendarioEvents, CalendarioEvents, processEvents, ProcessedCalendarioEvent } from '../lib/events'
import { CalendarioOptions } from '../lib/options'
import { Today } from './today'
import calendario from '../index'

export class Calendario extends Today {
    private events: ProcessedCalendarioEvents
    private _events: CalendarioEvents

    public constructor(today: DateTime, events: CalendarioEvents, options: CalendarioOptions) {
        super(today, options)
        this.events = processEvents({...events}, options)
        this._events = events
    }

    private filterEvents(filterDate: DateTime): CalendarioEvents[] {
        return Array.prototype.concat(this.events[filterDate.day], this.events[filterDate.weekdayShort.toUpperCase()])
            .filter((event: ProcessedCalendarioEvent): boolean => {
                if (!event) return false
                if (filterDate >= event.dates[0] && filterDate <= event.dates[1]) {
                    for(const epoch of event.generator(event.dates[0], event.dates[1], filterDate.weekdayShort.toUpperCase())) {
                        if(epoch === filterDate.toMillis()) return true
                    }
                }
                return false
            }).map((event): CalendarioEvents => {
                return {...event, ...{dates: undefined, generator: undefined}}
            })
    }

    public get head(): string[] {
        const weekdays: string[] = []

        for(let i = 0; i < this.weekdays.length; i++) {
            weekdays.push(this.weekdays[(i - 1 + this.options.startInWeekDay) % this.weekdays.length])
        }

        return weekdays
    }

    public get body(): unknown[] {
        let stDate: DateTime = this.today.minus({ days: ( 7 + ( this.today.weekday - this.options.startInWeekDay )) % 7 })
        const _td: DateTime = DateTime.local().startOf('day')
        const cal = Array(this.rows)

        for(let i = 0; i < cal.length; i++) {
            for(let j = 0; j < 7; j++) {
                if (!Array.isArray(cal[i])) cal[i] = []
                cal[i].push({
                    date: stDate,
                    dateClass: `date-${stDate.toFormat(this.options.format)}`,
                    events: this.filterEvents(stDate),
                    future: stDate > _td,
                    nextMonth: stDate.startOf('month').diff(this.today, 'months').months > 0,
                    past: stDate < _td,
                    previousMonth: stDate.startOf('month').diff(this.today, 'months').months < 0,
                    today: stDate.equals(_td),
                    weekday: stDate.weekdayShort.toLowerCase()
                })
                
                stDate = stDate.plus({days: 1})
            }
        }

        return cal
    }

    public get rows(): number {
        return Math.ceil(this.today.endOf('month').diff(
            this.today.minus({ days: (7 + ( this.today.weekday - this.options.startInWeekDay )) % 7 }),
            'weeks'
        ).weeks)
    }

    public setOption(key: string, value: StringUnitLength | NumberingSystem | boolean | string): Calendario {
        const options = { ...this.options, ...{[key]: value} }
        return calendario(this._events, options, this.today.toJSDate())
    }

    public toDate(date: Date): Calendario {
        return calendario(this._events, this.options, date)
    }

    public nextMonth(): Calendario {
        return this.toDate(this.today.plus({months: 1}).toJSDate())
    }

    public previousMonth(): Calendario {
        return this.toDate(this.today.minus({months: 1}).toJSDate())
    }

    public nextYear(): Calendario {
        return this.toDate(this.today.plus({years: 1}).toJSDate())
    }

    public previousYear(): Calendario {
        return this.toDate(this.today.minus({years: 1}).toJSDate())
    }

    public now(): Calendario {
        return this.toDate(DateTime.local().toJSDate())
    }

}