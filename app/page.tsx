import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import "reshaped/themes/reshaped/theme.css";
import SelectProduct from "../components/SelectProduct";
import Reshaped from "../components/Reshaped";
import Users from "../components/FetchUsers";

export default function Home() {
  return (
    <ClerkProvider>
      <SignedIn>

      </SignedIn>
      <SignedOut>
        <Reshaped theme="reshaped">
          <SelectProduct />
          {/* <Users /> */}

        </Reshaped >
      </SignedOut>
    </ClerkProvider >
  )
}
