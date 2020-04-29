const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean
} = require('graphql');

const queryObj = new GraphQLObjectType({
	name: 'myFirstQuery',
	fields: {
		address: {
			name: 'a hello world query',
			type: GraphQLString,
			args: {
					name: {  // 这里定义参数，包括参数类型和默认值
							type: GraphQLString,
							//defaultValue: 'Brian'
					}
			},
			resolve(parentValue, args, request) { // 这里演示如何获取参数，以及处理
				console.log(args.name)
					return 'hello world ' + args.name + '!';
			}
		},
		user: {
			name: 'userQuery',
			description: 'query a user',
			type: new GraphQLObjectType({ // 这里定义查询结果包含 name, age, sex 三个字段，并且都是不同的类型。
				name: 'user',
				fields: {
					name: { type: GraphQLString },
					description: { type: GraphQLString },
					age: { type: GraphQLInt },
					sex: { type: GraphQLBoolean }
				}
			}),
			args: {
				name: {
					type: GraphQLString,
					defaultValue: 'Charming'
				}
			},
			resolve(parentValue, args, request) {
				console.log(parentValue);

				return {
					name: args.name,
					description: args.description,
					age: args.name.length,
					sex: Math.random() > 0.5
				};
			}
		}
	}
});

module.exports = new GraphQLSchema({
query: queryObj 
});