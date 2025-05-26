import Randomizer from "@/components/randomizer"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Option Randomizer</h1>
        <ThemeToggle />
      </div>
      <Randomizer />
    </main>
  )
}
