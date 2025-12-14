import { Card } from '@/components/ui/card';
import { Zap, Building, Plug, Blocks, TestTube, Package } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Full project in seconds. Docker, DB, tests ready.',
  },
  {
    icon: Building,
    title: 'Clean Architecture',
    description: 'Domain-driven design with clear layers and boundaries.',
  },
  {
    icon: Plug,
    title: 'Auto Wiring',
    description: 'Dependencies injected automatically. Zero config.',
  },
  {
    icon: Blocks,
    title: 'Modular',
    description: 'Each feature is a self-contained module.',
  },
  {
    icon: TestTube,
    title: 'Test Ready',
    description: 'Unit tests generated with every module.',
  },
  {
    icon: Package,
    title: 'Multiple Frameworks',
    description: 'Gin, Fiber, Echo, Chi support. (coming soon)',
  },
];

export function FeaturesSection() {
  return (
    <section className='py-16 md:py-24'>
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
              className='p-6 bg-card hover:bg-card/80 transition-colors'
            >
              <div className='mb-4'>
                <div className='p-3 bg-primary/10 rounded-lg inline-block'>
                  <Icon className='h-6 w-6 text-primary' />
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-foreground'>
                {feature.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
