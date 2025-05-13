export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-6 py-12 text-center text-sm text-gray-500">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="font-semibold text-white">RepReflect</div>

        <nav className="flex justify-center gap-6 text-gray-400 text-xs">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#early-access" className="hover:text-white transition">Get Access</a>
        </nav>

        <p className="text-gray-600 text-xs">&copy; {new Date().getFullYear()} RepReflect. All rights reserved.</p>
      </div>
    </footer>
  )
}
