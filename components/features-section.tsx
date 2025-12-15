'use client';

import { Card } from '@/components/ui/card';
import { Zap, Building, Plug, Blocks, TestTube, Package } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const features = [
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Generate complete projects in 30 seconds.',
    details:
      'Full project structure, Docker, database, migrations, tests - all configured and ready to run.',
  },
  {
    icon: Building,
    title: 'Clean Architecture',
    description: 'Domain-driven design with clear boundaries.',
    details:
      'Proper separation of concerns. Scales from quick prototype to production application seamlessly.',
  },
  {
    icon: Plug,
    title: 'Auto Dependency Injection',
    description: 'Dependencies wired automatically in generated code.',
    details:
      'No manual configuration. No reflection magic. Just clean, explicit dependency injection that works.',
  },
  {
    icon: Blocks,
    title: 'Modular by Design',
    description: 'Each feature is a self-contained module.',
    details:
      'Add, remove, or modify modules without touching existing code. True modularity for rapid iteration.',
  },
  {
    icon: TestTube,
    title: 'Test Ready',
    description: 'Unit tests generated for every layer.',
    details:
      'Domain tests, use case tests, handler tests with mock repositories. Start with 80%+ coverage.',
  },
  {
    icon: Package,
    title: 'Batteries Included',
    description: 'PostgreSQL, migrations, Docker Compose ready.',
    details:
      "Everything you need to start coding. Run 'make dev' and you're up in seconds.",
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 px-2 md:px-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
          Why developers love GoZilla
        </h2>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className={`p-6 bg-card hover:border-green-500/50 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className='mb-4'>
                <div className='p-3 bg-primary/10 rounded-lg inline-block'>
                  <Icon className='h-6 w-6 text-primary' />
                </div>
              </div>
              <h3 className='text-xl font-bold mb-2 text-foreground'>
                {feature.title}
              </h3>
              <p className='text-green-400 mb-2 leading-relaxed'>
                {feature.description}
              </p>
              <p className='text-sm text-slate-400 leading-relaxed'>
                {feature.details}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
