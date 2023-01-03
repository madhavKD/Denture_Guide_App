'use client';

import React from "react";
import { ActionBar, Image, View, Text, Avatar } from "reshaped";

export default function Header() {
	return (
		<ActionBar position="top" attributes={{ role: 'toolbar' }}>
			<View direction='row' >
				<View.Item columns={6}>
					<View direction='row' justify='start' gap={2}>
						<View height='40px' width="40px" align='center' justify='center'>
							<Image src="./dechea.svg" alt="dechea logo" />
						</View>
						
						<View direction='column'>
							<View.Item>
								<Text variant="body-strong-1" color="neutral-faded">Prosthetic selection guide</Text>
							</View.Item>
							<View.Item>
								<Text color="disabled" variant="caption-2">by Dechea</Text>
							</View.Item>
						</View>
					</View>
				</View.Item>

				<View.Item columns={6}>
					<View direction='row' justify='end' align='center' height='40px' divided gap={6}>
						<View direction='row' height='inherit'>
							<View direction='row' gap={2} align="center" height="100%">
								<Image src="./cart.svg" alt="Orders" />
								<Text variant="body-strong-1" color="neutral-faded">Order</Text>

								<View.Item gapBefore={3}>
									<View backgroundColor="primary-faded" height="24px" width="24px" borderRadius="large" justify='center' align="center">
										<Text variant="caption-2" color="neutral-faded">0</Text>
									</View>
								</View.Item>
							</View>
						</View>

						<View>
							<Avatar src="./avatar.svg" alt="Profile" size={8} />
						</View>
					</View>
				</View.Item>
			</View>
		</ActionBar>
	)
}