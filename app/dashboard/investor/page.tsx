import Link from "next/link"
import { ArrowUpRight, BarChart3, Clock, DollarSign, PiggyBank, Plus, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InvestorProjectCard } from "@/components/investor-project-card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default function InvestorDashboard() {
  // Dados simulados para o dashboard do investidor
  const investorData = {
    name: "João Silva",
    totalInvested: 1250,
    totalReturn: 125,
    returnRate: 10,
    activeInvestments: 5,
    wallet: {
      available: 350,
      pending: 75,
    },
    investments: [
      {
        id: "1",
        projectName: "Cooperativa Agrícola Vale Verde",
        projectImage: "/fazenda-sustentavel-diversificada.png",
        amount: 500,
        date: "15/03/2023",
        returnRate: "10% em 12 meses",
        returnAmount: 50,
        status: "active",
        progress: 65,
        nextPayment: "15/06/2023",
      },
      {
        id: "2",
        projectName: "Café Comunitário Sabor Local",
        projectImage: "/cozy-community-cafe.png",
        amount: 300,
        date: "22/04/2023",
        returnRate: "8% em 10 meses",
        returnAmount: 24,
        status: "active",
        progress: 40,
        nextPayment: "22/07/2023",
      },
      {
        id: "3",
        projectName: "Festival Cultural Raízes",
        projectImage: "/vibrant-cultural-fusion.png",
        amount: 200,
        date: "05/05/2023",
        returnRate: "Ingressos VIP + 5% sobre bilheteria",
        returnAmount: 10,
        status: "active",
        progress: 65,
        nextPayment: "05/08/2023",
      },
      {
        id: "4",
        projectName: "Padaria Comunitária Pão Solidário",
        projectImage: "/padaria-comunitaria-alegria.png",
        amount: 250,
        date: "10/02/2023",
        returnRate: "9% em 14 meses",
        returnAmount: 22.5,
        status: "active",
        progress: 35,
        nextPayment: "10/06/2023",
      },
    ],
    recommendedProjects: [
      {
        id: "5",
        title: "Startup EcoTech Soluções Sustentáveis",
        image: "/electronic-recycling-future.png",
        description: "Desenvolvimento de tecnologia para reciclagem de resíduos eletrônicos",
        goal: 25000,
        raised: 12500,
        returnRate: "12% em 18 meses",
        match: 95,
      },
      {
        id: "6",
        title: "Artesanato Indígena Raízes",
        image: "/indigenous-craftsmanship.png",
        description: "Expansão da produção e comercialização de artesanato tradicional",
        goal: 7000,
        raised: 3500,
        returnRate: "7% em 12 meses",
        match: 88,
      },
    ],
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard do Investidor" text="Gerencie seus investimentos e acompanhe seus retornos">
        <Button asChild>
          <Link href="/projects">
            <Plus className="mr-2 h-4 w-4" />
            Novo Investimento
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {investorData.totalInvested.toLocaleString("pt-BR")}</div>
            <p className="text-xs text-muted-foreground">em {investorData.activeInvestments} projetos ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retorno Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {investorData.totalReturn.toLocaleString("pt-BR")}</div>
            <p className="text-xs text-muted-foreground">Taxa média de {investorData.returnRate}% ao ano</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {investorData.wallet.available.toLocaleString("pt-BR")}</div>
            <p className="text-xs text-muted-foreground">
              + R$ {investorData.wallet.pending.toLocaleString("pt-BR")} pendentes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Pagamento</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10/06/2023</div>
            <p className="text-xs text-muted-foreground">R$ 22,50 - Padaria Comunitária</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="investments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="investments">Meus Investimentos</TabsTrigger>
          <TabsTrigger value="recommended">Recomendados para Você</TabsTrigger>
          <TabsTrigger value="activity">Atividade Recente</TabsTrigger>
        </TabsList>
        <TabsContent value="investments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {investorData.investments.map((investment) => (
              <InvestorProjectCard key={investment.id} investment={investment} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recommended" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {investorData.recommendedProjects.map((project) => (
              <Card key={project.id}>
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="line-clamp-1 text-base">{project.title}</CardTitle>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                      {project.match}% match
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>R$ {project.raised.toLocaleString("pt-BR")}</span>
                      <span>R$ {project.goal.toLocaleString("pt-BR")}</span>
                    </div>
                    <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Retorno esperado: </span>
                    {project.returnRate}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/projects/${project.id}`}>Ver detalhes</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>Histórico das suas últimas transações e atualizações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Retorno recebido</p>
                  <p className="text-sm text-muted-foreground">Cooperativa Agrícola Vale Verde</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-600">+ R$ 25,00</span>
                  <span className="text-xs text-muted-foreground">01/06/2023</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Novo investimento</p>
                  <p className="text-sm text-muted-foreground">Festival Cultural Raízes</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-red-600">- R$ 200,00</span>
                  <span className="text-xs text-muted-foreground">05/05/2023</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Retorno recebido</p>
                  <p className="text-sm text-muted-foreground">Café Comunitário Sabor Local</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-600">+ R$ 12,00</span>
                  <span className="text-xs text-muted-foreground">22/04/2023</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Novo investimento</p>
                  <p className="text-sm text-muted-foreground">Café Comunitário Sabor Local</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-red-600">- R$ 300,00</span>
                  <span className="text-xs text-muted-foreground">22/04/2023</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Depósito na carteira</p>
                  <p className="text-sm text-muted-foreground">Via Pix</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-600">+ R$ 500,00</span>
                  <span className="text-xs text-muted-foreground">15/04/2023</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/investor/activity">
                  Ver todo histórico
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Desempenho dos Investimentos</CardTitle>
            <CardDescription>Retorno acumulado nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] w-full">
              <BarChart3 className="h-full w-full text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Impacto Social</CardTitle>
            <CardDescription>Contribuição para a comunidade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Empregos gerados</span>
                  <span className="text-sm font-medium">13</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Famílias beneficiadas</span>
                  <span className="text-sm font-medium">27</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Projetos sustentáveis</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Iniciativas culturais</span>
                  <span className="text-sm font-medium">2</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
