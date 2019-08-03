import { NumberingSystem, StringUnitLength } from 'luxon'

export interface CalendarioOptions {
    readonly weekNameLength?: StringUnitLength;
    readonly monthNameLength?: StringUnitLength;
    readonly format?: string;
    readonly locale?: string;
    readonly numberingSystem?: NumberingSystem;
    readonly parserLocale?: string;
    readonly startInWeekDay?: number;
    readonly timeZone?: string;
}

export const DEFAULTS: CalendarioOptions = {
    format: 'MM-dd-yyyy',
    locale: '',
    monthNameLength: 'long',
    numberingSystem: 'latn',
    parserLocale: 'en-US',
    startInWeekDay: 1,
    timeZone: 'local',
    weekNameLength: 'long'
}

export interface CalendarioInformation {
    readonly NAME: string;
    readonly VERSION: string;
}

export const INFO: CalendarioInformation = {
    NAME: '__NAME__',
    VERSION: '__VERSION__'
}
