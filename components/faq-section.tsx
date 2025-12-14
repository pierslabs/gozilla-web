import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Is this against Go's philosophy?",
    answer:
      "No. It's optional tooling for rapid prototyping. The generated code is clean, idiomatic Go.",
  },
  {
    question: 'What frameworks are supported?',
    answer: 'Currently Gin.',
  },
  {
    question: 'Will it be free?',
    answer:
      'Core CLI will be open source. Premium templates and features will have paid tiers.',
  },
  {
    question: 'When will it launch?',
    answer: 'Q1 2025 (validating demand now).',
  },
  {
    question: 'Can I customize the templates?',
    answer: 'Yes! Custom templates will be a premium feature.',
  },
];

export function FaqSection() {
  return (
    <section className='py-16 md:py-24'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
          FAQ
        </h2>
      </div>

      <Accordion type='single' collapsible className='max-w-3xl mx-auto'>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-left text-lg font-semibold text-foreground'>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className='text-muted-foreground leading-relaxed'>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
