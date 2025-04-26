import { ArrowLeft, Download, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProjectInvestorsPage() {
  // Dados simulados para a lista de investidores
  const investorsData = [
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@exemplo.com",
      amount: 500,
      date: "15/05/2023",
      image: "/placeholder-user.jpg",
      status: "active",
    },
    {
      id: "2",
      name: "Maria Oliveira",
      email: "maria.oliveira@exemplo.com",
      amount: 300,
      date: "12/05/2023",
      image: "/serene-woman-gaze.png",
      status: "active",
    },
    {
      id: "3",
      name: "Carlos Santos",
      email: "carlos.santos@exemplo.com",
      amount: 200,
      date: "10/05/2023",
      image: "/thoughtful-man-profile.png",
      status: "active",
    },
    {
      id: "4",
      name: "Ana Pereira",
      email: "ana.pereira@exemplo.com",
      amount: 150,
      date: "05/05/2023",
      image: "/serene-woman-profile.png",
      status: "active",
    },
    {
      id: "5",
      name: "Roberto Almeida",
      email: "roberto.almeida@exemplo.com",
      amount: 1000,
      date: "01/05/2023",
      image: "/contemplative-man-profile.png",
      status: "active",
    },
    {
      id: "6",
      name: "Juliana Costa",
      email: "juliana.costa@exemplo.com",
      amount: 250,
      date: "28/04/2023",
      image: "/serene-woman-profile.png",
      status: "active",
    },
    {
      id: "7",
      name: "Fernando Gomes",
      email: "fernando.gomes@exemplo.com",
      amount: 500,
      date: "25/04/2023",
      image: "/contemplative-man-profile.png",
      status: "active",
    },
    {
      id: "8",
      name: "Patrícia Lima",
      email: "patricia.lima@exemplo.com",
      amount: 100,
      date: "20/04/2023",
      image: "/thoughtful-gaze.png",
      status: "active",
    },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Investidores do Projeto" text="Cooperativa Agrícola Vale Verde">
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/project">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar CSV
          </Button>
        </div>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Investidores</CardTitle>
          <CardDescription>Total de 42 investidores, R$ 6.500 captados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar investidor..." className="pl-8" />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Ativos</SelectItem>
                <SelectItem value="pending">Pendentes</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="date-desc">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Data (mais recente)</SelectItem>
                <SelectItem value="date-asc">Data (mais antiga)</SelectItem>
                <SelectItem value="amount-desc">Valor (maior)</SelectItem>
                <SelectItem value="amount-asc">Valor (menor)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-md">
            <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
              <div className="col-span-2">Investidor</div>
              <div className="text-right">Valor</div>
              <div className="text-right">Data</div>
              <div className="text-right">Status</div>
            </div>
            <div className="divide-y">
              {investorsData.map((investor) => (
                <div key={investor.id} className="grid grid-cols-5 gap-4 p-4 items-center">
                  <div className="col-span-2 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={investor.image || "/placeholder.svg"} alt={investor.name} />
                      <AvatarFallback>{investor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{investor.name}</div>
                      <div className="text-sm text-muted-foreground">{investor.email}</div>
                    </div>
                  </div>
                  <div className="text-right font-medium">R$ {investor.amount.toLocaleString("pt-BR")}</div>
                  <div className="text-right text-muted-foreground">{investor.date}</div>
                  <div className="text-right">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        investor.status === "active"
                          ? "bg-green-100 text-green-800"
                          : investor.status === "pending"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {investor.status === "active" ? "Ativo" : investor.status === "pending" ? "Pendente" : "Inativo"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Mostrando <span className="font-medium">1</span> a <span className="font-medium">8</span> de{" "}
              <span className="font-medium">42</span> resultados
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
