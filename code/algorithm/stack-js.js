function StackStudy(elements) {
    this.elements = elements || [];
}

StackStudy.prototype.enStack = function(element) {
    this.elements.push(element);
}

StackStudy.prototype.deStack = function() {
    return this.elements.pop();
}

StackStudy.prototype.print = function() {
    console.log(this.elements.toString());
}

const stack = new StackStudy(['a', 'b']);

stack.enStack('c');
stack.print()
stack.deStack('c');
stack.print();