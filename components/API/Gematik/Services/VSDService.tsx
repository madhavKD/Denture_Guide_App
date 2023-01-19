import { ContextType } from "../Interfaces/ContextType";
import { fetchGematikApi } from "./FetchGematikApi";

const vsdServiceURL = 'vsdservice';

const xmlBodyTemplate = (context: string) => {
	return `<?xml version="1.0" encoding="UTF-8"?>
		<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"
			xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
				<SOAP-ENV:Header />
			<S:Body xmlns:ns2="urn:oasis:names:tc:dss:1.0:core:schema"
				xmlns:ns3="http://www.w3.org/2000/09/xmldsig#"
				xmlns:ns4="http://ws.gematik.de/conn/ConnectorCommon/v5.0"
				xmlns:ns5="http://ws.gematik.de/tel/error/v2.0"
				xmlns:ns6="http://ws.gematik.de/conn/vsds/VSDService/v5.2"
				xmlns:ns7="http://ws.gematik.de/conn/ConnectorContext/v2.0"
				xmlns:ns8="urn:oasis:names:tc:SAML:1.0:assertion">
				${context}
			</S:Body>
		</S:Envelope>`;
};

export const readVSD = (ehcCardHandle: string, smcbCardHandle: string, performOnlineCheck: boolean = false, contextType: ContextType,  baseUrl: string) => {

	const soapAction = "http://ws.gematik.de/conn/vsds/VSDService/v6.0#ReadVSD";

	const context = `<ns6:ReadVSD>
								<ns6:EhcHandle>${ehcCardHandle}</ns6:EhcHandle>
								<ns6:HpcHandle>${smcbCardHandle}</ns6:HpcHandle>
								<ns6:PerformOnlineCheck>${performOnlineCheck}</ns6:PerformOnlineCheck>
								<ns6:ReadOnlineReceipt>true</ns6:ReadOnlineReceipt>
								<ns7:Context>
									<ns4:MandantId>${contextType.mandantId}</ns4:MandantId>
									<ns4:ClientSystemId>${contextType.clientSystemId}</ns4:ClientSystemId>
									<ns4:WorkplaceId>${contextType.workplaceId}</ns4:WorkplaceId>
								</ns7:Context>
							</ns6:ReadVSD>`;

	return callGematikApi(baseUrl, soapAction, context);
};

function callGematikApi(baseUrl: string, soapAction: string, context: string) {

	const requestUrl = `${baseUrl}/${vsdServiceURL}`;

	const xmlBody = xmlBodyTemplate(context);

	return fetchGematikApi({requestUrl, soapAction, xmlBody});
}
