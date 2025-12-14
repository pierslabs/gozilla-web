import { Card } from '@/components/ui/card';

export function StructureSection() {
  return (
    <section className='py-16 md:py-24 bg-muted/20'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
          What you get out of the box
        </h2>
      </div>

      <Card className='max-w-3xl mx-auto bg-code-bg border-border/50 p-8 overflow-x-auto'>
        <pre className='font-mono text-sm text-code-text'>
          {`my-api/
├── cmd/api/main.go
├── internal/
│   ├── domain/              # Shared domain
│   ├── infrastructure/
│   │   ├── database/
│   │   ├── http/
│   │   └── container/       # DI container
│   └── modules/
│       └── users/
│           ├── user.module.go    # Module DI ✨
│           ├── domain/
│           ├── application/
│           └── infra/
├── docker-compose.yaml
├── Makefile
└── README.md`}
        </pre>
      </Card>
    </section>
  );
}
