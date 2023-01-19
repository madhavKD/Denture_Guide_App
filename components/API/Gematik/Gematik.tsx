import { ContextType } from './Interfaces/ContextType';
import {getCards, getResourceInformation, subscribe} from './Services/EventService'

const API_PROTOCOL = 'http';
const API_URL = '0.0.0.0';
const API_PORT = 80;

let smcbCardHandle: string;
let ehcCardHandle: string;
let ctID: string;

enum CardTypeType {
	EGK = 'EGK',
	HBA_Q_SIG = 'HBA-qSig',
	HBA = 'HBA',
	SMC_B = 'SMC-B',
	HSM_B = 'HSM-B',
	SMC_KT = 'SMC-KT',
	KVK = 'KVK',
	ZOD_2_0 = 'ZOD_2.0',
	UNKNOWN = 'UNKNOWN',
	HB_AX = 'HBAx',
	SM_B = 'SM-B'
};

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
	console.info("--------------------------");

	console.info("1. STEP");
	console.info("GetResourceInformation");

	let body = await getResourceInformation(contextType, requestUrl);
	const griRsp = body.GetResourceInformationResponse;

	console.info("Mandate ID: " + contextType.mandantId);
	console.info("Client ID: " + contextType.clientSystemId);
	console.info("Workplace ID: " + contextType.workplaceId);

	console.info("SOAP Status: " + griRsp.Status.Result);
	console.info("Connector VPN TI Status: " + griRsp.Connector.VPNTIStatus.ConnectionStatus);
	console.info("Connector VPN TI Timestamp: " + griRsp.Connector.VPNTIStatus.Timestamp);

	console.info("--------------------------");

	console.info("2. STEP");
	console.info("SubscribeResponse");

	body = await subscribe(contextType, requestUrl);
	const scRsp = body.SubscribeResponse;

	console.info("SOAP Status: " + scRsp.Status.Result);
	console.info("Subscription ID: " + scRsp.SubscriptionID);
	console.info("Termination Time: " + scRsp.TerminationTime);

	console.info("--------------------------");

	console.info("3. STEP");
	console.info("GetCardsResponse");

	body = await getCards(contextType, requestUrl);
	const gcRsp = body.GetCardsResponse;

	console.info("SOAP Status: " + gcRsp.Status.Result);

	gcRsp.Cards.Card.forEach((currCard: { CardType: CardTypeType; CardHolderName: string; CardHandle: string; CtId: string; })  => {
		console.debug("\tCard type: " + currCard.CardType);
		console.debug("\tCard holder: " + currCard.CardHolderName);
		console.debug("\tCard handle: " + currCard.CardHandle);

		if (currCard.CardType == CardTypeType.SMC_B) {
			console.debug(`\tStoring '${currCard.CardHolderName}' SMC-B card handle for future use...`);
			smcbCardHandle = currCard.CardHandle;
			ctID = currCard.CtId;
		}
		if (currCard.CardType == CardTypeType.EGK || currCard.CardType == CardTypeType.KVK) {
			console.debug(`\tStoring '${currCard.CardHolderName}' EHC card handle for future use...`);
			ehcCardHandle = currCard.CardHandle;
		}
	})

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