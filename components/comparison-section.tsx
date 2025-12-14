import {
  Clock,
  FileText,
  Wrench,
  HelpCircle,
  Zap,
  Bot,
  Sparkles,
  Building,
  AlertTriangle,
  Rocket,
} from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className='py-20 bg-linear-to-b from-slate-900/50 via-slate-900/80 to-slate-900/50 relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]' />
      <div className='absolute top-0 left-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl' />

      <div className='mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 '>
            <Zap className='h-4 w-4 text-cyan-400' />
            <span className='text-sm text-slate-300'>
              The Difference Is Clear
            </span>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Without GoCLI */}
          <div className='group relative'>
            <div className='absolute inset-0 bg-linear-to-br from-red-500/20 to-orange-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300' />
            <div className='relative bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300'>
              <div className='flex items-center gap-3 mb-8'>
                <div className='p-3 bg-red-500/10 rounded-xl'>
                  <AlertTriangle className='h-7 w-7 text-red-400' />
                </div>
                <h3 className='text-2xl font-bold text-red-400'>
                  WITHOUT GOZILLA
                </h3>
              </div>
              <ul className='space-y-5'>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Clock className='h-5 w-5 text-red-400/80' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-medium'>
                      2+ hours setup
                    </span>
                    <span className='text-slate-400 text-sm'>
                      Manual configuration hell
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <FileText className='h-5 w-5 text-red-400/80' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-medium'>
                      Copy-paste boilerplate
                    </span>
                    <span className='text-slate-400 text-sm'>
                      From old projects
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Wrench className='h-5 w-5 text-red-400/80' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-medium'>
                      Manual DI wiring
                    </span>
                    <span className='text-slate-400 text-sm'>
                      Error-prone and tedious
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <HelpCircle className='h-5 w-5 text-red-400/80' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-medium'>
                      Inconsistent structure
                    </span>
                    <span className='text-slate-400 text-sm'>
                      Every project is different
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* With GoCLI */}
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300' />
            <div className='relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300'>
              <div className='flex items-center gap-3 mb-8'>
                <div className='p-3 bg-cyan-500/10 rounded-xl'>
                  <Rocket className='h-7 w-7 text-cyan-400' />
                </div>
                <h3 className='text-2xl font-bold text-cyan-400'>
                  WITH GOZILLA
                </h3>
              </div>
              <ul className='space-y-5'>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Zap className='h-5 w-5 text-cyan-400' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-semibold'>
                      3 commands, ready
                    </span>
                    <span className='text-cyan-300/80 text-sm'>
                      Lightning fast setup
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Bot className='h-5 w-5 text-cyan-400' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-semibold'>
                      Auto-generated code
                    </span>
                    <span className='text-cyan-300/80 text-sm'>
                      Production-ready instantly
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Sparkles className='h-5 w-5 text-cyan-400' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-semibold'>
                      Auto-wired modules
                    </span>
                    <span className='text-cyan-300/80 text-sm'>
                      Zero configuration needed
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200'>
                  <div className='shrink-0 mt-0.5'>
                    <Building className='h-5 w-5 text-cyan-400' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-slate-200 font-semibold'>
                      Clean Architecture
                    </span>
                    <span className='text-cyan-300/80 text-sm'>
                      Consistent every time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
