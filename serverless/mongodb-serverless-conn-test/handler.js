'use strict';
const db = require('./db');

module.exports.find = async (event, context) => {
  const response = {
    statusCode: 200,
  };

  try {
    const dbCollection = await db.initialize('study', 'books2');
    const body = await dbCollection.find().toArray();

    response.body = JSON.stringify({
      code: 0,
      message: 'SUCCESS',
      data: body,
    });

    return response;
  } catch (err) {
    response.body = JSON.stringify({
      code: err.code || 1000,
      message: err.message || '未知错误'
    });

    return response;
  }
};
