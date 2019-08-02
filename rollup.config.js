import typescript from 'rollup-plugin-typescript'
import dts from 'rollup-plugin-dts'
import replace from 'rollup-plugin-replace'
import pkg from './package.json'

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'index.js',
                format: 'cjs'
            },
            {
                file: 'index.mjs',
                format: 'esm'
            }
        ],
        plugins: [
            typescript(),
            replace({
                __NAME__: pkg['version-name'],
                __VERSION__: pkg['version']
            })
        ]
    },
    {
        input: 'src/index.ts',
        output: [{ 
            file: '@types/calendario.d.ts',
            format: 'es'
        }],
        plugins: [dts()],
    }
]
