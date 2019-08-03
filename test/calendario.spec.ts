import calendario from '../src'
import { Calendario } from '../src/runtime/calendario'

describe('Calendario Class', (): void => {
    test('Get Head', (): void => {
        const cal: Calendario = calendario()
        
        expect(cal.head).toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    })
})