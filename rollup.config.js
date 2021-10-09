import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'function_utl_src.js',
	output: {
		file: 'function_utl.js',
		format: 'iife'
	},
	plugins: [resolve({
		// 将自定义选项传递给解析插件
		customResolveOptions: {
			moduleDirectory: 'node_modules'
		}
	}),commonjs({
		// exclude:"node_modules/(web3|elliptic|@ethereumjs|websocket|browserify-sign)/**"
	})],
};