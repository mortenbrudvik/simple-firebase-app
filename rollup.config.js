import cleanup from 'rollup-plugin-cleanup';
import resolve from "@rollup/plugin-node-resolve";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

const isDev = process.env.ROLLUP_WATCH === 'true';

export default [{

    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'es',
    },
    plugins: [

        cleanup(),
        resolve(),
        // copy({
        //     targets: [
        //         { src: 'src/index.html', dest: 'dist' }
        //     ]}),
        isDev && serve({
            open: true, // Open the browser
            contentBase: 'dist',
            host: 'localhost',
            port: 3000
        }),
        isDev && livereload('dist'),
    ]
}];
