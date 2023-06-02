import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, paperWallet, safeWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        // coinbaseWallet(),
        // walletConnect(),
        // safeWallet(),
        paperWallet({
          clientId: "9954b111-1391-4aa7-ab8a-b3a0318b6a1a",
        }),
        localWallet()
      ]}
    
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
