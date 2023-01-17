import { Button, View, ViewProps, Placeholder, Image, ImageProps } from "../components/Reshaped/Reshaped";
import FetchUsers from "../components/FetchUsers";
import { Container } from "reshaped";
import type { ContainerProps } from "reshaped";

export default function Home() {
  return (
    
      
    <View align="center" backgroundColor="neutral">

      <View position="absolute">
        <Image
          src="https://github.com/mmailaender/Mana/blob/main/public/Blurred%20elipse.png?raw=true" />
      </View>

      <View paddingTop={4} >
        <Button>Hello</Button>
      </View>

      <View position="absolute" insetStart={4} insetTop={4}>
        <Image
          src="https://raw.githubusercontent.com/mmailaender/Mana/91239c7af52291c4af638be24a399171a88cc9a2/public/Polygon%201.svg" />
      </View>

    </View>
  )
}
