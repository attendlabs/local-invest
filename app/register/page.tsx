"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "investor"
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const userType = formData.get("userType") as string

    try {
      // Em um cenário real, chamaríamos a server action para registrar o usuário
      // await registerUser(formData)

      // Simulando uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Cadastro realizado com sucesso!",
        description:
          userType === "investor"
            ? "Sua conta de investidor foi criada. Você já pode começar a investir em projetos."
            : "Sua conta de gestor de projetos foi criada. Você já pode cadastrar seu projeto.",
      })

      // Redirecionaria para a página inicial ou dashboard
      // router.push("/")
    } catch (error) {
      toast({
        title: "Erro ao realizar cadastro",
        description: "Ocorreu um erro ao processar seu cadastro. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-8">
      <div className="w-full max-w-md">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para página inicial
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Criar uma conta</CardTitle>
            <CardDescription>Junte-se à nossa plataforma de micro-investimentos em projetos locais</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={type} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="investor">Investidor</TabsTrigger>
                <TabsTrigger value="project">Gestor de Projeto</TabsTrigger>
              </TabsList>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="userType" value={type} />

                <TabsContent value="investor" className="space-y-4 mt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" name="cpf" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" name="phone" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="pixKey">Chave Pix (opcional)</Label>
                    <Input id="pixKey" name="pixKey" />
                    <p className="text-xs text-muted-foreground">
                      Usada apenas para recebimento de retornos dos investimentos
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="project" className="space-y-4 mt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="projectName">Nome do Projeto/Empresa</Label>
                    <Input id="projectName" name="projectName" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" name="cnpj" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contactName">Nome do Responsável</Label>
                    <Input id="contactName" name="contactName" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contactEmail">E-mail</Label>
                    <Input id="contactEmail" name="contactEmail" type="email" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contactPhone">Telefone</Label>
                    <Input id="contactPhone" name="contactPhone" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="projectDescription">Descrição do Projeto</Label>
                    <Textarea id="projectDescription" name="projectDescription" required />
                  </div>
                </TabsContent>

                <div className="mt-6">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Processando..." : "Criar conta"}
                  </Button>
                </div>
              </form>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                Entrar
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
