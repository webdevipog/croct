import Link from "next/link"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link rel="icon" href="/lp-teste" className="bg-violet-950 py-2 px-10 rounded text-white hover:bg-violet-800">
        LP de teste
      </Link>
    </main>
  )
}
