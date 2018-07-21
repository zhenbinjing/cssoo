﻿import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './test/es6/ts/main.js',
  output:{
	   file:'./test/es5/main.js',
	   format: 'iife'
  },
  plugins: [
	buble(),
	babel({
	    exclude: 'node_modules/**',
	    plugins: ['external-helpers'],
	    externalHelpers: true
	}),
	uglify({
            //mangle: true
            //保留关键变量
            mangle: {reserved: ['tsa','TSA']},
            toplevel: true
        })
  ]
};
