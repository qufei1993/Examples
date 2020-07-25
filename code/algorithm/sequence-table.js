class SequenceTable {
    constructor (capacity) {
        if (!capacity) {
            throw new Error('The capacity field is required!');
        }

        this.capacity = capacity;
        this.list = new Array(capacity);
        this.length = 0; // 初始化顺序表元素长度
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    isOverflow() {
        return this.length === this.capacity;
    }

    getElement(i) {
        if (i < 0 || i > this.length) {
            return false;
        }

        return this.list[i];
    }

    locateElement(e) {
        for (let i=0; i<this.length; i++) {
            if (this.list[i] === e) {
                return i;
            }
        }

        return -1;
    }

    priorElement(e) {
        const i = this.locateElement(e);

        if (i === -1) {
            return false;
        }

        if (i === 0) { // 没有前驱
            return false;
        }

        return this.list[i - 1]; // 返回前驱（即前一个元素）
    }

    nextElement(e) {
        const i = this.locateElement(e);

        if (i === -1) {
            return false;
        }

        if (i === this.length - 1) { // 为最后一个元素，没有后继
            return false;
        }

        return this.list[i + 1]; // 返回后继（即后 一个元素）
    }

    listInsert(i, e) {
        if (i < 0 || i > this.length) {
            return false; // 不合法的 i 值
        }

        for (let k=this.length; k>=i; k--) { // 元素位置后移 1 位
            this.list[k + 1] = this.list[k];
        }

        this.list[i] = e;
        this.length++;

        return true;
    }

    listDelete(i) {
        if (i < 0 || i >= this.length) {
            return false; // 不合法的 i 值
        }

        const e = this.list[i];

        for (let j=i+1; j<this.length; j++) { // 元素位置前移 1 位
            this.list[j - 1] = this.list[j];
        }

        this.length--;

        return e;
    }

    clear() {
        this.length = 0;
    }

    destroy() {
        this.list = null;
    }

    traversing(){
        const arr = [];

        for (let i=0; i < this.length; i++) {
            arr.push(this.list[i])
        }

        console.log(arr.join('|'));
    }
}

const [e1, e2, e3, e4, e5] = [3, 6, 1, 8, 7];
const list = new SequenceTable(10);
list.listInsert(0, e1);
list.listInsert(1, e2);
list.listInsert(2, e3);
list.listInsert(3, e4);
list.listInsert(1, e5);
list.traversing();

console.log(list.priorElement(3) ? '有前驱' : '无前驱');
console.log(list.priorElement(6) ? '有前驱' : '无前驱');
console.log(list.nextElement(3) ? '有后继' : '无后继');
console.log(list.nextElement(8) ? '有后继' : '无后继');
console.log(list.getElement(0));

console.log(list.listDelete(1));
list.traversing();

list.clear();
list.traversing();