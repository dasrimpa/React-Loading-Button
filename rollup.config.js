// rollup.config.js
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel' 
const config = {
  input: 'src/Components/Button.tsx',
  external: ['react'],
  output: {
      format: 'umd',
      name: 'Button',
      globals: {
          react: "React"
      },
      plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
  }
}
export default config