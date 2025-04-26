import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InvestmentForm } from "@/components/investment-form"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Em um cenário real, buscaríamos os dados do projeto do banco de dados
  const project = {
    id: params.id,
    title: "Cooperativa Agrícola Vale Verde",
    description:
      "A Cooperativa Agrícola Vale Verde é uma iniciativa que reúne pequenos produtores rurais da região interior de São Paulo. Nosso objetivo é expandir o sistema de irrigação atual para aumentar a produtividade e sustentabilidade das plantações.",
    longDescription:
      "A Cooperativa Agrícola Vale Verde foi fundada em 2018 por um grupo de 12 famílias de pequenos agricultores que buscavam alternativas para enfrentar os desafios da agricultura familiar. Atualmente, produzimos hortaliças orgânicas, frutas e grãos que são comercializados em feiras locais e para pequenos mercados da região.\n\nCom o investimento, pretendemos implementar um sistema de irrigação por gotejamento que reduzirá o consumo de água em 40% e aumentará a produtividade em até 30%. Isso permitirá que ampliemos nossa produção e alcancemos novos mercados, gerando mais renda para as famílias e criando novos postos de trabalho.",
    image: "/placeholder.svg?height=400&width=800&query=fazenda+agricultura+sustentável+cooperativa",
    gallery: [
      "/placeholder.svg?height=200&width=300&query=agricultura+familiar+plantação",
      "/placeholder.svg?height=200&width=300&query=sistema+irrigação+sustentável",
      "/placeholder.svg?height=200&width=300&query=cooperativa+agricultores+trabalhando",
    ],
    goal: 10000,
    raised: 6500,
    investors: 42,
    daysLeft: 18,
    category: "Agricultura",
    location: "Interior de São Paulo",
    returnRate: "10% em 12 meses",
    impact: "5 empregos diretos e suporte a 12 famílias",
    team: [
      {
        name: "Maria Silva",
        role: "Coordenadora da Cooperativa",
        bio: "Agricultora há 15 anos e especialista em produção orgânica",
      },
      {
        name: "João Oliveira",
        role: "Engenheiro Agrônomo",
        bio: "Responsável pelo planejamento técnico e implementação do sistema de irrigação",
      },
    ],
    updates: [
      {
        date: "10/04/2023",
        title: "Início da captação",
        content: "Começamos hoje nossa campanha de captação para o novo sistema de irrigação!",
      },
      {
        date: "25/04/2023",
        title: "50% da meta atingida",
        content: "Já alcançamos metade da nossa meta! Obrigado a todos os investidores que acreditam no nosso projeto.",
      },
    ],
    risks:
      "Os principais riscos incluem condições climáticas adversas que podem afetar a produção e flutuações de preço no mercado agrícola. Para mitigar esses riscos, diversificamos nossa produção e temos contratos com compradores locais.",
  }

  const percentRaised = Math.round((project.raised / project.goal) * 100)

  return (
    <div className="container px-4 py-8 mx-auto">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para projetos
        </Link>
      </Button>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-full w-full object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {project.location}
              </div>
              <div className="text-sm font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                {project.category}
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">{project.description}</p>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="team">Equipe</TabsTrigger>
              <TabsTrigger value="updates">Atualizações</TabsTrigger>
              <TabsTrigger value="risks">Riscos</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <p className="whitespace-pre-line">{project.longDescription}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`Imagem ${index + 1} do projeto`}
                      className="rounded-md object-cover aspect-video"
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="team" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                {project.team.map((member, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="updates" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                {project.updates.map((update, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{update.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {update.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{update.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="risks" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Riscos e Mitigações</h3>
                <p>{project.risks}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Investimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>R$ {project.raised.toLocaleString("pt-BR")}</span>
                  <span>R$ {project.goal.toLocaleString("pt-BR")}</span>
                </div>
                <Progress value={percentRaised} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{percentRaised}% arrecadado</span>
                  <span>Meta: R$ {project.goal.toLocaleString("pt-BR")}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex flex-col items-center p-3 bg-muted/50 rounded-lg">
                  <Users className="h-5 w-5 text-primary mb-1" />
                  <span className="text-lg font-bold">{project.investors}</span>
                  <span className="text-xs text-muted-foreground">Investidores</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary mb-1" />
                  <span className="text-lg font-bold">{project.daysLeft}</span>
                  <span className="text-xs text-muted-foreground">Dias restantes</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-medium">Retorno esperado</span>
                </div>
                <p className="text-sm">{project.returnRate}</p>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">Impacto social</span>
                </div>
                <p className="text-sm">{project.impact}</p>
              </div>
            </CardContent>
          </Card>

          <InvestmentForm projectId={project.id} />
        </div>
      </div>
    </div>
  )
}
