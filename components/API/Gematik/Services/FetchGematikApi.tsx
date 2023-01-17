import converter from 'xml-js';

type FetcherOptions = {
	requestUrl: string
	soapAction: string
	xmlBody: string
};

type gematikResponse = {
	statusCode: number
	body: Promise<string>
}

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

			const options = {
				compact: true,
				textFn: function(value: string, parentElement: any) {
					try {
						const parentOfParent = parentElement._parent;
						const pOpKeys = Object.keys(parentElement._parent);
						const keyNo = pOpKeys.length;
						const keyName = pOpKeys[keyNo - 1];
						const arrOfKey = parentElement._parent[keyName];
						const arrOfKeyLen = arrOfKey.length;
						if (arrOfKeyLen > 0) {
							const arr = arrOfKey;
							const arrIndex = arrOfKey.length - 1;
							arr[arrIndex] = value;
						} else {
							parentElement._parent[keyName] = value;
						}
					} catch (e) {}
				},
				elementNameFn: function(elementName: string) {
					const regExp = /ns[0-9]+:/
					return elementName.replace(regExp,'');
				},
			};

			const json = JSON.parse(converter.xml2json(data, options));
			const body = json['S:Envelope']['S:Body'];

			// console.log(body);
			return body;

		})
		.catch(err => console.error(err));
}