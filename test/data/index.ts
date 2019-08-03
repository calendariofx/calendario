import { CalendarioEvents } from '../../src/lib/events'

export const dataEvents: CalendarioEvents = {
    '01-01-1970' : [{content: 'New Year\'s', repeat: 'YEARLY', allDay: true, endDate: '12-31-2100'}],
    '12-25-1970' : [{content: 'Christmas Day', repeat: 'YEARLY', allDay: true, endDate: '12-31-2100'}], 
    '11-04-2013' : [{content: 'Islamic New Year', repeat: 'YEARLY', allDay: true, endDate: '12-31-2100'}],
    '08-21-2019' : [{content: 'Great American Smokeout', url: 'http://www.wincalendar.com/Great-American-Smokeout', allDay: true}],
    '08-13-2019' : [{content: 'Ashura [An example of an complete date event (11-13-2013)]', allDay: true}],
    '11-11-2019' : [{content: 'Remembrance Day (Canada)', url: 'http://www.wincalendar.com/Remembrance-Day', allDay: true}],
    '08-02-2019' : [
        {content: 'Yeah Monthly', repeat: 'MONTHLY', allDay: true, endDate: '09-02-2019'},
        {content : 'Graduation Exams', repeat: 'INTERVAL', allDay: true, endDate: '08-20-2019'}
    ],
    '01-07-2019' : [{content: 'Monthly And Yearly', repeat: 'MONTHLY', allDay: true, endDate: '02-07-2020'}],
    '08-01-2019' : [{content : 'MONDAY (WEEKLY)', repeat: 'MON', allDay: true, endDate: '08-30-2019'}]
}