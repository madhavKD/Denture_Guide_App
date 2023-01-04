'use client'

import React from "react";
import Image from "next/image";
import { Card, Text, View, AspectRatio, Badge } from "reshaped";

type GuideCardProps = {
	imagePath: string; stepNumber: number; altText: string; title: string
}

export default function GuideCard({ imagePath, stepNumber, altText, title }: GuideCardProps) {
	return (
		<View.Item columns={4}>
			<View width={"100%"} direction="row" justify="center">
				<Badge.Container>
					<Badge size="small" color="primary" rounded >{stepNumber}</Badge>
					<Card padding={0} >
						<AspectRatio ratio={16 / 9} >
							<Image src={imagePath} alt={altText} height={112} width={170} />
						</AspectRatio>
					</Card>
					<View width={'100%'} direction="row" justify='center' paddingTop={2}>
						<Text align="start" attributes={{ style: { width: '150px' } }} variant="caption-1" color="neutral-faded">
							{title}
						</Text>
					</View>
				</Badge.Container>
			</View>
		</View.Item>
	)
}