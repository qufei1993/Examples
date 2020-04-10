const fs = require('fs');
const path = require('path');

/**
 * Stream 合并
 * @param { String } sourceFiles 源文件目录名
 * @param { String } targetFile 目标文件
 */
function streamMerge(sourceFiles, targetFile) {
	const scripts = fs.readdirSync(path.resolve(__dirname, sourceFiles)); // 获取源文件目录下的所有文件
	const fileWriteStream = fs.createWriteStream(path.resolve(__dirname, targetFile)); // 创建一个可写流

	streamMergeRecursive(scripts, fileWriteStream);
}

/**
 * Stream 合并的递归调用
 * @param { Array } scripts 
 * @param { Stream } fileWriteStream
 */
function streamMergeRecursive(scripts=[], fileWriteStream) {
	// 递归到尾部情况判断
	if (!scripts.length) {
		return fileWriteStream.end("console.log('Stream 合并完成')"); // 最后关闭可写流，防止内存泄漏
	}

	const currentFile = path.resolve(__dirname, 'scripts/', scripts.shift());
	const currentReadStream = fs.createReadStream(currentFile); // 获取当前的可读流

	currentReadStream.pipe(fileWriteStream, { end: false }); 
	currentReadStream.on('end', function() {
		streamMergeRecursive(scripts, fileWriteStream);
	});

	currentReadStream.on('error', function(error) { // 监听错误事件，关闭可写流，防止内存泄漏
		console.error(error);
		fileWriteStream.close();
	});
}

streamMerge('./scripts', './script.js');