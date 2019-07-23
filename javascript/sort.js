function CanvasSort () {
    /* this.fillRect = function (x, y, w, h) {
        ctx.fillRect(x, y, w, h);
    } */

    this.wMultiple = 5; // with multiple
    this.hMultiple = 5; // height multiple
    this.bubbleWidth = 0;
    this.bubbleHeight = 0;
    this.max = function (arr) {
        return Math.max.apply(null, arr);
    }
}

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve();
        }, ms);
    })
}

CanvasSort.prototype.handleInitSort = function (arr, type) {
    var canvas = document.getElementById(type + 'Sort');
    var ctx = canvas.getContext('2d');
    var len = arr.length;
    this[type + 'Width'] = len * 60;
    this[type + 'Height'] = this.max(arr) * this.hMultiple;
    canvas.width = this[type + 'Width'];
    canvas.height = this[type + 'Height'];
    
    for (var i=0; i<arr.length; i++) {
        ctx.fillStyle = "#add5e3";
        ctx.fillRect(i * 50, canvas.height - arr[i] * 3, 40, arr[i] * 3);
        ctx.font = "14px serif";
        ctx.fillStyle = "#000000";
        ctx.fillText(arr[i], i * 50 + 10, canvas.height - arr[i] * 3 - 5);
    }

    return ctx;
}

CanvasSort.prototype.handleStartBubbleSort = function (ctx, type, arr, i) {
    var len = arr.length;
    var that = this;
    var height = type + 'Height';

    console.log('第', i, '次循环', type, arr, len, i);

    for (var j = 0; j < len - 1 - i; j++) {
        (function(a, b) {
            setTimeout(function () {
                if (b > 1) { // 恢复前一个
                    ctx.fillStyle = "#add5e3";
                    ctx.fillRect((a - 1) * 50, that[height] - arr[a -1] * 3, 40, arr[a - 1] * 3);
                }

                ctx.fillStyle = '#24e278';
                ctx.fillRect(a * 50, that[height] - arr[a] * 3, 40, arr[a] * 3);
                ctx.fillRect(b * 50, that[height] - arr[b] * 3, 40, arr[b] * 3);

                if (arr[a] > arr[b]) { // 两两交换
                    // 清空坐标数据
                    ctx.clearRect(a * 50, 0, 40, that[height]);
                    ctx.clearRect(b * 50, 0, 40, that[height]);

                    // 坐标交换
                    var temp = arr[b];
                    arr[b] = arr[a];
                    arr[a] = temp;

                    //console.log('a > b', arr[a], arr[b], ' | ', a, b)
                    //console.log('a: ', a * 50, 100 - arr[a] * 3, 40, arr[a] * 3)
                    //console.log('b: ', b * 50, 100 - arr[b] * 3, 40, arr[b] * 3)
                    
                    ctx.fillStyle = '#24e278';
                    ctx.fillRect(a * 50, that[height] - arr[a] * 3, 40, arr[a] * 3);
                    ctx.fillRect(b * 50, that[height] - arr[b] * 3, 40, arr[b] * 3);

                    /* console.log('-------------------------------');
                    console.log(a * 50, that[height] - arr[a] * 3, 40, arr[a] * 3);
                    console.log(b * 50, that[height] - arr[b] * 3, 40, arr[b] * 3);
                    console.log('-------------------------------'); */

                    // 坐标上方字体交换
                    ctx.fillStyle = "#000000";
                    ctx.fillText(arr[a], a * 50 + 10, that[height] - arr[a] * 3 - 5);
                    ctx.fillText(arr[b], b * 50 + 10, that[height] - arr[b] * 3 - 5);
                    //console.log('-----------');
                }

                if (b === len - 1 - i) {
                    //console.log('渲染已完成', a, b);
                    if (a > 0) {
                        ctx.fillStyle = "#add5e3";
                        ctx.fillRect(a * 50, that[height] - arr[a] * 3, 40, arr[a] * 3);
                    }

                    ctx.fillStyle = "#1b9ffc";
                    ctx.fillRect(b * 50, that[height] - arr[b] * 3, 40, arr[b] * 3);

                    if (a === 0) {
                        ctx.fillRect(a * 50, that[height] - arr[a] * 3, 40, arr[a] * 3);
                    }
                    
                    return that.handleStartBubbleSort(ctx, type, arr, ++i);
                }
            }, 1000 * (a + 1));
        })(j, j+1)
    }
}

