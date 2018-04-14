//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5ad23736b7ee327f77ec89d1')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5ad24edcb7ee327f77ec8c09')
	}, {
		$set: {
			name: 'Aswin Wibisurya'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	db.close();
});
