'use client';

import { MenuItem, Text, View } from '../../Reshaped/Reshaped';
import selectedToothData from './data.json';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function SelectedTooth() {
  const pathname = usePathname();

  return (
    <View gap={2} paddingTop={5} direction="column" divided>
      {selectedToothData.map((tooth, index) => (
        <>
          <View key={index} gap={1}>
            <MenuItem
              roundedCorners
              selected={pathname?.includes(`/selected-tooth/${tooth.url}`)}
              href={`/selected-tooth/${tooth.url}`}
            >
              <Text variant="body-medium-2">{tooth.title}</Text>
            </MenuItem>

            <View direction="column" gap={1} paddingStart={3} paddingTop={2}>
              {tooth.availableOptions.map((availableOption, index) => (
                <MenuItem
                  key={index}
                  size="small"
                  roundedCorners
                  selected={pathname?.includes(
                    `/selected-tooth/${tooth.url}/${availableOption.url}`
                  )}
                  href={`/selected-tooth/${tooth.url}/${availableOption.url}`}
                  className="menuItemLink"
                  startIcon={
                    'startIcon' in availableOption ? (
                      <Image
                        src={availableOption.startIcon}
                        height={16}
                        width={16}
                        alt="Img"
                      />
                    ) : (
                      <></>
                    )
                  }
                >
                  <Text variant="body-medium-2">{availableOption.name}</Text>
                </MenuItem>
              ))}
            </View>
          </View>
        </>
      ))}
    </View>
  );
}
