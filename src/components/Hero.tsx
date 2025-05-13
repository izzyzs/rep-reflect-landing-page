// components/Hero.tsx
import Form from "@/components/Form"

export default function Hero() {
  return (
    <section id="early-access" className="py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Log your workouts. Reflect on your mindset.
        </h1>

        <p className="text-lg sm:text-xl text-gray-300">
          RepReflect is the fast, journaling-first fitness tracker for lifters, runners, and mindful movers.
        </p>
        <Form />
        <p className="text-sm text-gray-400">No spam. Just a spot on the early access list.</p>
      </div>
    </section>
  )
}
