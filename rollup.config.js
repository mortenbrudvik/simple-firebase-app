import cleanup from 'rollup-plugin-cleanup';
import resolve from "@rollup/plugin-node-resolve";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import html from 'rollup-plugin-html2';

const isDev = process.env.ROLLUP_WATCH === 'true';

export default {
    input: 'src/index.js', // Your main JavaScript file
    output: {
        file: 'dist/index.js', // Output bundle file
        format: 'esm', // Use "iife" for browser global variables, "cjs" for Node.js, "es" for ES modules
        name: 'Simple Firebase App', // The global variable name to hold the module exports, if using "iife"
        sourcemap: isDev // Enable source maps in development
    },
    plugins: [

        cleanup(),
        html({
            template: 'src/index.html', // Path to your HTML template
            fileName: 'index.html' // Output file name
        }),
        resolve(),
        // Conditionally apply these plugins in development mode
        isDev && serve({
            open: true, // Open the browser
            contentBase: 'dist',
            host: 'localhost',
            port: 3000
        }),
        isDev && livereload('dist')
    ]
};
