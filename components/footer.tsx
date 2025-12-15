import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className='border-t border-border bg-card/80 backdrop-blur py-3 px-4'>
      <div className='flex items-center justify-around max-w-5xl mx-auto'>
        <div className='text-2xl font-bold flex-1'>
          <span className='text-primary'>Go</span>
          <span className='text-foreground'>Zilla</span>
        </div>

        <div className='flex items-center gap-4 justify-center'>
          <Button variant='ghost' size='sm' asChild>
            <Link
              href='https://github.com/pierslabs/gozilla-cli'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='h-5 w-5' />
            </Link>
          </Button>
          <Button variant='ghost' size='sm' asChild>
            <Link
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Twitter className='h-5 w-5' />
            </Link>
          </Button>
          <Button variant='ghost' size='sm' asChild>
            <Link href='mailto:support@gozilla.dev'>
              <Mail className='h-5 w-5' />
            </Link>
          </Button>
        </div>

        <p className='text-sm text-muted-foreground flex-1 text-right'>
          Made with ❤️ for developers.
        </p>
      </div>
    </footer>
  );
}
