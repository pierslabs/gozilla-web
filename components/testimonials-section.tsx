import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'This is exactly what I needed when starting a new Go project',
    author: 'Developer from waitlist',
  },
  {
    quote: 'Saved me hours on my last side project',
    author: 'Developer from waitlist',
  },
  {
    quote: 'Finally, a proper way to structure Go projects',
    author: 'Developer from waitlist',
  },
];

export function TestimonialsSection() {
  return (
    <section className='py-16 md:py-24'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
          Early feedback
        </h2>
      </div>

      <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {testimonials.map((testimonial, index) => (
          <Card key={index} className='p-6 bg-card'>
            <Quote className='h-8 w-8 text-primary mb-4' />
            <p className='text-foreground mb-4 leading-relaxed italic'>
              "{testimonial.quote}"
            </p>
            <p className='text-sm text-muted-foreground mt-auto'>
              — {testimonial.author}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
