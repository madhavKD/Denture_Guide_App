import converter from 'xml-js';
import { ungzip } from 'pako';

export function parseXMLtoJSON(data: string) {
	const options = {
		compact: true,
		textFn: function (value: string, parentElement: any) {
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
			} catch (e) {
			}
		},
		elementNameFn: function (elementName: string) {
			const regExp = /ns[0-9]+:/
			return elementName.replace(regExp, '');
		},
	};

	return JSON.parse(converter.xml2json(data, options));
}

export function decompressZippedByteArray(zippedByteArr: string) {
	const gzipedData = Buffer.from(zippedByteArr, 'base64');
	const ungzipedData = ungzip(gzipedData);

	const decodedData = new TextDecoder('ISO-8859-15').decode(ungzipedData);

	return parseXMLtoJSON(decodedData);
}

