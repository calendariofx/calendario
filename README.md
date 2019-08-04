# Calendario

Calendario is a small library for creating flexible Calendars. It uses [Luxon](https://moment.github.io/luxon/) as it's Date wrapper, so by default Calendario supports internationalization through `Intl` api (supported by most mordern browsers), `Time Zones` with `DST` support, various `Numbering Systems` and more. Even though, [Luxon](https://moment.github.io/luxon/) supports multiple `Calendar` formatting, we decided to go against supporting any of that other than `Gregorian`. The reasoning behind it is `CalendarioFX`, a framework for generating calendars of various types of calendars (*details not ironed out yet*), but in the mean time enjoy building **Calendarios**

# History

It was first released by [Codrops](https://tympanus.net/codrops/) on Nov 27, 2012, full [article](https://tympanus.net/codrops/2012/11/27/calendario-a-flexible-calendar-plugin/). During that time only, Fullcalendar was dominant (*still is*), but the simplicity of Calendario was very appealing. Therefore, I decided to ask the authors to transfer maintainer ownership to [me](https://github.com/deviprsd/). From [**v1** to **v5**](https://github.com/CalendarioFX/Calendario/wiki/Change-Log), I blindly added features breaking changes pretty randomly (*you can say I was a novice back then*), it was still a pretty fun time. Over time, it had gathered a small user base. Then with my growing adulthood, school and life, I slowly started abandoning it. Calendario as jQuery plugin has been dead for 4 years now. 

Until this week, I decided to moredernize it with `TypeScript`, remove any sign of `jQuery`, turn it into a `node/yarn` library and not generate any `HTML`. Result, a even more highly fexible library that can do anything whatever the consumer developer wishes to and not what we would want them to. *That's the beauty of it!*

# Getting Started

```
npm i calendariofx-calendario
```

or 

```
yarn add calendariofx-calendario
```

Package is bundled in both **CJS** and **ESM** format, so you can do either

```js
const calendario = require('calendariofx-calendario') // CJS

import calendario from 'calendariofx-calendario' // ESM
```

# Documentaion / Test

The detailed documentations and tests are being written, but you can find auto generated [docs](http://calendariofx.github.io/Calendario/docs/) here. After further testing, it would ready for a beta phase. Check out this [example in svelte](https://github.com/CalendarioFX/example-calendario-svelte/) on how to build a beautiful calendar.