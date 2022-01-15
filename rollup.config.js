import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import clear from 'rollup-plugin-clear'

export default [
  {
    input: 'src/index.js',
    external: [ /@babel\/runtime/, '@deck.gl/react', 'react-map-gl' ],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        preserveModules: true
      },
      {
        dir: 'dist/esm',
        format: 'es',
        preserveModules: true
      }
    ],
    plugins: [
      clear({ targets: [ 'dist' ] }),
      postcss({
        plugins: [],
        minimize: true
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        presets: [ '@babel/preset-react' ],
        plugins: [ '@babel/plugin-transform-runtime' ]
      }),
      peerDepsExternal(),
      nodeResolve(),
      terser()
    ]
  }
]