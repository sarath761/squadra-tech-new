import { metadataAbout } from "@/lib/metadata";
export const metadata = metadataAbout;
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}