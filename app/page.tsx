import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Map, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ProjectCard from "@/components/project-card"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  const featuredProjects = [
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
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="container px-4 py-12 md:py-24 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como funciona</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Investir em projetos locais nunca foi tão fácil e acessível
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Cadastre-se</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Crie sua conta como investidor ou gestor de projetos em poucos minutos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Map className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Explore Projetos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Descubra projetos locais com impacto real na sua comunidade.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Invista e Acompanhe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Invista a partir de R$50 via Pix e acompanhe o progresso do seu investimento.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-24 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos em Destaque</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Conheça alguns dos projetos que estão buscando investimento
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/projects">
              Ver todos os projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-24 mx-auto bg-muted/40 rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que investir conosco?</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Benefícios para investidores e projetos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Para Investidores</CardTitle>
              <CardDescription>Benefícios para quem investe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <p>Retornos financeiros atrativos (8-15% ao ano)</p>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <p>Investimentos a partir de R$50 com segurança</p>
              </div>
              <div className="flex items-center gap-2">
                <Map className="h-5 w-5 text-primary" />
                <p>Impacto direto na sua comunidade</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/register?type=investor">Cadastre-se como Investidor</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Para Projetos</CardTitle>
              <CardDescription>Benefícios para quem busca investimento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <p>Acesso a capital sem burocracia</p>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <p>Visibilidade para seu negócio ou iniciativa</p>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <p>Suporte na estruturação do projeto</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/register?type=project">Cadastre seu Projeto</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
