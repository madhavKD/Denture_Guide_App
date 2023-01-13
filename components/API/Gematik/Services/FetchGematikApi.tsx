import {string} from "prop-types";
import {response} from "express";

type FetcherOptions = {
	requestUrl: string
	soapAction: string
	xmlBody: string
};

type FetcherResults<T> = {
	data: T
};

// export const fetchGematikApi = async ({requestUrl, soapAction, xmlBody}: FetcherOptions) => {
//
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'text/xml; charset=utf-8',
// 			'SOAPAction': soapAction,
// 		},
// 		body: xmlBody
// 	}
//
// 	const res = fetch(requestUrl!, options)
//
// 	const { data, errors} = await res.json()
//
// 	if (errors) {
// 		// if errors.message null or undefined returns the custom error
// 		throw new Error(errors.message ?? 'Custom Error' )
// 	}
//
// 	return { data };
// }

export function fetchGematikApi ({requestUrl, soapAction, xmlBody}: FetcherOptions) {

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'text/xml; charset=utf-8',
			'SOAPAction': soapAction,
		},
		body: xmlBody
	}

	return fetch(requestUrl!, options)
		.then(response => console.log(response))
		.catch(err => console.error(err));
}
