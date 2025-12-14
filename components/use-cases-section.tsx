import { Card } from '@/components/ui/card';
import { Lightbulb, GraduationCap, Users, Rocket } from 'lucide-react';

const useCases = [
  {
    icon: Lightbulb,
    title: 'Rapid Prototyping',
    description: 'Test your ideas in minutes, not hours',
  },
  {
    icon: GraduationCap,
    title: 'Learning Go',
    description: 'Start with solid architecture from day 1',
  },
  {
    icon: Users,
    title: 'Team Standards',
    description: 'Consistent structure across all projects',
  },
  {
    icon: Rocket,
    title: 'Side Projects',
    description: 'Ship faster without setup friction',
  },
];

export function UseCasesSection() {
  return (
    <section className=' py-16 md:py-24'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
          Perfect for
        </h2>
      </div>

      <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <Card
              key={index}
              className='p-6 bg-linear-to-br from-card to-muted/30 border-border/50'
            >
              <div className='flex items-start gap-4'>
                <div className='p-2 bg-secondary/10 rounded-lg shrink-0'>
                  <Icon className='h-6 w-6 text-secondary' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-2 text-foreground'>
                    {useCase.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {useCase.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
