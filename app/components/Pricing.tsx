import { Check } from "lucide-react"

const tiers = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: [
      "1 user",
      "5 projects",
      "5GB storage",
      "Basic support",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for growing teams and businesses",
    features: [
      "5 users",
      "20 projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations and organizations",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "1TB storage",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
]

export default function Pricing() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for your business
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Whether you're just starting out or scaling up, we have a plan that fits your needs. All plans come with a 14-day free trial.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`rounded-2xl bg-white p-8 ring-1 ring-gray-200 ${
                tier.mostPopular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                {tier.name !== "Enterprise" && (
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                )}
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm ${
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}