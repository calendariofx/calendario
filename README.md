Calendario  [![Build Status](https://travis-ci.org/deviprsd21/Calendario.svg?branch=v4.0.0)](https://travis-ci.org/deviprsd21/Calendario)
=========================================================================================================================================

A jQuery calendar plugin for creating flexible calendars.

[Article](http://tympanus.net/codrops/?p=12416)

[Demo](http://deviprsd21.github.io/Calendario/)

Notable Changes
===============
* Calendario gets more flexible : [Boží Ďábel](https://github.com/deviprsd21) ([Pull Request - #11](https://github.com/codrops/Calendario/pull/11))
* Multiple Events : [Mattias Lyckne](https://github.com/olyckne) ([Pull Request - #22](https://github.com/codrops/Calendario/pull/22))
* Flexibility In-built : [Boží Ďábel](https://github.com/deviprsd21) ([Pull Request - #23](https://github.com/codrops/Calendario/pull/23))
* Now with Time : [Boží Ďábel](https://github.com/deviprsd21) ([Pull Request - #25](https://github.com/codrops/Calendario/pull/25))

Requirements
============
* jQuery (Required) [[GET!](http://code.jquery.com/)]
* Event File (Optional)
* Latest Mordern Browser (Required)

Installation
============
First download a copy and edit these.
```javascript
Calendario.INFO = {
  EMAIL : '%email%', //your email
  FEED : '%feed%', //your feed link
  NAME : 'FrozenTime!',
  VERSION : '4.0.0',
  UNIQUE : '%unique%', //your unique id
  USER : '%user%', //you name
  UPDATEURL : '%url%' //leave this
}
```

Then include them to the bottom of the `<body>` tag
```html
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="js/calendario.min.js"></script>
<script type="text/javascript" src="js/data.js"></script>
```

How to Use
==========

##### Initialize (All Options Mentioned)
```javascript
$("#calendar").calendario({
    month: 02,
	year: 2012,
    displayWeekAbbr : false,
    displayMonthAbbr : false,
    startIn : 1,
    fillEmpty: true,
    zone: '00:00',
	events : ['click', 'focus'],
    checkUpdate: true,
    weekdays: 'MON, TUE, WED, THU, FRI',
    weekends: 'SAT, SUN',
    feed: 'http://calendario.t15.org/sync/'
});
```

##### Access Calendario Functions
```javascript
$('#calendar').calendario('getMonthName');

/* All Accessible Methods */
$('#calendar').calendario('getYear'); //returns
$('#calendar').calendario('getMonth'); //returns
$('#calendar').calendario('getMonthName'); //returns
$('#calendar').calendario('getCell', date, returnData); //returns
$('#calendar').calendario('setData', data, clearData); //does not return
$('#calendar').calendario('gotoNow', callback); //does not return
$('#calendar').calendario('gotoMonth', month, year, callback); //does not return
$('#calendar').calendario('gotoPreviousMonth', callback); //does not return
$('#calendar').calendario('gotoPreviousYear', callback); //does not return
$('#calendar').calendario('gotoNextMonth', callback); //does not return
$('#calendar').calendario('gotoNextYear', callback); //does not return
$('#calendar').calendario('feed'); //returns
$('#calendar').calendario('version'); //returns
```

##### Calendario Events
```javascript
//This event triggers only once when all the calendario have been intialized
$(document).on('finish.calendar.calendario', function(e){ //something });
$('#calendar').on('shown.calendar.calendario', function(){
	//onDay events to be declared inside 'shown.calendar.calendario'
	//If events : ['click', 'focus'] then only these two events will be
	//available, i.e., 'onDayClick.calendario' and 'onDayFocus.calendario'
	//and so on. You can have custom events.
	$('div.fc-row > div').on('onDayClick.calendario', function(e, dateprop) {
		console.log(dateprop);
	});
});
```

Licensing & Terms of Use
========================
The resources on Codrops can be **used freely in personal and commercial projects.** Please note, that most of the tutorials and resources are experimental and not ready for production, but made for inspiration and demonstration purpose only.

The resources on Codrops can be used in websites, web apps and web templates intended for sale. You don’t have to link back to us if it vitiates your work but we appreciate any credit.

**You are not allowed to take our work “as-is” and sell it, redistribute or re-publish it, or sell “pluginized” versions of it.**

If you plan to create free WordPress, jQuery, Joomla, etc. plugins out of our scripts, please credit us in a fair way and link to the respective article on Codrops.

Please, respect the licenses of the resources (audio, video or images) that we often use in our demos. We always indicate the license in the article and link to the owner/creator in both, article and demo.

If you write about some of our work we would like you to add a link back to us. You are free to copy excerpts but please do not copy entire articles (e.g. RSS feed scraping), we put our heart into this work. **Don’t re-publish our demos and our ZIP files, and don’t link directly to any ZIP file, link to the article instead.**

Please [contact](http://tympanus.net/codrops/contact/) us, if you’d like to translate articles and re-publish them.

Summarized, use it freely, integrate it, make it your own, but don’t copy and paste our work and sell it or claim that it’s yours, **stay fair.**
