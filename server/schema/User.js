const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection and schema for Registration
let User = new Schema({
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	user_name: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	}
},{
		collection: 'users'
});

module.exports = mongoose.model('users', User);
