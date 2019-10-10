import React, { Component } from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.fromYear = 0;
		this.state = {
			form : {
				searchTerm: "",
				category: "",
				composites: [
				],
				fromYear: "",
				toYear: "",
				interval: ""
			},
			articles: {
				columns:[
					{
						label: "Title",
						field: "title",
						sort: "asc"
					},
					{
						label: "Year",
						field: "year",
						sort: "asc"
					},
					{
						label: "Author",
						field: "author",
						sort: "asc"
					},
					{
						label: "Volume",
						field: "volume"
					},
					{
						label: "Month",
						field: "month"
					},
					{
						label: "Number",
						field: "number"
					},
					{
						label: "SE Method",
						field: "seMethod"
					},
					{
						label: "External Link",
						field: "url"
					},
					{
						label: "SE Methodology",
						field: "seMethodology"
					},
					{
						label: "Research Question",
						field: "researchQuestion"
					},
					{
						label: "Research Result",
						field: "researchResult"
					}
				],
				rows: [

				]
			}
		}
	}

	getSearchResults(values) {
		console.info(values)
		axios.post('/api/books', values)
        .then(res => {
        	console.log();
        	let data = [];
        	res.data.map(article => {
        		data.push({
        			title: article.title,
        			year: article.year,
        			author: article.author,
					volume: article.volume,
					month: article.month,
        			number: article.number,
					seMethod: article.seMethod,
					url: article.url,
        			seMethodology: article.seMethodology,
        			researchQuestion: article.researchQuestion,
        			researchResult: article.researchResult
        		});
        	});
        	this.setState(prevState => ({
				articles: {                   // object that we want to update
				    ...prevState.articles,    // keep all other key-value pairs
				    rows: data       // update the value of specific key
				}
			}))
        });
	}

	render() {

		return (<div>
					<Formik
					initialValues={this.state.form}
					validationSchema={Yup.object({
						searchTerm: Yup.string().required('Required'),
						category: Yup.string().required("Required"),
						composites: Yup.array().of(Yup.object({
							searchTerm: Yup.string().required('Required'),
							category: Yup.string().required("Required"),
							operator: Yup.string().required("Required"),
						})),
						fromYear: Yup.string().matches(/^[0-9]{4}$/, 'Must be a valid year'),
						toYear: Yup.string().matches(/^[0-9]{4}$/, 'Must be a valid year')
								.when("fromYear", (fromYear, schema) => {
									this.fromYear = +fromYear;
									return schema;
								})
								.test("till-year", "Should not be less than From Year",value => {
									if (!value) {
										return true;
									}
									return +value >= this.fromYear
								})
					})}
					onSubmit={values => {
						this.getSearchResults(values);
					}}
					>
					{({ values, isSubmitting }) => (
						<Form>
							<FieldArray name="composites">
								{({push, remove}) =>
									<React.Fragment>
										<div className="container">
											<div className="row">
												<div className="col-sm-12">
													<h1 className="text-center">Advanced Search</h1>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-12">
													<div className="search-block">
														<h4><strong>Enter keywords, select fields, and select operators</strong></h4>
														<div className="row">
															<div className="col-xs-12 col-md-2">
																
															</div>
															<div className="col-sm-5">
																<div className="form-group">
																	<Field name={`searchTerm`}>
																		{({field, form}) => (
																			<input {...field} type="text" placeholder="Search Term" className="form-control" />
																		)}
																	</Field>
																	<ErrorMessage name={`searchTerm`}>
																		{msg => <div className="errors">{msg}</div>}
																	</ErrorMessage>
																</div>
															</div>
															<div className="col-sm-5">
																<div className="media">
																	<div className="media-left media-top">
																		<p className="in-sec">In</p>
																	</div>
																	<div className="media-body">
																	<div className="form-group">
																		<Field name={`category`} component="select" placeholder="And" className="form-control">
																			<option value="">Please select Search Field</option>
																			<option value="keywords">Keywords</option>
																			<option value="title">Document Title</option>
																			<option value="author">Authors</option>
																			<option value="seMethod">SE Method</option>
																			<option value="seMethodology">Methodlogy</option>
																			<option value="researchQuestion">Research Question</option>
																			<option value="researchResult">Research Result</option>
																		</Field>
																		<ErrorMessage name={`category`}>
																			{msg => <div className="errors">{msg}</div>}
																		</ErrorMessage>
																	</div>
																	</div>
																	<a className="media-right media-top add-remove" >
																		<button type="button" 
																		className="btn btn-success"
																		onClick={() => push({ searchTerm: "", operator: "", category: "" })}
																		>&#43;</button>
																	</a>
																</div>
															</div>
														</div>
														{ values.composites.map((searchTerm, index) => 
															<div className="row" key={index}>
																<div className="col-xs-12 col-md-2">
																	<div className="form-group">
																		<Field name={`composites[${index}].operator`} component="select" placeholder="And" className="form-control">
																			<option value="">Please select filter type</option>
																			<option value="and">And</option>
																			<option value="or">Or</option>
																			<option value="not">Not</option>
																		</Field>
																	</div>
																	<ErrorMessage name={`composites[${index}].operator`}>
																		{msg => <div className="errors">{msg}</div>}
																	</ErrorMessage>
																</div>
																<div className="col-sm-5">
																	<div className="form-group">
																		<Field name={`composites[${index}].searchTerm`}>
																			{({field, form}) => (
																				<input {...field} type="text" placeholder="Search Term" className="form-control" />
																			)}
																		</Field>
																		<ErrorMessage name={`composites[${index}].searchTerm`}>
																			{msg => <div className="errors">{msg}</div>}
																		</ErrorMessage>
																	</div>
																</div>
																<div className="col-sm-5">
																	<div className="media">
																		<div className="media-left media-top">
																			<p className="in-sec">In</p>
																		</div>
																		<div className="media-body">
																		<div className="form-group">
																			<Field name={`composites[${index}].category`} component="select" placeholder="And" className="form-control">
																				<option value="">Please select Search Field</option>
																				<option value="keywords">Keywords</option>
																				<option value="title">Document Title</option>
																				<option value="author">Authors</option>
																				<option value="seMethod">SE Method</option>
																				<option value="seMethodology">Methodlogy</option>
																				<option value="researchQuestion">Research Question</option>
																				<option value="researchResult">Research Result</option>
																			</Field>
																			<ErrorMessage name={`composites[${index}].category`}>
																				{msg => <div className="errors">{msg}</div>}
																			</ErrorMessage>
																		</div>
																		</div>
																		<a className="media-right media-top add-remove" >
																			<button type="button" 
																			className="btn btn-success"
																			onClick={() => push({ searchTerm: "", operator: "", category: "" })}
																			>&#43;</button>
																		</a>
																		<a className="media-right media-top add-remove" >
																			<button className="btn btn-default"
																			onClick={() => remove(index)}
																			>&#215;</button>
																		</a>
																	</div>
																</div>
															</div>
														)}
														<div className="row">
															<div className="col-xs-12">
																<h3>Filter Year</h3>
															</div>
															<div className="form-group col-xs-12 col-md-3">
																<Field name={`fromYear`}>
																	{({field, form}) => (
																		<input {...field} type="number" placeholder="From" className="form-control" />
																	)}
																</Field>
																<ErrorMessage name={`fromYear`}>
																	{msg => <div className="errors">{ JSON.stringify(msg) }</div>}
																</ErrorMessage>
															</div>
															<div className="form-group col-xs-12 col-md-3">
																<Field name={`toYear`}>
																	{({field, form}) => (
																		<input {...field} type="number" placeholder="Till" className="form-control" />
																	)}
																</Field>
																<ErrorMessage name={`toYear`}>
																	{msg => <div className="errors">{msg}</div>}
																</ErrorMessage>
															</div>
															<div className="col-xs-12">
																<Field name={`interval`}>
																	{({field, form}) => (
																		<label>
																			<input {...field} type="radio" name="interval" className="mg-rt-5" placeholder="Till" value="5" />
																			 Last Five Years articles
																		</label>
																	)}
																</Field>
															</div>
															<div className="col-xs-12">
																<Field name={`interval`}>
																	{({field, form}) => (
																		<label>
																			<input {...field} type="radio" name="interval" className="mg-rt-5" placeholder="Till" value="10" />
																			 Last Ten Years articles
																		</label>
																	)}
																</Field>
																
															</div>
														</div>
														<button type="submit" className="btn btn-primary">Search</button>
													</div>
												</div>
											</div>

										</div>
									</React.Fragment>
								}
							</FieldArray>
						</Form>
					)}
					</Formik>
					<div className="container">
						<div className="results-wrapper">
							<div className="row">
								<div className="col-xs-12">
									<MDBDataTable
									striped
									bordered
									hover
									noBottomColumns
									responsive={true}
									sortable={true}
									noRecordsFoundLabel="No articles found"
									data={this.state.articles}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			);

	}
}

	