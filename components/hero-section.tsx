import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className='relative flex flex-col items-center justify-center gap-8 py-24 md:py-32 text-center   overflow-hidden'>
      <div className='flex flex-col items-center gap-4 max-w-4xl'>
        <div className='inline-flex items-center gap-2 text-5xl md:text-6xl lg:text-7xl font-bold'>
          <span className='text-4xl'>
            <Image
              src='/gozilla-logo.png'
              alt='Go Logo'
              width={64}
              height={64}
            />
          </span>
          <span className='bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
            GoZilla
          </span>
        </div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-balance text-foreground'>
          CLI for Go developers
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground text-balance max-w-2xl leading-relaxed'>
          Stop wasting hours on boilerplate.
          <br />
          Start prototyping in minutes.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <Button
          size='lg'
          className='bg-primary hover:bg-primary/90 text-primary-foreground font-semibold'
          asChild
        >
          <Link href='#waitlist'>
            <Star className='mr-2 h-5 w-5' />
            Get Early Access
          </Link>
        </Button>
        <Button size='lg' variant='outline' asChild>
          <Link
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            View on GitHub
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </Button>
      </div>
    </section>
  );
}
