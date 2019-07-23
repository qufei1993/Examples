# Canvas 图解十大排序

## 冒泡排序

冒泡排序相对来说是一种较为简单的排序算法，它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。

#### Canvas动图展示


#### 工作原理

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数（从时间复杂度上可以进行优化）。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

#### JavaScript 实现

采用 for 循环加递归实现，在 Canvas 实现动态形式展示核心也是基于这种方法来实现的。

```js
function bubbleSort(arr, i) {
    var len = arr.length;
    
    for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
        if (j + 1 === len - 1 - i) {
            return bubbleSort(arr, ++i);
        }
    }
}
```

* 参考维基百科 [冒泡排序](https://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F)

## 选择排序

**选择排序**（Selection sort）是一种简单直观的排序算法。

#### Canvas动图展示

#### 工作原理

1. 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 然后，再从剩余未排序元素中继续寻找最小（大）元素
3. 然后放到已排序序列的末尾。
4. 以此类推，直到所有元素均排序完毕。

#### JavaScript 实现

* 参考维基百科 [选择排序](https://zh.wikipedia.org/wiki/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F)


## Reference

* [数据结构与算法/leetcode/lintcode题解](https://algorithm.yuanbin.me/zh-hans/)
* [JavaScript 算法与数据结构](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)
* [在 JavaScript 中学习数据结构与算法](https://juejin.im/post/594dfe795188250d725a220a)
* [用HTML5实现的各种排序算法的动画比较](http://www.webhek.com/post/comparison-sort.html)