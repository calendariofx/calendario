import { NumberingSystem } from 'luxon';

export interface CalendarioOptions {
    readonly displayWeekAbbr?: boolean | string;
    readonly displayMonthAbbr?: boolean | string;
    readonly fillEmpty?: boolean;
    readonly format?: string;
    readonly locale?: string;
    readonly numberingSystem?: NumberingSystem;
    readonly parseLocale?: string;
    readonly startIn?: number;
    readonly timeZone?: string;
}

export const DEFAULTS: CalendarioOptions = {
    displayMonthAbbr: false,
    displayWeekAbbr: false,
    fillEmpty: true,
    format: 'MM-dd-yyyy',
    locale: '',
    numberingSystem: 'latn',
    parseLocale: 'en-US',
    startIn : 1,
    timeZone: 'local'
}

export interface CalendarioInformation {
    readonly NAME: string;
    readonly VERSION: string;
}

export const INFO: CalendarioInformation = {
    NAME: '__NAME__',
    VERSION: '__VERSION__'
}
