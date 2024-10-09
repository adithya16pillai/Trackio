import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary to-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
            Welcome to <span className="text-secondary">Trackio</span> 
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Discover the power of our innovative solutions. Streamline your workflow and boost productivity with our cutting-edge tools.
          </p>
          <div className="flex justify-center">
            <Link
              href="/get-started"
              className="rounded-md bg-secondary px-6 py-3 text-lg font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}