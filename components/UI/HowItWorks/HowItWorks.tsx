'use client'

import React from "react";
import { Text, View } from "reshaped";
import GuideCard from "./GuideCard";

export default function HowItWorks() {
	return (
		<>
			<View paddingBottom={13} >
				<Text variant="title-3" color="neutral" align="center">How it works?</Text>
			</View>
			<View paddingBottom={20} direction="row" justify="center" divided wrap={false} >
				<GuideCard stepNumber={1} altText="Specify treatment using teeth diagram" imagePath='./specifyTreatmentUsingTD.svg' title="Specify treatment using teeth diagram" />
				<GuideCard stepNumber={2} altText="Select abutments" imagePath='./selectAbutments.svg' title="Select abutments" />
				<GuideCard stepNumber={3} altText="Order selected abutments" imagePath='./orderSelectedAbutments.svg' title="Order selected abutments" />
			</View>
		</>
	)
}