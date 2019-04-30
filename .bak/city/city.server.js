app.get('/fetchcity',function(req,res){
    var fs = require('fs');
    var alphadb = db.createConnection();
    var request = db.createRequest("select * from City for json path", alphadb);

    var empty = true;

    request.on('row', function (columns) {
        empty = false;
        var arrays = columns[0].value;
        console.log(arrays);
        fs.writeFile('message.txt',arrays,{ 'flag': 'a' },(err) => {
              if (err){
                console.log(err);
              }else{
                //console.log('It\'s saved!');
              }
        });
    });
    request.on('done', function (rowCount, more, rows) {
        if (empty) {
            console.log('done-------');
            return false;
        }
    });

    request.on('doneProc', function (rowCount, more, rows) {
        if (empty) {
            console.log('doneProc-------');
            return false;
        }
    });

    alphadb.on('connect', function (err) {
        if (err) {
            throw err;
        }
        alphadb.execSql(request);
    });
});