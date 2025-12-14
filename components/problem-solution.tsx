import { Check, X, Zap, AlertCircle, Sparkles } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className='py-24 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900/50 relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]' />
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl' />

      <div className='mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6'>
            <Zap className='h-4 w-4 text-yellow-400' />
            <span className='text-sm text-slate-300'>Before vs After</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent'>
            Stop Wasting Time on Boilerplate
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* PROBLEMA */}
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300' />
            <div className='relative bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-red-500/10 rounded-lg'>
                  <AlertCircle className='h-6 w-6 text-red-400' />
                </div>
                <h3 className='text-3xl font-bold text-red-400'>
                  The Problem
                </h3>
              </div>

              <ul className='space-y-4'>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <X className='h-5 w-5 text-red-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-red-300'>2+ hours</strong> setting up each new project
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <X className='h-5 w-5 text-red-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-red-300'>Manual dependency wiring</strong> every single time
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <X className='h-5 w-5 text-red-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-red-300'>Copy-pasting</strong> boilerplate from old projects
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <X className='h-5 w-5 text-red-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-red-300'>Inconsistent structure</strong> across your projects
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <X className='h-5 w-5 text-red-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-red-300'>Hours wasted</strong> when you just want to prototype
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* SOLUCIÓN */}
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300' />
            <div className='relative bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-green-500/10 rounded-lg'>
                  <Sparkles className='h-6 w-6 text-green-400' />
                </div>
                <h3 className='text-3xl font-bold text-green-400'>
                  The Solution
                </h3>
              </div>

              <ul className='space-y-4'>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Check className='h-5 w-5 text-green-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-green-300'>30 seconds</strong> from zero to running API
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Check className='h-5 w-5 text-green-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-green-300'>Auto-wired dependencies</strong> - no manual configuration
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Check className='h-5 w-5 text-green-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-green-300'>Production-ready code</strong> generated for you
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Check className='h-5 w-5 text-green-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-green-300'>Consistent Clean Architecture</strong> every time
                  </span>
                </li>
                <li className='flex gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Check className='h-5 w-5 text-green-400' />
                  </div>
                  <span className='text-slate-300 leading-relaxed'>
                    <strong className='text-green-300'>Prototype in minutes</strong>, scale to production
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
