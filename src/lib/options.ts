import { NumberingSystem, StringUnitLength } from 'luxon'

export interface CalendarioOptions {
    readonly weekNameLength?: StringUnitLength;
    readonly monthNameLength?: StringUnitLength;
    readonly fillEmpty?: boolean;
    readonly format?: string;
    readonly locale?: string;
    readonly numberingSystem?: NumberingSystem;
    readonly parserLocale?: string;
    readonly startIn?: number;
    readonly timeZone?: string;
}

export const DEFAULTS: CalendarioOptions = {
    fillEmpty: true,
    format: 'MM-dd-yyyy',
    locale: '',
    monthNameLength: 'long',
    numberingSystem: 'latn',
    parserLocale: 'en-US',
    startIn : 0,
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
