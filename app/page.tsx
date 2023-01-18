import { Button, Icon, View} from "../components/Reshaped/Reshaped";
import Image from 'next/image';

export default function Home() {
  return (
    
      
    <View align="center" backgroundColor="neutral">

      <View position="absolute" width="100vw" height={20} >
        <Image
          src="/elipse.png" alt="elipse" fill={true} style={{ filter: 'blur(4px)' }} />
      </View>

      <View paddingTop={4} >
        <Button>Hello</Button>
      </View>

      <View position="absolute" insetStart={4} insetTop={4}>
        {/* <Icon src="/Polygon.svg" /> */}
      </View>

    </View>
  )
}
