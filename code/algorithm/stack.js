class StackStudy {
    constructor(capacity) {
        if (!capacity) {
            throw new Error('The capacity field is required!');
        }

        this.capacity = capacity;
        this.stack = new Array(capacity);
        this.top = 0; // 初始化栈顶为 0 
    }

    isEmpty() {
        return this.top === 0 ? true : false;
    }

    isOverflow() {
        return this.top === this.capacity;
    }

    /**
     * 入栈
     * @param { * } element 入栈元素
     */
    enStack(element) {
        if (this.isOverflow()) {
            throw new Error('栈已满');
        }

        this.stack[this.top] = element;
        this.top++;
    }

    deStack() {
        if (this.isEmpty()) {
            throw new Error('栈已为空');
        }

        this.top--;
        return this.stack[this.top];
    }

    len() {
        return this.top;
    }

    clear() {
        this.top = 0;
    }

    destroy() {
        this.stack = null;
    }

    traversing(isBottom = false){
        const arr = [];

        if (isBottom) {
            for (let i=0; i < this.top; i++) {
                arr.push(this.stack[i])
            }
        } else {
            for (let i=this.top-1; i >= 0; i--) {
                arr.push(this.stack[i])
            }
        }

        console.log(arr.join(' | '));
    }
}

module.exports = StackStudy;

/* const s1 = new StackStudy(4);

s1.enStack('Nodejs');
s1.enStack('技');
s1.enStack('术');
s1.enStack('栈');
s1.traversing()
console.log(s1.deStack());
s1.traversing()
s1.traversing(true)
 */
