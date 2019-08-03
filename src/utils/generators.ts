import { DateTime } from 'luxon'

export interface RepeatGenerator {
    (start: DateTime, end: DateTime, weekday?: string): IterableIterator<number>;
}

export interface RepeatTypes {
    readonly INTERVAL: RepeatGenerator;
    readonly MONTHLY: RepeatGenerator;
    readonly SINGLE: RepeatGenerator;
    readonly WEEKLY: RepeatGenerator;
    readonly YEARLY: RepeatGenerator;
}

export const repeaters: RepeatTypes = {
    INTERVAL: function* (start: DateTime, end: DateTime): IterableIterator<number> {
        while(start <= end) {
            yield start.toMillis()
            start = start.plus({days: 1})
        }
    },

    MONTHLY: function* (start: DateTime, end: DateTime): IterableIterator<number> {
        while(start <= end) {
            yield start.toMillis()
            start = start.plus({months: 1})
        }
    },

    SINGLE: function* (start: DateTime, end: DateTime): IterableIterator<number> {
        if(start <= end) {
            yield start.toMillis()
        }
    },

    WEEKLY: function* (start: DateTime, end: DateTime, weekday?: string): IterableIterator<number> {
        for(let i = 0; i < 7; i++) {
            if(weekday === start.weekdayShort.toUpperCase()) {
                break
            } else {
                start = start.plus({days: 1})
            }
        }
        
        while(start <= end) {
            yield start.toMillis()
            start = start.plus({weeks: 1})
        }
    },

    YEARLY: function* (start: DateTime, end: DateTime): IterableIterator<number> {
        while(start <= end) {
            yield start.toMillis()
            start = start.plus({years: 1})
        }
    },
}
