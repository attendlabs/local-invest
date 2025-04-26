import type React from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import { BarChart3, Home, LogOut, PiggyBank, Settings, User, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 14v1" />
            <path d="M9 8v1" />
            <path d="M15 14v1" />
            <path d="M15 8v1" />
            <path d="M9 12h6" />
          </svg>
          <span>InvestLocal</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[280px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 py-4">
                <div className="flex items-center gap-4 px-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">João Silva</div>
                    <div className="text-sm text-muted-foreground">joao.silva@exemplo.com</div>
                  </div>
                </div>
                <nav className="grid gap-2 px-2">
                  <Link
                    href="/dashboard/investor"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/investor/wallet"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <Wallet className="h-4 w-4" />
                    Carteira
                  </Link>
                  <Link
                    href="/dashboard/investor/investments"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <PiggyBank className="h-4 w-4" />
                    Investimentos
                  </Link>
                  <Link
                    href="/dashboard/investor/activity"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Atividade
                  </Link>
                  <Link
                    href="/dashboard/investor/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <User className="h-4 w-4" />
                    Perfil
                  </Link>
                  <Link
                    href="/dashboard/investor/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <Settings className="h-4 w-4" />
                    Configurações
                  </Link>
                </nav>
                <div className="px-2">
                  <Button variant="outline" className="w-full justify-start gap-3" asChild>
                    <Link href="/login">
                      <LogOut className="h-4 w-4" />
                      Sair
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[200px] flex-col border-r bg-muted/40 lg:flex">
          <nav className="grid gap-2 p-4">
            <Link
              href="/dashboard/investor"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/investor/wallet"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Wallet className="h-4 w-4" />
              Carteira
            </Link>
            <Link
              href="/dashboard/investor/investments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <PiggyBank className="h-4 w-4" />
              Investimentos
            </Link>
            <Link
              href="/dashboard/investor/activity"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <BarChart3 className="h-4 w-4" />
              Atividade
            </Link>
            <Link
              href="/dashboard/investor/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <User className="h-4 w-4" />
              Perfil
            </Link>
            <Link
              href="/dashboard/investor/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Settings className="h-4 w-4" />
              Configurações
            </Link>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

function Bell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
