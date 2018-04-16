const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5ad41b78e971d81a6851232d1';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => {
// 	console.log(e);
// });

var id = '5ad3806c32ef732cb49247f9';
User.findById(id).then((user) => {
	if(!user) {
		return console.log('Id not found');
	}
	console.log('User: ',user);
}).catch((e) => {
	console.log(e);
});

//user not found
//user found
//print error