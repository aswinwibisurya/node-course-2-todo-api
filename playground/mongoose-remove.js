const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(results);
// });

Todo.findByIdAndRemove('5ad77104b7ee327f77ecda49').then((todo) => {
	console.log(todo);
});

Todo.findOneAndRemove({
	_id: '5ad77104b7ee327f77ecda49'
}).then((todo) => {
	
});