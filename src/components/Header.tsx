import * as React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils/cn';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Quem Somos', href: '/quem-somos' },
  {
    name: 'Soluções',
    items: [
      { name: 'Chave na Mão (Turnkey)', href: '/solucoes/chave-na-mao' },
      { name: 'Obras Civis Industriais', href: '/solucoes/obras-civis-industriais' },
      { name: 'Infraestrutura e Adequações', href: '/solucoes/infraestrutura-adequacoes' },
      { name: 'Manutenção Civil Industrial', href: '/solucoes/manutencao-civil-industrial' },
    ],
  },
  { name: 'Segurança e Qualidade', href: '/seguranca-e-qualidade' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-white/8 backdrop-blur-xl">
      <nav className="container mx-auto px-4 md:px-6 py-5 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" aria-label="NEXOR Industrial - Home">
            <div className="relative flex items-center min-h-[48px] md:min-h-[56px] lg:min-h-[64px]">
              <img
                src="/images/logo.png"
                alt="NEXOR Industrial"
                className="h-14 md:h-16 lg:h-20 w-auto transition-opacity duration-200 group-hover:opacity-90 object-contain"
                loading="eager"
                style={{ imageRendering: 'high-quality' }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu.Root className="relative z-50">
              <NavigationMenu.List className="flex gap-8 items-center">
                {navigation.map((item) => (
                  <NavigationMenu.Item key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenu.Trigger className="text-neutral-200 hover:text-neutral-50 transition-all duration-200 font-medium text-sm tracking-tight flex items-center gap-1.5 px-2 py-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group bg-transparent border-none cursor-pointer">
                          {item.name}
                          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute top-full left-0 mt-3 w-72 glass border border-white/18 rounded-2xl py-2 shadow-premium-lg">
                          <ul>
                            {item.items.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenu.Link
                                  href={subItem.href}
                                  className="block px-5 py-2.5 text-neutral-700 hover:bg-neutral-100/50 transition-all duration-200 text-sm rounded-md mx-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                >
                                  {subItem.name}
                                </NavigationMenu.Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenu.Content>
                      </>
                    ) : (
                      <NavigationMenu.Link
                        href={item.href}
                        className="text-neutral-200 hover:text-neutral-50 transition-all duration-200 font-medium text-sm tracking-tight px-2 py-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {item.name}
                      </NavigationMenu.Link>
                    )}
                  </NavigationMenu.Item>
                ))}
                <NavigationMenu.Item>
                  <a
                    href="/contato"
                    className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 font-semibold transition-all duration-200 rounded-xl text-sm tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Contato
                  </a>
                </NavigationMenu.Item>
              </NavigationMenu.List>
              <NavigationMenu.Viewport className="absolute left-0 top-full w-full flex justify-center" />
            </NavigationMenu.Root>
          </div>

          {/* Mobile Menu Button */}
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                className="lg:hidden text-neutral-50 p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent border-none bg-transparent cursor-pointer"
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-sm glass-dark border-l border-white/8 shadow-premium-lg outline-none">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-white/8">
                    <img
                      src="/images/logo.png"
                      alt="NEXOR Industrial"
                      className="h-12 w-auto object-contain"
                    />
                    <Dialog.Close asChild>
                      <button
                        className="text-neutral-50 p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent border-none bg-transparent cursor-pointer"
                        aria-label="Fechar menu"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-6" aria-label="Navegação principal">
                    <ul className="space-y-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          {item.items ? (
                            <MobileDropdown 
                              item={item} 
                              onItemClick={() => setMobileMenuOpen(false)}
                            />
                          ) : (
                            <a
                              href={item.href}
                              className="block text-neutral-200 hover:text-neutral-50 font-medium py-3 px-4 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          )}
                        </li>
                      ))}
                      <li className="pt-4 mt-4 border-t border-white/8">
                        <a
                          href="/contato"
                          className="block bg-accent hover:bg-accent-hover text-white px-6 py-3 font-semibold transition-all duration-200 text-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contato
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  );
}

function MobileDropdown({ 
  item, 
  onItemClick 
}: { 
  item: { name: string; items: Array<{ name: string; href: string }> };
  onItemClick?: () => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-neutral-200 hover:text-neutral-50 font-medium py-3 px-4 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-200 border-none bg-transparent cursor-pointer text-left"
        aria-expanded={open}
        aria-controls={`mobile-${item.name.toLowerCase()}`}
      >
        {item.name}
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <ul id={`mobile-${item.name.toLowerCase()}`} className="pl-4 mt-2 space-y-1">
          {item.items.map((subItem) => (
            <li key={subItem.name}>
              <a
                href={subItem.href}
                className="block text-neutral-300 hover:text-neutral-50 py-2 px-4 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-200"
                onClick={onItemClick}
              >
                {subItem.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
