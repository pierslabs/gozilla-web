import { Check, X, Zap } from 'lucide-react';

export function ProblemSolution() {
  return (
    // Componente nuevo: ProblemSolution.tsx

    <section className='py-20 bg-slate-900/50 '>
      <div className='mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* PROBLEMA */}
          <div>
            <h2 className='text-3xl font-bold text-red-400 mb-6'>
              The Problem
            </h2>
            <ul className='space-y-4'>
              <li className='flex gap-3'>
                <X className='h-6 w-6 text-destructive' />
                <span className='text-slate-300'>
                  <strong>2+ hours</strong> setting up each new project
                </span>
              </li>
              <li className='flex gap-3'>
                <X className='h-6 w-6 text-destructive' />
                <span className='text-slate-300'>
                  <strong>Manual dependency wiring</strong> every single time
                </span>
              </li>
              <li className='flex gap-3'>
                <X className='h-6 w-6 text-destructive' />
                <span className='text-slate-300'>
                  <strong>Copy-pasting</strong> boilerplate from old projects
                </span>
              </li>
              <li className='flex gap-3'>
                <X className='h-6 w-6 text-destructive' />
                <span className='text-slate-300'>
                  <strong>Inconsistent structure</strong> across your projects
                </span>
              </li>
              <li className='flex gap-3'>
                <X className='h-6 w-6 text-destructive' />
                <span className='text-slate-300'>
                  <strong>Hours wasted</strong> when you just want to prototype
                </span>
              </li>
            </ul>
          </div>

          {/* SOLUCIÓN */}
          <div>
            <h2 className='text-3xl font-bold text-green-300 mb-6'>
              The Solution
            </h2>
            <ul className='space-y-4'>
              <li className='flex gap-3'>
                <Check className='h-6 w-6 text-green-300' />
                <span className='text-slate-300'>
                  <strong>30 seconds</strong> from zero to running API
                </span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-6 w-6 text-green-300' />
                <span className='text-slate-300'>
                  <strong>Auto-wired dependencies</strong> - no manual
                  configuration
                </span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-6 w-6 text-green-300' />
                <span className='text-slate-300'>
                  <strong>Production-ready code</strong> generated for you
                </span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-6 w-6 text-green-300' />
                <span className='text-slate-300'>
                  <strong>Consistent Clean Architecture</strong> every time
                </span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-6 w-6 text-green-300' />
                <span className='text-slate-300'>
                  <strong>Prototype in minutes</strong>, scale to production
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
