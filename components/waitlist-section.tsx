'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

export function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement waitlist submission
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section
      id='waitlist'
      className='py-16 md:py-24 bg-linear-to-br from-primary/10 via-secondary/10 to-background px-2 md:px-0'
    >
      <Card className='max-w-2xl mx-auto p-8 md:p-12 bg-card/80 backdrop-blur'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
            🦖 Get Early Access
          </h2>
          <p className='text-lg text-muted-foreground text-balance'>
            Be the first to know when GoZilla launches.
            <br />
            Limited spots for beta testers.
          </p>
        </div>

        {submitted ? (
          <div className='text-center py-8'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4'>
              <Check className='h-8 w-8 text-success' />
            </div>
            <p className='text-xl font-semibold text-foreground'>
              Thanks for joining!
            </p>
            <p className='text-muted-foreground mt-2'>
              We'll be in touch soon.
            </p>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col sm:flex-row gap-3 mb-8'
            >
              <Input
                type='email'
                placeholder='your@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='flex-1 bg-background'
              />
              <Button
                type='submit'
                size='lg'
                className='bg-primary hover:bg-primary/90 text-primary-foreground'
              >
                Join Waitlist
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </form>

            <div className='grid md:grid-cols-2 gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-success shrink-0' />
                <span>Early access to all features</span>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-success shrink-0' />
                <span>Influence the roadmap</span>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-success shrink-0' />
                <span>Lifetime discount on premium tiers</span>
              </div>
              <div className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-success shrink-0' />
                <span>Direct support channel</span>
              </div>
            </div>
          </>
        )}
      </Card>
    </section>
  );
}
