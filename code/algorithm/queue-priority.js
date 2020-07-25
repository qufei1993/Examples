function PriorityQueue(elements) {
    if (elements && !(elements instanceof Array)) {
        throw new Error('必须为数组格式！');
    }

    this.elements = elements || [];
}

PriorityQueue.prototype.enQueue = function(element, priority) {
    const queueElement = { element, priority };

    if (this.isEmpty()) {
        return this.elements.push(queueElement);
    }

    let added = false;
    for (let i=0; i < this.elements.length; i++) {
        if (priority < this.elements[i]['priority']) {
            added = true;
            this.elements.splice(i, 0, queueElement)
            break;
        }
    }

    if (!added) {
        this.elements.push(queueElement);
    }
}

PriorityQueue.prototype.deQueue = function() {
    return this.elements.shift();
}

PriorityQueue.prototype.isEmpty = function() {
    return this.elements.length === 0;
}

PriorityQueue.prototype.print = function() {
    console.log(this.elements.map(item => item.element).join(' | '));
}

const queue = new PriorityQueue();

queue.enQueue('普通会员1', 5);
queue.enQueue('普通会员2', 10);
queue.print()
queue.enQueue('VIP会员1', 3);
queue.print()
queue.enQueue('VIP会员2', 3);
queue.print()
queue.deQueue();
queue.print()