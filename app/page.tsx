import { Mainpage } from "@/components/mainpage";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Mainpage />
      <Analytics />
    </main>
  );
}