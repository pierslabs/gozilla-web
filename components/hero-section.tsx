'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Terminal, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const installCommand = 'go install github.com/pierslabs/gozilla-cli@latest';
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className='relative flex flex-col items-center justify-center gap-8 py-24 md:py-32 text-center min-h-screen overflow-hidden px-2 md:px-0'>
      {/* Animated background gradient */}
      <div className='absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse'></div>

      <div className='flex flex-col items-center gap-6 max-w-4xl animate-fade-in'>
        <div className='inline-flex items-end gap-3 text-5xl md:text-6xl lg:text-7xl font-bold'>
          <Image src='/gozilla-logo.png' alt='Go Logo' width={70} height={70} />

          <span className='bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
            GoZilla
          </span>
        </div>
        <h1 className='text-2xl md:text-2xl lg:text-4xl font-bold text-balance text-foreground'>
          Build Go APIs in 30 Seconds.
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground text-balance max-w-2xl leading-relaxed'>
          Stop wasting hours on setup. Start building features.
        </p>
        <p className='text-base md:text-lg text-green-400 font-semibold'>
          Clean Architecture + Auto-wired DI + PostgreSQL included.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <Button
          size='lg'
          className='bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:scale-105 transition-transform'
          asChild
        >
          <Link href='#waitlist'>
            <Star className='mr-2 h-5 w-5' />
            Get Early Access
          </Link>
        </Button>
        <Button
          size='lg'
          variant='outline'
          className='hover:scale-105 transition-transform'
          asChild
        >
          <Link
            href='https://github.com/pierslabs/gozilla-cli'
            target='_blank'
            rel='noopener noreferrer'
          >
            View on GitHub
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </Button>
      </div>

      {/* Installation snippet */}
      <Card className='max-w-2xl w-full mx-4 bg-linear-to-br from-slate-900 to-slate-800 border-slate-700 p-6 shadow-2xl mt-8'>
        <div className='flex items-center justify-between mb-3 pb-2 border-b border-slate-700'>
          <div className='flex items-center gap-2'>
            <Terminal className='h-4 w-4 text-emerald-400' />
            <span className='text-xs text-slate-400'>Installation</span>
          </div>
          <button
            onClick={handleCopy}
            className='flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-xs text-slate-300 border border-slate-600 hover:border-slate-500'
          >
            {copied ? (
              <>
                <Check className='h-3 w-3 text-green-400' />
                <span className='text-green-400'>Copied!</span>
              </>
            ) : (
              <>
                <Copy className='h-3 w-3' />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre
          className='font-mono text-[13px] leading-relaxed text-slate-300 whitespace-pre-wrap text-left'
          style={{
            fontFamily:
              'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
          }}
        >
          {`# Install via Go
$ go install github.com/pierslabs/gozilla-cli@latest

# Or download from GitHub releases
$ curl -sSL https://github.com/pierslabs/gozilla-cli/releases/latest/download/install.sh | bash`}
        </pre>
        <div className='mt-4 pt-4 border-t border-slate-700'>
          <p className='text-xs text-slate-400 text-center'>
            Then create your first API in seconds 🚀
          </p>
        </div>
      </Card>
    </section>
  );
}
