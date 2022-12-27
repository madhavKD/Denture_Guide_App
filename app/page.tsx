import SelectProduct from "../components/SelectProduct";
import FetchUsers from "../components/FetchUsers";
import { View } from "../components/Reshaped/Reshaped";
import TeethDiagram from "../components/teeth-diagram";

export default function Home() {
  return (
    <View>
      <FetchUsers />
      <SelectProduct />
      <TeethDiagram />
    </View>
  )
}
