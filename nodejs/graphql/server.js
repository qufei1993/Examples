const express = require('express');
const expressGraphql = require('express-graphql');
const app = express();

const schema = require('./schema');

const resolvers = {
	address: () => {
		return 'hello world!'
	},

	user: () => {
		return 'hello user!'
	}
}

app.use('/graphql', expressGraphql({
	schema,
	graphiql: true,
	root: resolvers,
}));

app.get('/', (req, res) => res.end('index'));

app.listen(8000, (err) => {
  if(err) {throw new Error(err);}
  console.log('*** server started ***');
});

// 注意，请求时 query 后面的参数要进行编码
// http://localhost:8000/graphql?query={ hello(name: "zs"),person(name: "li") {name,age}}
