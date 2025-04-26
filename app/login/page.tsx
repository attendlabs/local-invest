"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation" // Importar useRouter
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter() // Inicializar o router

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Obter os dados do formulário
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email")?.toString()

      // Simulando uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Lógica de redirecionamento com base no e-mail
      if (email === "admin@investor.com") {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o dashboard de investidores.",
        })
        router.push("/dashboard/investor")
      } else if (email === "admin@project.com") {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o dashboard de projetos.",
        })
        router.push("/dashboard/project")
      } else {
        // Caso o e-mail não seja reconhecido
        throw new Error("E-mail não autorizado")
      }
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: "E-mail ou senha incorretos. Tente novamente.",
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
            <CardTitle>Entrar na plataforma</CardTitle>
            <CardDescription>Acesse sua conta para investir ou gerenciar seus projetos</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                Criar conta
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}