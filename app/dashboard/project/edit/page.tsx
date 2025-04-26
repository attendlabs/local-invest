"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, DollarSign, Info, MapPin, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"

export default function ProjectEditPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulando uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Projeto salvo com sucesso!",
        description: "Todas as alterações foram salvas.",
      })
    } catch (error) {
      toast({
        title: "Erro ao salvar projeto",
        description: "Ocorreu um erro ao salvar as alterações. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Criar Novo Projeto" text="Preencha os detalhes do seu projeto para captação">
        <Button variant="outline" asChild>
          <Link href="/dashboard/project">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
          <TabsTrigger value="financial">Financeiro</TabsTrigger>
          <TabsTrigger value="media">Mídia</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit}>
          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Detalhes do Projeto</CardTitle>
                <CardDescription>Informações básicas sobre o seu projeto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome do Projeto</Label>
                  <Input id="name" placeholder="Ex: Cooperativa Agrícola Vale Verde" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agriculture">Agricultura</SelectItem>
                      <SelectItem value="food">Alimentação</SelectItem>
                      <SelectItem value="culture">Cultura</SelectItem>
                      <SelectItem value="technology">Tecnologia</SelectItem>
                      <SelectItem value="education">Educação</SelectItem>
                      <SelectItem value="health">Saúde</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="description">Descrição Curta</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Uma descrição breve que aparecerá nos cards e listagens do projeto.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Textarea
                    id="description"
                    placeholder="Descreva seu projeto em poucas palavras (máx. 150 caracteres)"
                    maxLength={150}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="longDescription">Descrição Completa</Label>
                  <Textarea
                    id="longDescription"
                    placeholder="Descreva detalhadamente seu projeto, seus objetivos e impacto esperado"
                    className="min-h-[150px]"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="location">Localização</Label>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input id="location" placeholder="Ex: Interior de São Paulo" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Detalhes Financeiros</CardTitle>
                <CardDescription>Informações sobre a captação e retornos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="goal">Meta de Captação (R$)</Label>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input id="goal" type="number" min="1000" placeholder="Ex: 10000" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="minInvestment">Investimento Mínimo (R$)</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            O valor mínimo que um investidor pode aportar no seu projeto. Recomendamos valores a partir
                            de R$ 50.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input id="minInvestment" type="number" min="50" placeholder="Ex: 50" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="returnType">Tipo de Retorno</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de retorno" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Financeiro (% sobre o investimento)</SelectItem>
                      <SelectItem value="products">Produtos ou Serviços</SelectItem>
                      <SelectItem value="mixed">Misto (Financeiro + Produtos/Serviços)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="returnRate">Taxa de Retorno (%)</Label>
                  <Input id="returnRate" type="number" min="1" max="20" placeholder="Ex: 10" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="returnPeriod">Período de Retorno (meses)</Label>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input id="returnPeriod" type="number" min="1" max="36" placeholder="Ex: 12" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="campaignDuration">Duração da Campanha (dias)</Label>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input id="campaignDuration" type="number" min="15" max="90" placeholder="Ex: 60" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Impacto Social</CardTitle>
                <CardDescription>Descreva o impacto social do seu projeto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="impact">Descrição do Impacto</Label>
                  <Textarea
                    id="impact"
                    placeholder="Ex: 5 empregos diretos e suporte a 12 famílias"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sdgs">Objetivos de Desenvolvimento Sustentável (ODS)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione os ODS relacionados" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1. Erradicação da Pobreza</SelectItem>
                      <SelectItem value="2">2. Fome Zero</SelectItem>
                      <SelectItem value="8">8. Trabalho Decente e Crescimento Econômico</SelectItem>
                      <SelectItem value="11">11. Cidades e Comunidades Sustentáveis</SelectItem>
                      <SelectItem value="12">12. Consumo e Produção Responsáveis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Imagens e Mídia</CardTitle>
                <CardDescription>Adicione imagens e vídeos do seu projeto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="mainImage">Imagem Principal</Label>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-2 w-32 h-32 flex items-center justify-center bg-muted">
                      <span className="text-xs text-muted-foreground">Prévia da imagem</span>
                    </div>
                    <div className="flex-1">
                      <Input id="mainImage" type="file" accept="image/*" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Recomendado: 1200x800px, máximo 2MB, formatos: JPG, PNG
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="gallery">Galeria de Imagens</Label>
                  <Input id="gallery" type="file" accept="image/*" multiple />
                  <p className="text-xs text-muted-foreground">
                    Adicione até 5 imagens adicionais do seu projeto (máximo 2MB cada)
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="videoUrl">URL do Vídeo (opcional)</Label>
                  <Input id="videoUrl" placeholder="Ex: https://youtube.com/watch?v=..." />
                  <p className="text-xs text-muted-foreground">
                    Adicione um link para um vídeo do YouTube ou Vimeo sobre seu projeto
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Equipe do Projeto</CardTitle>
                <CardDescription>Adicione informações sobre a equipe responsável</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border p-4 rounded-md space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Membro da Equipe #1</h4>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="memberName1">Nome</Label>
                    <Input id="memberName1" placeholder="Ex: Maria Silva" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="memberRole1">Cargo/Função</Label>
                    <Input id="memberRole1" placeholder="Ex: Coordenadora da Cooperativa" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="memberBio1">Biografia</Label>
                    <Textarea
                      id="memberBio1"
                      placeholder="Ex: Agricultora há 15 anos e especialista em produção orgânica"
                    />
                  </div>
                </div>

                <div className="border p-4 rounded-md space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Membro da Equipe #2</h4>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="memberName2">Nome</Label>
                    <Input id="memberName2" placeholder="Ex: João Oliveira" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="memberRole2">Cargo/Função</Label>
                    <Input id="memberRole2" placeholder="Ex: Engenheiro Agrônomo" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="memberBio2">Biografia</Label>
                    <Textarea
                      id="memberBio2"
                      placeholder="Ex: Responsável pelo planejamento técnico e implementação do sistema de irrigação"
                    />
                  </div>
                </div>

                <Button type="button" variant="outline" className="w-full">
                  + Adicionar Membro da Equipe
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Riscos e Mitigações</CardTitle>
                <CardDescription>Descreva os riscos do projeto e como pretende mitigá-los</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Label htmlFor="risks">Riscos e Estratégias de Mitigação</Label>
                  <Textarea
                    id="risks"
                    placeholder="Ex: Os principais riscos incluem condições climáticas adversas que podem afetar a produção e flutuações de preço no mercado agrícola. Para mitigar esses riscos, diversificamos nossa produção e temos contratos com compradores locais."
                    className="min-h-[150px]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" type="button" asChild>
              <Link href="/dashboard/project">Cancelar</Link>
            </Button>
            <Button type="button" variant="secondary">
              Salvar como Rascunho
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Salvando..." : "Publicar Projeto"}
            </Button>
          </div>
        </form>
      </Tabs>
    </DashboardShell>
  )
}
