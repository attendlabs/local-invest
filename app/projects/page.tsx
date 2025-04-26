import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      title: "Cooperativa Agrícola Vale Verde",
      description: "Expansão de sistema de irrigação para pequenos produtores",
      image: "/fazenda-sustentavel-diversificada.png",
      goal: 10000,
      raised: 6500,
      category: "Agricultura",
      location: "Interior de São Paulo",
      returnRate: "10% em 12 meses",
      impact: "5 empregos diretos e suporte a 12 famílias",
    },
    {
      id: "2",
      title: "Café Comunitário Sabor Local",
      description: "Expansão do espaço e compra de novos equipamentos",
      image: "/cozy-community-cafe.png",
      goal: 8000,
      raised: 3200,
      category: "Alimentação",
      location: "Belo Horizonte, MG",
      returnRate: "8% em 10 meses + descontos exclusivos",
      impact: "3 novos empregos e espaço cultural para comunidade",
    },
    {
      id: "3",
      title: "Festival Cultural Raízes",
      description: "Evento cultural celebrando artistas locais e tradições",
      image: "/vibrant-cultural-fusion.png",
      goal: 15000,
      raised: 9800,
      category: "Cultura",
      location: "Salvador, BA",
      returnRate: "Ingressos VIP + 5% sobre bilheteria",
      impact: "Exposição para 25 artistas locais e preservação cultural",
    },
    {
      id: "4",
      title: "Padaria Comunitária Pão Solidário",
      description: "Expansão da produção e criação de programa de capacitação",
      image: "/padaria-comunitaria-alegria.png",
      goal: 12000,
      raised: 4200,
      category: "Alimentação",
      location: "Recife, PE",
      returnRate: "9% em 14 meses + produtos semanais",
      impact: "Capacitação de 15 jovens e alimentação para comunidade local",
    },
    {
      id: "5",
      title: "Startup EcoTech Soluções Sustentáveis",
      description: "Desenvolvimento de tecnologia para reciclagem de resíduos eletrônicos",
      image: "/placeholder.svg?height=200&width=400&query=tecnologia+reciclagem+eletrônicos",
      goal: 25000,
      raised: 12500,
      category: "Tecnologia",
      location: "Florianópolis, SC",
      returnRate: "12% em 18 meses + participação em resultados",
      impact: "Redução de 5 toneladas de lixo eletrônico por mês",
    },
    {
      id: "6",
      title: "Artesanato Indígena Raízes",
      description: "Expansão da produção e comercialização de artesanato tradicional",
      image: "/placeholder.svg?height=200&width=400&query=artesanato+indígena+tradicional",
      goal: 7000,
      raised: 3500,
      category: "Cultura",
      location: "Manaus, AM",
      returnRate: "7% em 12 meses + peças exclusivas",
      impact: "Preservação cultural e renda para 8 famílias indígenas",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos Disponíveis</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubra projetos locais com impacto real e retornos atrativos
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-12 mx-auto">
        <Card className="mb-8">
          <CardContent className="p-4 sm:p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-2">
                <Input placeholder="Buscar projetos..." />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas categorias</SelectItem>
                    <SelectItem value="agriculture">Agricultura</SelectItem>
                    <SelectItem value="food">Alimentação</SelectItem>
                    <SelectItem value="culture">Cultura</SelectItem>
                    <SelectItem value="technology">Tecnologia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas localizações</SelectItem>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="mg">Minas Gerais</SelectItem>
                    <SelectItem value="ba">Bahia</SelectItem>
                    <SelectItem value="pe">Pernambuco</SelectItem>
                    <SelectItem value="sc">Santa Catarina</SelectItem>
                    <SelectItem value="am">Amazonas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center md:col-span-4">
                <Button variant="outline" size="sm" className="ml-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  Mais filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
