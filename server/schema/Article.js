const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection and schema for Registration
let Article = new Schema({
	author: {
		type: String
	},
	title: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		required: true,
		default: 0,
	},
	month: {
		type: String,
		required: true,
	},
	volume: {
		type: String,
		required: true,
	},
	number: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	keywords: {
		type: String,
		required: true,
	},
	seMethod: {
		type: String,
		required: true,
	},
	seMethodology: {
		type: String,
		required: true,
	},
	researchQuestion: {
		type: String,
		required: true,
	},
	researchResult: {
		type: String,
		required: true,
	}
},{
		collection: 'articles'
});

module.exports = mongoose.model('articles', Article);
