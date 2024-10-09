import { 
    Zap, 
    Shield, 
    Smartphone, 
    Globe, 
    BarChart, 
    Users, 
    Cloud, 
    Lock, 
    Headphones 
  } from 'lucide-react'
  
  const features = [
    {
      name: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized platform.',
      icon: Zap
    },
    {
      name: 'Secure',
      description: 'Your data is protected with state-of-the-art security measures.',
      icon: Shield
    },
    {
      name: 'Mobile Friendly',
      description: 'Access your account and work from any device, anywhere.',
      icon: Smartphone
    },
    {
      name: 'Global Reach',
      description: 'Connect with customers and partners around the world.',
      icon: Globe
    },
    {
      name: 'Analytics',
      description: 'Gain valuable insights with our powerful analytics tools.',
      icon: BarChart
    },
    {
      name: 'Team Collaboration',
      description: 'Work seamlessly with your team in real-time.',
      icon: Users
    },
    {
      name: 'Cloud Storage',
      description: 'Store and access your files securely in the cloud.',
      icon: Cloud
    },
    {
      name: 'Privacy First',
      description: 'We prioritize your privacy with end-to-end encryption.',
      icon: Lock
    },
    {
      name: '24/7 Support',
      description: 'Our dedicated support team is always here to help you.',
      icon: Headphones
    }
  ]
  
  export default function Features() {
    return (
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our platform is packed with powerful features designed to help you grow your business and achieve your goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    )
  }