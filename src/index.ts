import { CalendarioOptions, DEFAULTS } from './lib/options'
import { TimeZoneError } from './lib/errors'
import { CalendarioEvents, processEvents, ProcessedCalendarioEvents } from './lib/events'
import { Settings, Info, Zone, DateTime } from 'luxon'
import { Calendario } from './runtime/calendario'

export default function calendario (events?: CalendarioEvents, options: CalendarioOptions = {}, today?: Date): Calendario {
    let zone: Zone

    Settings.throwOnInvalid = true

    options = {...DEFAULTS, ...options}
    const resolvedOpts = DateTime.fromObject({ locale: options.locale, numberingSystem: options.numberingSystem }).resolvedLocaleOpts()

    if(!(zone = Info.normalizeZone(options.timeZone)).isValid) {
        throw new TimeZoneError(`Invalid timezone ${options.timeZone}`)
    }
    
    Settings.defaultZoneName = zone.name
    Settings.defaultLocale = resolvedOpts.locale
    Settings.defaultNumberingSystem = resolvedOpts.numberingSystem
    Settings.defaultOutputCalendar = 'gregory'

    const _today: DateTime = (today ? DateTime.fromJSDate(today) : DateTime.local()).setLocale(options.parserLocale)
    const _events: ProcessedCalendarioEvents = events ? processEvents({...events}, options) : {}

    return new Calendario(_today, _events, options)
}

export { INFO } from './lib/options'
