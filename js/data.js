<<<<<<< HEAD
var codropsEvents = {
	'11-21-2013' : '<a href="http://www.wincalendar.com/Great-American-Smokeout">Great American Smokeout</a>',
	'11-13-2013' : '<span>Ashura [An example of an complete date event (11-13-2013)]</span>',
	'11-11-2013' : '<a href="http://www.wincalendar.com/Remembrance-Day">Remembrance Day (Canada)</a>',
	'11-04-2013' : '<span>Islamic New Year</span>',
	'11-03-2013' : '<a href="http://www.wincalendar.com/Daylight-Saving-Time-Ends">Daylight Saving Time Ends</a>',
	'11-01-2013' : '<span>All Saints Day</span>',
	'12-25-YYYY' : '<span>Christmas Day [Date : 12-25-YYYY]</span>',
	'01-01-YYYY' : '<span>New Year\'s Eve (Event repeats every YEAR)</span>',
	'MM-02-2013' : '<span>Yeah, Monthly [MM-02-2013]</span>',
	'MM-07-YYYY' : '<span>[MM-07-YYYY], Monthly and Yearly</span>',
	'11-DD-2014' : {content : '<span>Ex: {\'11-DD-2014\' : {content : \'Something\', endDate : 20}}</span>', endDate : 20},
	'02-DD-2014' : {content : '<span>Ex: {\'02-DD-2014\' : {content : \'Something\', startDate : 10, endDate : 20}}</span>', startDate : 10, endDate : 20},
	'12-DD-YYYY' : '<span>[12-DD-YYYY] Whole month and Year</span>',
	'TODAY' : '<span>Today, [Date : \'TODAY\']</span>',
	'10-16-2014': ['<a href="">event one</a>', '<span>event two</span>'],
	'10-DD-YYYY' : [
		{content : '<span>Ex: {\'10-DD-2014\' : {content : \'Something\', startDate : 10, endDate : 20}}</span>', startDate : 10, endDate : 20},
		{content : '<span>Ex: {\'10-DD-2014\' : {content : \'Something\', endDate : 20}}</span>', endDate: 20},
	]

};
=======
var events = {
	'11-21-2013' : [{content: 'Great American Smokeout', url: 'http://www.wincalendar.com/Great-American-Smokeout', allDay: true}],
	'11-13-2013' : [{content: 'Ashura [An example of an complete date event (11-13-2013)]', allDay: true}],
	'11-11-2013' : [{content: 'Remembrance Day (Canada)', url: 'http://www.wincalendar.com/Remembrance-Day', allDay: true}], 
	'11-04-2013' : [{content: 'Islamic New Year', repeat: 'YEARLY', allDay: true, endDate: '12-31-2100'}],
	'12-25-1970' : [{content: 'Christmas Day', repeat: 'YEARLY', allDay: true, endDate: '12-31-2100'}],
	'01-01-1970' : [{content: 'New Year\'s', repeat: 'YEARLY', allDay: true, endDate: '12-31-2100'}],
	'03-02-2015' : [{content: 'Yeah Monthly', repeat: 'MONTHLY', allDay: true, endDate: '07-02-2015'}],
	'01-07-2012' : [{content: 'Monthly And Yearly', repeat: 'MONTHLY', allDay: true, endDate: '02-07-2015'}],
	'03-02-2015' : [{content : 'Graduation Exams', repeat: 'INTERVAL', allDay: true, endDate: '03-20-2015'}],
	'04-01-2015' : [{content : 'MONDAY (WEEKLY)', repeat: 'MON', allDay: true, endDate: '04-30-2015'}]
},
t = new Date(),
//Creation of today event
today = ((t.getMonth() + 1) < 10 ? '0' + (t.getMonth() + 1) : (t.getMonth() + 1)) + '-' + (t.getDate() < 10 ? '0' + t.getDate() : t.getDate()) + '-' +t.getFullYear();
events[today] = [{content: 'TODAY', allDay: true}];
>>>>>>> master
