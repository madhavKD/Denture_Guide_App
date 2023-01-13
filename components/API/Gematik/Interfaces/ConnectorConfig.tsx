export interface ConnectorConfig {
	// Connection parameters
	connector_IP: string;
	cetpHost: string;

	// Port used by the CETP listener. Has to be available.
	// Note: if below 1025, root execution rights are required.
	cetpPort: number;
	connector_SDS: string;
	connector_TLS_SDS: string;
	eventTo_IP: string;

	// KoPS trust- and key store
	// keytool -import -keystore kops_truststore.jks -file puppetry-konnektor-tls.cer
	truststore_path?: string;
	truststore_pw?: string;
	client_certificate_keystore_path?: string;
	client_certificate_keystore_pw?: string;
}