CanvasSort.prototype.handleStartSelectionSort = function (ctx, type, arr, i) {
    var len = arr.length;
    var min = i;
    var height = type + 'Height';
    var that = this;
    ctx.fillStyle = "red";
    ctx.fillRect(i * 50, that[height] - arr[i] * 3, 40, arr[i] * 3);

    //console.log('第 ' +i+ ' 次')
    console.log(i);
    for (var j=i+1; j<len; j++) {
        (function(i, j) {
            setTimeout(function() {
                if (arr[j-1] > arr[min] && j-1 !== min) {// 清空上一个
                    //console.log('清空上一个', j, min, that[height] - arr[j] * 3, 40, arr[j] * 3)
                    ctx.fillStyle = "#add5e3";
                    ctx.fillRect((j-1) * 50, that[height] - arr[j-1] * 3, 40, arr[j-1] * 3);
                }

                ctx.fillStyle = '#24e278';
                ctx.fillRect((j) * 50, that[height] - arr[j] * 3, 40, arr[j] * 3);
                
                if (arr[min] > arr[j]) {
                    ctx.fillStyle = 'red';
                    ctx.fillRect(j * 50, that[height] - arr[j] * 3, 40, arr[j] * 3);

                    ctx.fillStyle = "#add5e3";
                    ctx.fillRect(min * 50, that[height] - arr[min] * 3, 40, arr[min] * 3);

                    min = j;
                }
        
                console.log('j', j);
                if (j+1 === len) {
                    return sleep(1000).then(() => {
                        console.log(min, i);
                        //ctx.fillStyle = '#add5e3';
                        //ctx.fillRect(j * 50, that[height] - arr[j] * 3, 40, arr[j] * 3);

                        //ctx.fillStyle = "#1b9ffc";
                        //ctx.fillRect(min * 50, that[height] - arr[min] * 3, 40, arr[min] * 3);

                        console.log('arr[i]', arr[i]);

                        return moveCoord(ctx, min * 50, that[height] - arr[min] * 3, 40, arr[min] * 3, "red", arr[i])
                        return sleep(1000).then(() => {
                            /* var temp = arr[min];
                            arr[min] = arr[i];
                            arr[i] = temp; */
                        })
                    }).then(() => sleep(1000)).then(() => {
                        //if (i < len-1) {
                            console.log('---------------------------------');
                            return 
                            //return that.handleStartSelectionSort(ctx, type, arr, ++i, min);
                    })
                }
            }, 1000 * (j+1))
        })(i, j)
    }

    return arr;
}

var raf;

function moveCoord(ctx, x, y, w, h, color, toX) {
    //console.log(ctx, x, y, w, h, color);
    ctx.clearRect(x, y, w, h);

    //ctx.fillStyle = color;
    //ctx.fillRect(x, y, w, h);

    x--;

    ctx.beginPath();
    //ctx.fillRect(x, y, w, h)
    ctx.closePath();
    ctx.fillStyle = color;
    //ctx.fill();

    //ctx.fillRect(x, y, w, h);
    //ctx.save();
    //ctx.translate(x, y);
    //ctx.fillStyle= color;
    //ctx.fillRect(x, y, w, h);
    //ctx.restore();

    if (x >= toX) {
        raf = requestAnimationFrame(this.moveCoord.bind(this, ctx, x, y, w, h, color, toX));
        //console.log(x, y, w, h, color, toX);

        //return window.cancelAnimationFrame(raf);
    } else {
        return window.cancelAnimationFrame(raf);
    }

    console.log('--------', x, y, w, h, color, toX);
    
    return 
}

/* function selectionSort(arr, i) {
    var len = arr.length;
    var min = i;

    for (var j=i; j<len-1; j++) {
        if (arr[min] > arr[j+1]) {
            min = j+1;
        }
    }

    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;

    if (i < len-1) {
        return selectionSort(arr, ++i);
    }

    return arr;
}

console.log(selectionSort([3, 50, 48, 20, 25, 9, 36, 8], 0)); */