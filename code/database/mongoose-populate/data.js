
// const {
//   AuthorModel
// } = require('./model');

// // 插入数据
// const bookList = [
//   {
//     bookId: 26351021,
//     name: '你不知道的JavaScript（上卷）'
//   },
//   {
//     bookId: 26854244,
//     name: '你不知道的JavaScript（中卷）'
//   },
//   {
//     bookId: 27620408,
//     name: '你不知道的JavaScript（下卷）'
//   }
// ];

// const authorList = [
//   {
//     authorId: 1,
//     name: 'Kyle Simpson',
//     bookIds: [
//       26351021,
//       26854244,
//       27620408
//     ]
//   }
// ]

// // const res = await BookModel.find();
// // console.log('find', res);

// bookList.forEach(async item => {
//   try {
//     const res = await BookModel.create(item);
//     console.log('res', res);
//   } catch (err) {
//     console.log('err:', err.message);
//   }
// })

// authorList.forEach(async item => {
//   try {
//     const res = await AuthorModel.create(item);
//     console.log('res', res);
//   } catch (err) {
//     console.log('err:', err.message);
//   }
// })