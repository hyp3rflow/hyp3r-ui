import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const ext = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  external: ['styled-components'],
  plugins: [
    typescript({ typescript: require('typescript') }),
    external(),
    resolve({ ext }),
    babel({
      ext,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
  ],
  output: [{ file: pkg.module, format: 'es' }],
};
