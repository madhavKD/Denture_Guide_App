import { parseXMLtoJSON } from "../Tools/Tools";

type FetcherOptions = {
	requestUrl: string
	soapAction: string
	xmlBody: string
};

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
		.then(function(response) {
			return response.text();
		})
		.then(function(data) {
			const json = parseXMLtoJSON(data);

			return json['S:Envelope']['S:Body'];
		})
		.catch(err => console.error(err));
}