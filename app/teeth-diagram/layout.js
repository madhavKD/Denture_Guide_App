'use-client';

import { View, Text } from '../../components/Reshaped/Reshaped'

export default function ({ children }) {
    return (
        <>
            <View paddingBottom={20}>
                <Text variant="body-strong-1" color="neutral-faded">
                    Prosthetic selection guide
                </Text>
                <Text color="disabled" variant="caption-2">
                    by Dechea
                </Text>
            </View>
            {children}
        </>
    )
}