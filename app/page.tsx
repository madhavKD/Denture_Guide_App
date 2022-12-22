import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import "reshaped/themes/reshaped/theme.css";
import SelectProduct from "../components/SelectProduct";
import Reshaped from "../components/Reshaped";

export default function Home() {
  return (
    <Reshaped theme="reshaped">
      <SelectProduct />
      {/* <ClerkProvider>
        <SignedIn>

        </SignedIn>
        <SignedOut>

        </SignedOut>
      </ClerkProvider> */}
    </Reshaped >
  )
}
