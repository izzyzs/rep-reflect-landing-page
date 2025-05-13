import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full px-4 py-4 md:py-6 flex justify-between items-center max-w-6xl mx-auto">
      <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight">
        RepReflect<span className="text-primary">.</span>
      </Link>
    </header>
  )
}
