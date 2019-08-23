const Init = Symbol('QueueStudy#Init');

class QueueStudy {
    constructor (capacity) {
        if (!capacity) {
            throw new Error('The capacity field is required!');
        }

        this.capacity = capacity; // 初始化容量
        this[Init]();
    }

    /**
     * 清空队列，内存保留
     */
    clear() {
        this[Init]()
    }

    [Init]() {
        this.queue = new Array(this.capacity); // 初始化队列内存空间
        this.queueLen = 0; // 初始化队列元素
        this.head = 0; // 队头
        this.tail = 0; // 尾部
    }

    /**
     * 队列是否为空
     */
    isEmpty() {
        return this.queueLen === 0 ? true : false;
    }

    /**
     * 对列是否溢出
     */
    isOverflow() {
        return this.queueLen === this.capacity
    }

    /**
     * 入队
     */
    enQueue(element) {
        if (this.isOverflow()) {
            return false;
        }

        this.queue[this.tail] = element;
        this.tail++;
        this.tail = this.tail % this.capacity;
        this.queueLen++;
        return true;
        /**
         * tail 0 = a; tail++ = 1
         * tail 1 = b; tail++ = 2
         * tail 2 = c; tail++ = 3
         * tail 3 = d; tail++ = 4
         * tail 4 = e; tail++ = 5
         * tail 5 = f; tail++ = 0
         */
    }

    /**
     * 出队
     */
    deQueue() {
        if (this.isEmpty()) {
            throw new Error('队列为空');
        } else {
            const element = this.queue[this.head];
            this.head++; // 队头位置移动
            this.head = this.head % this.capacity;
            this.queueLen--;
            return element;
            /**
             * head 0 = a; head++ = 1;
             */
        }
    }

    /**
     * 队列长度
     */
    len() {
        return this.queueLen;
    }

    /**
     * 销毁队列，内存回收
     */
    destroy() {
        this.queue = null;
    }

    /**
     * 队列元素遍历
     */
    traversing() {
        console.log('------------traversing start------------');
        
        for (let i=this.head; i<this.queueLen + this.head; i++) {
            console.log(this.queue[i % this.capacity]);
        }
        console.log('------------traversing end------------\n');
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }
}

const q1 = new QueueStudy(6);

q1.enQueue('a');
q1.traversing();
q1.enQueue('b');
q1.enQueue('c');
q1.enQueue('d');
q1.enQueue('e');
q1.enQueue('f');
q1.traversing();
console.log('出队: ', q1.deQueue());
q1.enQueue('g');
q1.traversing();
console.log('出队: ', q1.deQueue());
console.log('出队: ', q1.deQueue());
q1.enQueue('h');
console.log('出队: ', q1.deQueue());
console.log('出队: ', q1.deQueue());
console.log('出队: ', q1.deQueue());
q1.traversing();
q1.clear();
q1.traversing();