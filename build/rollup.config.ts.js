﻿import minify from 'rollup-plugin-babel-minify';
//import resolve from 'rollup-plugin-node-resolve';
//import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './test/es6/main.js',
  output: {
	   file:'./test/es6/ts/main.js',
  	   format: 'es'
	   //name: 'icut',
	   //sourcemap: 'true',
  },
  plugins: [
	minify()
	//resolve({ jsnext: true, main: true, browser: true, }),
	//commonjs()
  ]
};
