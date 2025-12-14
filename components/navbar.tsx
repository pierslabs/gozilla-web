import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className=' flex h-16 items-center justify-between p-4'>
        <div className='flex items-center gap-2'>
          <div className='text-2xl font-bold'>
            <span className='text-primary'>Go</span>
            <span className='text-foreground'>Zilla</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm' asChild>
            <Link
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='h-5 w-5 mr-2' />
              GitHub
            </Link>
          </Button>
          <Button variant='outline' size='sm' disabled>
            Docs{' '}
            <span className='ml-1 text-xs text-muted-foreground'>(soon)</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
