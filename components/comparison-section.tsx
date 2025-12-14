import { Card } from '@/components/ui/card';
import {
  X,
  Check,
  Clock,
  FileText,
  Wrench,
  HelpCircle,
  Zap,
  Bot,
  Sparkles,
  Building,
} from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className=' py-16 md:py-24'>
      <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        {/* Without GoCLI */}
        <Card className='p-8 bg-card border-destructive/30'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-2 bg-destructive/10 rounded-lg'>
              <X className='h-6 w-6 text-destructive' />
            </div>
            <h3 className='text-2xl font-bold text-foreground'>
              WITHOUT GOZILLA
            </h3>
          </div>
          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <Clock className='h-5 w-5 text-muted-foreground mt-1 shrink-0' />
              <span className='text-foreground'>2+ hours setup</span>
            </li>
            <li className='flex items-start gap-3'>
              <FileText className='h-5 w-5 text-muted-foreground mt-1 shrink-0' />
              <span className='text-foreground'>Copy-paste boilerplate</span>
            </li>
            <li className='flex items-start gap-3'>
              <Wrench className='h-5 w-5 text-muted-foreground mt-1 shrink-0' />
              <span className='text-foreground'>Manual DI wiring</span>
            </li>
            <li className='flex items-start gap-3'>
              <HelpCircle className='h-5 w-5 text-muted-foreground mt-1 shrink-0' />
              <span className='text-foreground'>Inconsistent structure</span>
            </li>
          </ul>
        </Card>

        {/* With GoCLI */}
        <Card className='p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-2 bg-primary/20 rounded-lg'>
              <Check className='h-6 w-6 text-primary' />
            </div>
            <h3 className='text-2xl font-bold text-foreground'>WITH GOZILLA</h3>
          </div>
          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <Zap className='h-5 w-5 text-primary mt-1 shrink-0' />
              <span className='text-foreground font-medium'>
                3 commands, ready
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <Bot className='h-5 w-5 text-primary mt-1 shrink-0' />
              <span className='text-foreground font-medium'>
                Auto-generated code
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <Sparkles className='h-5 w-5 text-primary mt-1 shrink-0' />
              <span className='text-foreground font-medium'>
                Auto-wired modules
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <Building className='h-5 w-5 text-primary mt-1 shrink-0' />
              <span className='text-foreground font-medium'>
                Clean Architecture
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
