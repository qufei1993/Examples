const {
  AuthorModel
} = require('./model');

(async () => {
  try {
    const res = await AuthorModel.aggregate([
      {
        $match: { authorId: 1 }
      },
      {
        $lookup: {
          from: 'books',
          localField: 'bookIds',
          foreignField: 'bookId',
          as: 'bookList',
        }
      },
      {
        $project: {
          '_id': 0,
          'authorId': 1,
          'name': 1,
          'bookList.bookId': 1,
          'bookList.name': 1
        }
      }
    ]);
    console.log(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
})();