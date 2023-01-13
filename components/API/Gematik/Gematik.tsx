import { ContextType } from './Interfaces/ContextType';
import { getResourceInformation } from './Services/EventService'
import {fetchGematikApi} from "./Services/FetchGematikApi";

const API_PROTOCOL = 'http';
const API_URL = '0.0.0.0';
const API_PORT = 80;

function CheckConnection(requestUrl: string) {

	const contextType: ContextType = {
		mandantId: "Mandant1",
		clientSystemId: "ClientID1",
		workplaceId: "Workplace1",
	}

	try {
		return getResourceInformationForContext(contextType, requestUrl);
	} catch (error) {
		console.error("Error while checking connection", error);
	}
}

export const getResourceInformationForContext = (contextType: ContextType, requestUrl: string) => {
	const griRsp = getResourceInformation(contextType, requestUrl)

	console.info("GetResourceInformation");

	console.info("Mandate ID: " + contextType.mandantId);
	console.info("Client ID: " + contextType.clientSystemId);
	console.info("Workplace ID: " + contextType.workplaceId);

	return griRsp;
	// console.info("SOAP Status: " + griRsp.getStatus().getResult());
	// console.info("Connector VPN TI Status: " + griRsp.getConnector().getVPNTIStatus().getConnectionStatus());
	// console.info("Connector VPN TI Timestamp: " + griRsp.getConnector().getVPNTIStatus().getTimestamp());
}

export default function FetchResourceInformation() {

	// function blub() {
	// 	CheckConnection(`${API_PROTOCOL}://${API_URL}:${API_PORT}`);
	//
	// 		return (
	// 			<p>blub</p>
	// 		)
	// }

	function blub() {

		const contextType: ContextType = {
			mandantId: "Mandant1",
			clientSystemId: "ClientID1",
			workplaceId: "Workplace1",
		}

		const requestUrl = `${API_PROTOCOL}://${API_URL}:${API_PORT}/eventservice`;

		const soapAction = "http://ws.gematik.de/conn/EventService/v7.2#GetResourceInformation";

		const xmlBody = `<?xml version="1.0" encoding="UTF-8"?>
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
		        <ns11:GetResourceInformation>
		            <ns6:Context>
		                <ns3:MandantId>${contextType.mandantId}</ns3:MandantId>
		                <ns3:ClientSystemId>${contextType.clientSystemId}</ns3:ClientSystemId>
		                <ns3:WorkplaceId>${contextType.workplaceId}</ns3:WorkplaceId>
		            </ns6:Context>
		        </ns11:GetResourceInformation>
		    </S:Body>
		</S:Envelope>`;

	const options = {
		method: 'POST',
		headers: {
		'Content-Type': 'text/xml; charset=utf-8',
		'SOAPAction': soapAction,
		},
		body: xmlBody
	}

	const blub = fetch(requestUrl!, options)
		.then(response => {return response})
		.catch(err => console.error(err));

		return (
			<p>blub</p>
		)
	}

	return (
		<div>
			{blub()}
		</div>
	)
}