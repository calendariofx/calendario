import { CalendarioOptions } from './options'
import { Info, DateTime } from 'luxon'

export interface CalendarioEvent {
    allDay?: boolean;
    content: string;
    category?: string;
    endDate?: string;
    endTime?: string;
    note?: string;
    repeat?: string;
    startTime?: string;
    url?: string;
}

export interface ProcessedCalendarioEvent extends CalendarioEvent {
    day: [number, number];
    month: [number, number];
    year: [number, number];
}

export interface CalendarioEvents {
    [key: string]: CalendarioEvent[];
}

export interface ProcessedCalendarioEvents extends CalendarioEvents {
    [key: string]: ProcessedCalendarioEvent[];
    [key: number]: ProcessedCalendarioEvent[];
}

function processEvent (
    dwd: string | number, event: CalendarioEvent, date: 
    DateTime, data: ProcessedCalendarioEvents, options: CalendarioOptions
): ProcessedCalendarioEvents {
    if (!data[dwd]) data[dwd] = []

    if (event.repeat) {
        const _edt = DateTime.fromFormat(event.endDate, options.format, {locale: options.parserLocale})
        data[dwd].push({
            ...event,
            ...{
                day: [date.day, _edt.day],
                month: [date.month, _edt.month],
                year: [date.year, _edt.year]
            }
        })
    } else {
        data[dwd].push({
            ...event,
            ...{
                day: [date.day, date.day],
                month: [date.month, date.month],
                year: [date.year, date.year]
            }
        })
    }

    return data
}

export function processEvents (events: CalendarioEvents, options: CalendarioOptions): ProcessedCalendarioEvents {
    let _pce: ProcessedCalendarioEvents = {}, _dt: DateTime

    for (const [date, _events] of Object.entries(events)) {
        _dt = DateTime.fromFormat(date, options.format, { locale: options.parserLocale })
        for (let event of _events) {
            if (event.repeat) {
                event.repeat = event.repeat.toUpperCase()
            }

            if (event.repeat === 'INTERVAL') {
                event = { ...event, ...{ repeat: Info.weekdaysFormat('short', {locale: options.parserLocale}).join(',') }}
            } 

            if ([undefined, null, 'YEARLY', 'MONTHLY'].includes(event.repeat)) {
                _pce = processEvent(_dt.day, event, _dt, _pce, options)
            } else {
                for(const wd of event.repeat.toUpperCase().split(/[,\s]+/)) {
                    _pce = processEvent(wd, event, _dt, _pce, options)
                }
            }
        }
    }

    return _pce
}