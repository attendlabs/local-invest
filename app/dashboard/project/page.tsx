import Link from "next/link"
import { ArrowUpRight, BarChart3, Clock, DollarSign, Plus, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ProjectInvestorCard } from "@/components/project-investor-card"

export default function ProjectDashboard() {
  // Dados simulados para o dashboard do gestor de projetos
  const projectData = {
    name: "Cooperativa Agrícola Vale Verde",
    totalRaised: 6500,
    goal: 10000,
    investors: 42,
    daysLeft: 18,
    startDate: "10/04/2023",
    endDate: "30/06/2023",
    status: "active",
    recentInvestors: [
      {
        id: "1",
        name: "João Silva",
        amount: 500,
        date: "15/05/2023",
        image: "/placeholder-user.jpg",
      },
      {
        id: "2",
        name: "Maria Oliveira",
        amount: 300,
        date: "12/05/2023",
        image: "/serene-woman-gaze.png",
      },
      {
        id: "3",
        name: "Carlos Santos",
        amount: 200,
        date: "10/05/2023",
        image: "/thoughtful-man-profile.png",
      },
      {
        id: "4",
        name: "Ana Pereira",
        amount: 150,
        date: "05/05/2023",
        image: "/serene-woman-profile.png",
      },
    ],
    updates: [
      {
        id: "1",
        title: "Início da captação",
        content: "Começamos hoje nossa campanha de captação para o novo sistema de irrigação!",
        date: "10/04/2023",
      },
      {
        id: "2",
        title: "50% da meta atingida",
        content: "Já alcançamos metade da nossa meta! Obrigado a todos os investidores que acreditam no nosso projeto.",
        date: "25/04/2023",
      },
      {
        id: "3",
        title: "Compra de equipamentos iniciada",
        content:
          "Com os recursos já captados, iniciamos a compra dos primeiros equipamentos para o sistema de irrigação.",
        date: "15/05/2023",
      },
    ],
    otherProjects: [
      {
        id: "2",
        name: "Expansão da Produção Orgânica",
        raised: 3200,
        goal: 8000,
        investors: 25,
        status: "draft",
      },
    ],
  }

  const percentRaised = Math.round((projectData.totalRaised / projectData.goal) * 100)

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard do Projeto" text="Gerencie seu projeto e acompanhe o progresso da captação">
        <Button asChild>
          <Link href="/dashboard/project/edit">
            <Plus className="mr-2 h-4 w-4" />
            Novo Projeto
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Captado</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {projectData.totalRaised.toLocaleString("pt-BR")}</div>
            <div className="mt-1 flex items-center space-x-2">
              <Progress value={percentRaised} className="h-2" />
              <span className="text-xs font-medium">{percentRaised}%</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investidores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.investors}</div>
            <p className="text-xs text-muted-foreground">
              Média de R$ {Math.round(projectData.totalRaised / projectData.investors).toLocaleString("pt-BR")} por
              investidor
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dias Restantes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.daysLeft}</div>
            <p className="text-xs text-muted-foreground">Encerra em {projectData.endDate}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meta</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {projectData.goal.toLocaleString("pt-BR")}</div>
            <p className="text-xs text-muted-foreground">
              Faltam R$ {(projectData.goal - projectData.totalRaised).toLocaleString("pt-BR")}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="investors" className="space-y-4">
        <TabsList>
          <TabsTrigger value="investors">Investidores</TabsTrigger>
          <TabsTrigger value="updates">Atualizações</TabsTrigger>
          <TabsTrigger value="projects">Meus Projetos</TabsTrigger>
        </TabsList>
        <TabsContent value="investors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investidores Recentes</CardTitle>
              <CardDescription>Lista dos últimos investidores do seu projeto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.recentInvestors.map((investor) => (
                  <ProjectInvestorCard key={investor.id} investor={investor} />
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/project/investors">
                  Ver todos os investidores
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="updates" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Atualizações do Projeto</CardTitle>
                <CardDescription>Mantenha seus investidores informados sobre o progresso</CardDescription>
              </div>
              <Button size="sm">Nova Atualização</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.updates.map((update) => (
                  <div key={update.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{update.title}</h4>
                      <span className="text-xs text-muted-foreground">{update.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{update.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{projectData.name}</CardTitle>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">
                    Ativo
                  </span>
                </div>
                <CardDescription>Captação em andamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>R$ {projectData.totalRaised.toLocaleString("pt-BR")}</span>
                    <span>R$ {projectData.goal.toLocaleString("pt-BR")}</span>
                  </div>
                  <Progress value={percentRaised} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{percentRaised}% arrecadado</span>
                    <span>{projectData.investors} investidores</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/project/edit/1">Editar</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/projects/1">Ver página</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{projectData.otherProjects[0].name}</CardTitle>
                  <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full">
                    Rascunho
                  </span>
                </div>
                <CardDescription>Projeto em preparação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>R$ {projectData.otherProjects[0].raised.toLocaleString("pt-BR")}</span>
                    <span>R$ {projectData.otherProjects[0].goal.toLocaleString("pt-BR")}</span>
                  </div>
                  <Progress
                    value={(projectData.otherProjects[0].raised / projectData.otherProjects[0].goal) * 100}
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      {Math.round((projectData.otherProjects[0].raised / projectData.otherProjects[0].goal) * 100)}%
                      arrecadado
                    </span>
                    <span>{projectData.otherProjects[0].investors} investidores</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/project/edit/2">Editar</Link>
                </Button>
                <Button size="sm" variant="secondary">
                  Publicar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Progresso da Captação</CardTitle>
            <CardDescription>Evolução dos investimentos ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] w-full">
              <BarChart3 className="h-full w-full text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Análise de Investidores</CardTitle>
            <CardDescription>Perfil dos investidores do projeto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Novos investidores</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Investidores recorrentes</span>
                  <span className="text-sm font-medium">35%</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Investimento médio</span>
                  <span className="text-sm font-medium">R$ 154,76</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium flex-1">Região principal</span>
                  <span className="text-sm font-medium">São Paulo (72%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
