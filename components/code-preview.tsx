'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function CodePreview() {
  const [activeTab, setActiveTab] = useState('new-project');

  return (
    <section className='py-16 md:py-24 bg-muted/20'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>See It In Action</h2>
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

          <Card className='bg-code-bg border-border/50 p-6 overflow-x-auto'>
            <TabsContent value='new-project' className='mt-0'>
              <pre className='font-mono text-sm'>
                <code className='text-code-text'>
                  {`$ gocli new my-api

✓ Creating project structure...
✓ Setting up Clean Architecture...
✓ Configuring Gin framework...
✓ Setting up Docker & PostgreSQL...
✓ Generating example module (health)...
✓ Done!

$ cd my-api && make dev
🚀 Server running on http://localhost:8080`}
                </code>
              </pre>
            </TabsContent>

            <TabsContent value='generate-module' className='mt-0'>
              <pre className='font-mono text-sm'>
                <code className='text-code-text'>
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
                </code>
              </pre>
            </TabsContent>

            <TabsContent value='auto-wiring' className='mt-0'>
              <pre className='font-mono text-sm'>
                <code className='text-code-text'>
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
                </code>
              </pre>
            </TabsContent>
          </Card>
        </Tabs>

        <div className='mt-8 bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center'>
          <p className='text-xl text-green-400 font-semibold mb-2'>
            🎉 That's it. Your API is running.
          </p>
          <p className='text-slate-300 mb-1'>
            Complete project structure • Auto-wired dependencies • Tests included
          </p>
          <p className='text-slate-400 text-sm'>
            No configuration. No manual wiring. No boilerplate.
          </p>
        </div>
      </div>
    </section>
  );
}
