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

export const getResourceInformationForContext = async (contextType: ContextType, requestUrl: string) => {
	const body = await getResourceInformation(contextType, requestUrl);
	const griRsp = body.GetResourceInformationResponse;

	console.info("GetResourceInformation");

	console.info("Mandate ID: " + contextType.mandantId);
	console.info("Client ID: " + contextType.clientSystemId);
	console.info("Workplace ID: " + contextType.workplaceId);

	console.info("SOAP Status: " + griRsp.Status.Result);
	console.info("Connector VPN TI Status: " + griRsp.Connector.VPNTIStatus.ConnectionStatus);
	console.info("Connector VPN TI Timestamp: " + griRsp.Connector.VPNTIStatus.Timestamp);
}

export default function FetchResourceInformation() {

	function blub() {
		const url = `${API_PROTOCOL}://${API_URL}:${API_PORT}`;

		console.log('url: ' + url)

		CheckConnection(url);

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