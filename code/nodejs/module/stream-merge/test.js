const fs = require('fs');
const readable = fs.createReadStream('./test1.txt');
const writeable = fs.createWriteStream('./test2.txt');

// readable.pipe(writeable);

readable.pipe(writeable, {
	end: false,
});
readable.on('end', function() {
	console.log('end');
	//writeable.end('结束');
});
readable.on('error', function() {
	console.log('error');
	writeable.close();
});

console.log(process.pid);
setInterval(function(){}, 5000)

