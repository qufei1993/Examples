function QueueStudy(elements) {
    if (elements && !(elements instanceof Array)) {
        throw new Error('必须为数组格式！');
    }

    this.elements = elements || [];
}

QueueStudy.prototype.enQueue = function(element) {
    this.elements.push(element);
}

QueueStudy.prototype.deQueue = function() {
    return this.elements.shift();
}

QueueStudy.prototype.isEmpty = function() {
    return this.elements.length === 0;
}

QueueStudy.prototype.print = function() {
    console.log(this.elements.toString());
}

//const queue = new QueueStudy();
const queue = new QueueStudy(['a', 'b']);

queue.print()
queue.enQueue('c');
queue.print()
queue.deQueue();
queue.print()
