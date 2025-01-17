import path from 'path'


export default {
  root: path.resolve(__dirname, 'src'),
  base: './',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
        input: {
            main: path.resolve(__dirname, 'src/index.html'),
        },
        output: {
            dir: path.resolve(__dirname, 'dist'),
            format: 'es',
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false,
},
publicDir: 'assets',
server: {
  hot: true
}


}
