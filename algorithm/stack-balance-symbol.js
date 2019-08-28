const Stack = require('./stack');
const detectionStr = '[]()'; // 定义需要检测的平衡符号，如何还有别的符号按照这种格式定义

function test(str) {
    let isTermination = false; // 是否终止，默认 false
    let stack = new Stack(20); // 初始化栈空间 {1}

    for (let i=0; i<str.length; i++) { // {2}
        const s = str[i];
        for (let d=0; d<detectionStr.length; d+=2) { // {3}
            const enStackStr = detectionStr[d]; // 入栈字符
            const deStackStr = detectionStr[d+1]; // 出栈字符

            switch (s) {
                case enStackStr : // 入栈 {3.1}
                    stack.enStack(s);
                    break;
                case deStackStr : // 出栈 {3.2}
                    if (stack.isEmpty()) {
                        isTermination = true
                    } else {
                        const currElement = stack.deStack();
                        if (!currElement.includes(enStackStr)) { 
                            isTermination = true
                        }
                    }
                    break;
            }

            if (isTermination) break;
        }

        if (isTermination) { // 存在不匹配符号，提前终止 {4}
            stack.enStack(s);
            break;
        }
    }

    if (stack.isEmpty()) { // {5}
        console.log('检测通过');
    } else {
        console.log('检测不通过，检测不通过符号：');
        stack.traversing()
    }

    return stack.isEmpty();
}

test('((()()[]])')
test('()()[])')
test('[()()[]')
test('()()][]')