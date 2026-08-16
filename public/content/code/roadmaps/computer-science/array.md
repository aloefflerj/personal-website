## Array

An _array_ is a collection of items that are stored **consecutively** in the memory.

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

It has a series of **memory locations** called **boxes**. For example, I can store 3 _integers_ of the size of 2 _bytes_ each in an array. See the `rust` code below:
```rs
let array: [i16; 3] = [1, 2, 3];
// i16 represents an integer of 8 bytes size
```

Each item will occupy a box of 2 _bytes_:

```md
[+][+][+][+][+][+][-][-][-]
[-][-][-][-][-][-][-][-][-]
```

![code-guy-explaining2](https://github.com/aloefflerj/roadmaps/assets/51006938/b51da748-8b5a-4ff5-bfbb-bbef48ba1de3)

Every item in the array **must be of the same type**.

![code-guy-explaining3](https://github.com/aloefflerj/roadmaps/assets/51006938/3e1d7f6f-886e-43ba-be67-0642a00700c9)

Arrays offer a simple and efficient way to store and access data. The capacity of an array is defined when it is created and can't be changed after that. Languages ​​that offer dynamically sized arrays are actually building logic on top of the array data structure.

![code-guy-explaining](https://github.com/aloefflerj/roadmaps/assets/51006938/d4300ff4-65c4-410c-b133-27578f79f942)

Arrays are often used due to it's simplicity and performance. They allow direct access to data by accessing an index.

![code-guy-explaining2](https://github.com/aloefflerj/roadmaps/assets/51006938/b51da748-8b5a-4ff5-bfbb-bbef48ba1de3)

By storing elements of the same type consecutively in memory locations, arrays can take full advantage of spatial locality in caching. Also, if the size of an array is known, many operations like adding, updating or removing are much faster to implement.