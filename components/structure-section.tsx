'use client';

import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function StructureSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-muted/20 px-2 md:px-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
          What you get out of the box
        </h2>
      </div>

      <Card className='max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 p-8 overflow-x-auto shadow-xl'>
        <div className='flex items-center gap-2 mb-4 pb-3 border-b border-slate-700'>
          <div className='flex gap-1.5'>
            <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
            <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
            <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
          </div>
          <span className='text-xs text-slate-400 ml-2'>project-structure</span>
        </div>
        <pre className='font-mono text-[13px] leading-relaxed text-slate-300' style={{ fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace' }}>
{`my-api/
├─ cmd/api/
│  └─ main.go
├─ internal/
│  ├─ domain/              # Shared domain
│  ├─ infrastructure/
│  │  ├─ database/
│  │  ├─ http/
│  │  └─ container/        # DI container
│  └─ modules/
│     └─ users/
│        ├─ user.module.go    # Module DI ✨
│        ├─ domain/
│        ├─ application/
│        └─ infra/
├─ docker-compose.yaml
├─ Makefile
└─ README.md`}
        </pre>
      </Card>
    </section>
  );
}
