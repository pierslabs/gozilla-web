import { Card } from '@/components/ui/card';

const steps = [
  {
    number: '1️⃣',
    title: 'Create project',
    command: '$ gocli new my-api',
    description: 'Full structure ready',
  },
  {
    number: '2️⃣',
    title: 'Generate modules',
    command: '$ gocli g mod users\n$ gocli g mod products',
    description: 'CRUD + tests generated',
  },
  {
    number: '3️⃣',
    title: 'Start coding',
    command: '$ make dev',
    description: 'Server running ✓',
  },
];

export function HowItWorksSection() {
  return (
    <section className='py-16 md:py-24 bg-muted/20'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
          From idea to API in 3 steps
        </h2>
      </div>

      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {steps.map((step, index) => (
          <Card key={index} className='p-6 bg-card text-center'>
            <div className='text-4xl mb-4'>{step.number}</div>
            <h3 className='text-xl font-semibold mb-3 text-foreground'>
              {step.title}
            </h3>
            <div className='bg-code-bg rounded-lg p-4 mb-3 font-mono text-xs text-code-text text-left whitespace-pre'>
              {step.command}
            </div>
            <p className='text-muted-foreground'>{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
