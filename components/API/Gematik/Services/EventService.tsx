import { fetchGematikApi } from './FetchGematikApi';
import { ContextType } from "../Interfaces/ContextType";

const eventServiceURL = 'eventservice';

const xmlBodyTemplate = (context: string) => {
	return `<?xml version="1.0" encoding="UTF-8"?>
		<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"
		    xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
		    <SOAP-ENV:Header />
		    <S:Body xmlns:ns10="http://ws.gematik.de/int/version/ProductInformation/v1.1"
		        xmlns:ns11="http://ws.gematik.de/conn/EventService/v7.2"
		        xmlns:ns12="urn:oasis:names:tc:SAML:1.0:assertion"
		        xmlns:ns2="http://ws.gematik.de/conn/CardService/v8.1"
		        xmlns:ns3="http://ws.gematik.de/conn/ConnectorCommon/v5.0"
		        xmlns:ns4="http://ws.gematik.de/conn/CardServiceCommon/v2.0"
		        xmlns:ns5="http://ws.gematik.de/tel/error/v2.0"
		        xmlns:ns6="http://ws.gematik.de/conn/ConnectorContext/v2.0"
		        xmlns:ns7="urn:oasis:names:tc:dss:1.0:core:schema"
		        xmlns:ns8="http://www.w3.org/2000/09/xmldsig#"
		        xmlns:ns9="http://ws.gematik.de/conn/CardTerminalInfo/v8.0">
		        ${context}
		    </S:Body>
		</S:Envelope>`;
};

export const getResourceInformation = (contextType: ContextType, baseUrl: string) => {

	const soapAction = "http://ws.gematik.de/conn/EventService/v7.2#GetResourceInformation";

	const context = `<ns11:GetResourceInformation>
		            <ns6:Context>
		                <ns3:MandantId>${contextType.mandantId}</ns3:MandantId>
		                <ns3:ClientSystemId>${contextType.clientSystemId}</ns3:ClientSystemId>
		                <ns3:WorkplaceId>${contextType.workplaceId}</ns3:WorkplaceId>
		            </ns6:Context>
		        </ns11:GetResourceInformation>`;

	return callGematikApi(baseUrl, soapAction, context);
}

export const subscribe = (contextType: ContextType, baseUrl: string) => {

	const soapAction = "http://ws.gematik.de/conn/EventService/v7.2#Subscribe";

	const context = `<ns11:Subscribe>
	            <ns6:Context>
	               <ns3:MandantId>${contextType.mandantId}</ns3:MandantId>
		             <ns3:ClientSystemId>${contextType.clientSystemId}</ns3:ClientSystemId>
		             <ns3:WorkplaceId>${contextType.workplaceId}</ns3:WorkplaceId>
	            </ns6:Context>
	            <ns11:Subscription>
	               <ns11:EventTo>cetp://127.0.0.1:9999</ns11:EventTo>
	               <ns11:Topic>CARD</ns11:Topic>
	            </ns11:Subscription>
	        </ns11:Subscribe>`;

	return callGematikApi(baseUrl, soapAction, context);
}

function callGematikApi(baseUrl: string, soapAction: string, context: string) {

	const requestUrl = `${baseUrl}/${eventServiceURL}`;

	const xmlBody = xmlBodyTemplate(context);

	return fetchGematikApi({requestUrl, soapAction, xmlBody});
}