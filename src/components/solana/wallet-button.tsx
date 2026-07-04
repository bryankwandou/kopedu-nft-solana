"use client";

import dynamic from "next/dynamic";

/* WalletMultiButton membaca state wallet di browser — render hanya di client */
export const WalletButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (m) => m.WalletMultiButton
    ),
  { ssr: false }
);
