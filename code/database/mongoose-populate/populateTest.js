const { AuthorModel } = require('./model');
(async () => {
  try {
    // const res = await AuthorModel.findOne({ authorId: 1 })
    //   .populate({
    //     path: 'bookList',
    //     select: 'bookId name -_id'
    //   });
    // console.log(JSON.stringify(res));

    const res = await AuthorModel.findOne({ authorId: 1 }).populate('bookListCount');
    console.log(res.bookListCount);
  } catch (err) {
    console.log(err);
  }
})();