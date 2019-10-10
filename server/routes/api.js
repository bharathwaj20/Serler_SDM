const express = require('express');
const routes = express.Router();
let Article = require('../schema/Article');

const getRegex = (val) => {
	return { $regex : '.*' + val + '.*', $options: 'i'};
	// return new RegExp('^'+val+'$', "i");
};

const getYears = (val) => {
	let currentYear = new Date().getFullYear();
	let years = [];
	console.info(currentYear);
	for (var i = 0; i < val; i++) {
		years.push(currentYear-i);
	}
	console.info(years);
	return years;
};

routes.route("/books").post(function (req, res) {

	let tempQuery = {};
	tempQuery[req.body.category] = getRegex(req.body.searchTerm);

	let query = Article.find().or(tempQuery);

	if (req.body.composites && req.body.composites.length) {

		req.body.composites.map((composite) => {
			tempQuery = {};
			if (composite.operator == "or") {
				tempQuery[composite.category] = getRegex(composite.searchTerm);
				query.or(tempQuery)
			}

			if (composite.operator == "and") {
				tempQuery[composite.category] = getRegex(composite.searchTerm);
				query.and(tempQuery)
			}

			if (composite.operator == "not") {
				tempQuery[composite.category] = getRegex(composite.searchTerm);
				query.not(tempQuery)
			}
		});
	}

	if (req.body.interval && req.body.interval != "") {
		tempQuery = {};
		tempQuery["year"] = { $in : getYears(+req.body.interval) }
		query.and(tempQuery);
	} else {
		if(req.body.fromYear && req.body.fromYear != "") {
			tempQuery = {};
			tempQuery["year"] = { $gte : +req.body.fromYear };
			query.and(tempQuery);
		}

		if(req.body.toYear && req.body.toYear != "") {
			tempQuery = {};
			tempQuery["year"] = { $lte : +req.body.toYear };
			query.and(tempQuery);
		}
	}

	query.then(articles => { 
		return res.send(articles);
	})
    .catch(error => { 
		return res.send({message : "error"});
    });
});

module.exports = routes;
