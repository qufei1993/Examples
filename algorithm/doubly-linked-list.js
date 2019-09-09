const CircularJSON = require('circular-json');

class DoublyLinkedList {
    constructor() {
        this.node = function(element) {
            return {
                element,
                next: null, 
                prev: null, // 新增
            }
        };
    
        this.length = 0;
        this.head = null;
        this.tail = null; // 新增
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    getLength() {
        return this.length;
    }

    /**
     * 尾部插入
     */
    insertTail(e) {
        let node = this.node(e);
        let current;

        if (this.head === null) { // 列表中还没有元素
            this.head = node;
        } else {
            current = this.head;

            while (current.next) { // 下个节点存在
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    /**
     * 在任意位置插入元素
     * @param { Number } i 插入的元素位置
     * @param { * } e 插入的元素
     */
    insert(i, e) {
        if (i < 0 || i > this.length) {
            return false;
        }
        
        let node = this.node(e);
        let current = this.head;
        let previous;

        if (i === 0) { // 有修改
            if (current) {
                node.next = current;
                current.prev = node;
                this.head = node;
            } else {
                this.head = this.tail = node;
            }
        } else if (i === this.length) { // 新增加
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
        } else {
            for (let k=0; k<i; k++) {
                previous = current;
                current = current.next; // 保存当前节点的下一个节点
            }

            node.next = current;
            previous.next = node; // 注意，这块涉及到对象的引用关系

            current.prev = node; // 新增加
            node.prev = previous; // 新增加
        }

        this.length++;
        return true;
    }

    /**
     * 移除指定位置的元素
     * @param { Number} i 位置
     */
    delete(i) {
        // 要删除的元素位置不能超过链表的最后一位
        if (i < 0 || i >= this.length) {
            return false;
        }

        let current = this.head;
        let previous;

        if (i === 0) {
            this.head = current.next;

            if (this.length === 1) {
                this.tail = null; 
            } else {
                this.head.prev = null;
            }
        } else if (i === this.length -1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            for (let k=0; k<i; k++) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            current.next.prev = previous; // 新增加
        }

        this.length--;
        return current.element;
    }

    /**
     * 获取指定位置元素，类似于 delete 方法，可做参考
     */
    getElement(i) {
        // 要删除的元素位置不能超过链表的最后一位
        if (i < 0 || i >= this.length) {
            return false;
        }

        let current = this.head;
        let previous;

        for (let k=0; k<=i; k++) {
            previous = current
            current = current.next;
        }

        return previous.element;
    }

    /**
     * 返回链表中第 1 个与传入的元素相匹配的位置，否则返回 -1
     * @param {*} e 需要查找的元素
     */
    locateElement(e) {
        let current = this.head;
        let index = 0;

        while (current.next) { // 下个节点存在
            if (index === 0) {
                if (current.element === e) {
                    return index;
                }
            }

            current = current.next;
            index++;

            if (current.element === e) {
                return index;
            }
        }

        return -1;
    }

    /**
     * 获取链表指定元素的前驱
     * @param {*} e 元素 
     */
    priorElement(e) {
        let current = this.head;
        let previous;

        if (current.element === e) { // 第 0 个节点
            return false; // 没有前驱
        } else {
            while (current.next) { // 下个节点存在
                previous = current;
                current = current.next;

                if (current.element === e) {
                    return previous.element;
                }
            }
        }

        return false;
    }

    /**
     * 获取指定元素后继
     * @param {*} e 元素 
     */
    nextElement(e) {
        let current = this.head;

        while (current.next) { // 下个节点存在
            if (current.element === e) {
                return current.next.element;
            }

            current = current.next;
        }

        return false;
    }

    /**
     * 先找到头节点，如果头节点的 next 为 null，说明链表为空。
     * 如果不为空，就要依此寻找下限
     */
    clear() {
        /* let current = this.head.next;

        while (current) {
            let temp = current.next;
            current = null
            delete current;
            current = temp;
        }
        this.head.next = null; */

        this.head = null;
    }

    /**
     * 析构函数，清除内存
     * 先调用 clear()
     */
    destroy() {
        this.head = null;
    }

    traversing(){
        console.log(CircularJSON.stringify(this.head));
        let current = this.head,
        string = '';

        while (current) {
            string += current.element + ' ';
            current = current.next;
        }

        console.log(string);

        return string;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }
}

const list = new DoublyLinkedList();

list.insert(0, 'b');
list.insert(0, 'a');
list.insert(2, 'c');
list.insert(3, 'd');

list.traversing();

console.log(list.getLength());
console.log(CircularJSON.stringify(list.getHead()));
console.log(CircularJSON.stringify(list.getTail()));