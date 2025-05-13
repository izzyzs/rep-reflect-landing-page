export default function Features() {
  return (
    <section id="features" className="py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="text-4xl mb-2">🧠</div>
          <h3 className="text-lg font-semibold">Reflect Intentionally</h3>
          <p className="text-sm opacity-75">Log how each session felt — track more than just numbers.</p>
        </div>

        <div>
          <div className="text-4xl mb-2">⚡</div>
          <h3 className="text-lg font-semibold">Fast Logging</h3>
          <p className="text-sm opacity-75">Add sets, reps, and notes in seconds. Built for consistency.</p>
        </div>

        <div>
          <div className="text-4xl mb-2">📈</div>
          <h3 className="text-lg font-semibold">Track Your Progress</h3>
          <p className="text-sm opacity-75">See your streaks, volume, and mental notes evolve together.</p>
        </div>

        <div>
          <div className="text-4xl mb-2">🔒</div>
          <h3 className="text-lg font-semibold">Private by Default</h3>
          <p className="text-sm opacity-75">Your entries stay yours — no unwanted feeds or likes.</p>
        </div>
      </div>
    </section>
  )
}
