import Link from "next/link"
import { Frame, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Frame className="h-6 w-6 text-primary" />
          <span>InvestLocal</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
          <Link href="/projects" className="transition-colors hover:text-foreground/80">
            Projetos
          </Link>
          <Link href="/how-it-works" className="transition-colors hover:text-foreground/80">
            Como funciona
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            Sobre nós
          </Link>
        </nav>
        <div className="flex items-center ml-auto gap-2">
          <Link href="/login" className="text-sm font-medium hidden md:block">
            Entrar
          </Link>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/register">Criar conta</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/projects" className="text-lg font-medium">
                  Projetos
                </Link>
                <Link href="/how-it-works" className="text-lg font-medium">
                  Como funciona
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  Sobre nós
                </Link>
                <Link href="/login" className="text-lg font-medium">
                  Entrar
                </Link>
                <Button asChild className="mt-2">
                  <Link href="/register">Criar conta</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
