'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function CodePreview() {
  const [activeTab, setActiveTab] = useState('new-project');
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-muted/20 px-2 md:px-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            See It In Action
          </h2>
          <p className='text-xl text-slate-400'>
            Three commands. Thirty seconds. Production-ready API.
          </p>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='grid w-full grid-cols-3 mb-8'>
            <TabsTrigger value='new-project'>New Project</TabsTrigger>
            <TabsTrigger value='generate-module'>Generate Module</TabsTrigger>
            <TabsTrigger value='auto-wiring'>Auto-wiring</TabsTrigger>
          </TabsList>

          <Card className='bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 p-8 overflow-x-auto shadow-xl'>
            <div className='flex items-center gap-2 mb-4 pb-3 border-b border-slate-700'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
                <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
              </div>
              <span className='text-xs text-slate-400 ml-2'>
                {activeTab === 'new-project' && 'terminal'}
                {activeTab === 'generate-module' && 'terminal'}
                {activeTab === 'auto-wiring' && 'user.module.go'}
              </span>
            </div>

            <TabsContent value='new-project' className='mt-0'>
              <pre
                className='font-mono text-[13px] leading-relaxed whitespace-pre-wrap'
                style={{
                  fontFamily:
                    'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
                }}
              >
                {`$ gocli new my-api

✓ Creating project structure...
✓ Setting up Clean Architecture...
✓ Configuring Gin framework...
✓ Setting up Docker & PostgreSQL...
✓ Generating example module (health)...
✓ Done!

$ cd my-api && make dev
🚀 Server running on http://localhost:8080`}
              </pre>
            </TabsContent>

            <TabsContent value='generate-module' className='mt-0'>
              <pre
                className='font-mono text-[13px] leading-relaxed whitespace-pre-wrap'
                style={{
                  fontFamily:
                    'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
                }}
              >
                {`$ gocli g mod users

✓ Creating users module...
✓ Generating domain entities...
✓ Creating repository interfaces...
✓ Implementing use cases...
✓ Setting up HTTP handlers...
✓ Writing unit tests...
✓ Registering module in container...
✓ Done!

Module 'users' created at internal/modules/users/`}
              </pre>
            </TabsContent>

            <TabsContent value='auto-wiring' className='mt-0'>
              <pre
                className='font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-slate-300'
                style={{
                  fontFamily:
                    'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
                }}
              >
                {`// user.module.go
package users

type Module struct {
    repo       Repository
    service    Service
    handler    Handler
}

func NewModule(db *sql.DB) *Module {
    repo := NewRepository(db)
    service := NewService(repo)
    handler := NewHandler(service)

    return &Module{repo, service, handler}
}

// Dependencies injected automatically! 🎉`}
              </pre>
            </TabsContent>
          </Card>
        </Tabs>

        <div className='mt-8 bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center'>
          <p className='text-xl text-green-400 font-semibold mb-2'>
            🎉 That's it. Your API is running.
          </p>
          <p className='text-slate-300 mb-1'>
            Complete project structure • Auto-wired dependencies • Tests
            included
          </p>
          <p className='text-slate-400 text-sm'>
            No configuration. No manual wiring. No boilerplate.
          </p>
        </div>
      </div>
    </section>
  );
}
