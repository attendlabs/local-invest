import Link from "next/link"
import { Frame } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Frame className="h-5 w-5 text-primary" />
            <span>InvestLocal</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} InvestLocal. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
            Termos
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacidade
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}
