var timelineEvents = {},
today = new Date();
timelineEvents['0' + (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()] = [
		{content: 'John Applesed\'s Birthday', allDay: true},
		{content: 'Arnold Mathew\'s Birthday', allDay: true},
		{content: 'Captain X\'s Birthday', allDay: true},
		{content: 'Sleep, sleep, sleep!', startTime: '00:00', endTime: '06:00'}, 
		{content: 'Wake Up! Get Ready! 30 Mins Max :)', startTime: '06:00', endTime: '06:30'},
		{content: 'I\'m getting late for work! GOD!! (Average time 17mins to reach)', startTime: '06:30', endTime: '06:47'},
		{content: 'Make report on Li-Fi', startTime: '06:47', endTime: '12:00', url: 'https://en.wikipedia.org/wiki/LIFI'},
		{content: 'Lunch with friend\'s at KFC', startTime: '12:00', endTime: '13:00'}, 
		{content: '10mins break :p', startTime: '13:00', endTime: '13:10'},
		{content: 'Have no clue? O.o', startTime: '13:20', endTime: '17:41'},
		{content: 'Quick nap, after returning home!', startTime: '18:00', endTime: '18:20'},
		{content: 'Dinner with my Girl Friend', startTime: '19:00', endTime: '21:30'},
		{content: 'Prepare for Sleep!', startTime: '22:00', endTime: '23:01'},
		{content: 'Trying to sleep', startTime: '23:01', endTime: '24:00', note: "I have sleeping disorders"}
	];