import { Sidebar, MobileTabbar } from "@/components/sidebar";
import { ScrollProgress } from "@/components/motion";
import { SolanaProvider } from "@/components/solana/wallet-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SolanaProvider>
      <div className="flex min-h-screen">
        <ScrollProgress />
        <Sidebar />
        <div className="min-w-0 flex-1">{children}</div>
        <MobileTabbar />
      </div>
    </SolanaProvider>
  );
}
