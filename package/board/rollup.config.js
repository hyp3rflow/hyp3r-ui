import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  external: ['styled-components', 'react', 'react-dom'],
  plugins: [
    typescript({ typescript: require('typescript') }),
    resolve({ extensions }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
  ],
  output: [{ file: pkg.module, format: 'es' }],
};
