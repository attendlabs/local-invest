"use client"

import type React from "react"

import { useState } from "react"
import { Check, CreditCard, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"

interface InvestmentFormProps {
  projectId: string
}

export function InvestmentForm({ projectId }: InvestmentFormProps) {
  const { toast } = useToast()
  const [amount, setAmount] = useState<number>(100)
  const [paymentMethod, setPaymentMethod] = useState<string>("pix")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const handleAmountChange = (value: string) => {
    const numValue = Number.parseInt(value)
    if (!isNaN(numValue) && numValue >= 50) {
      setAmount(numValue)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Em um cenário real, chamaríamos a server action para processar o investimento
      // await investInProject({ projectId, amount, paymentMethod })

      // Simulando uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setShowSuccess(true)
      toast({
        title: "Investimento processado com sucesso!",
        description: `Seu investimento de R$ ${amount.toLocaleString("pt-BR")} foi registrado.`,
      })
    } catch (error) {
      toast({
        title: "Erro ao processar investimento",
        description: "Ocorreu um erro ao processar seu investimento. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (showSuccess) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mx-auto mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-center">Investimento Realizado!</CardTitle>
          <CardDescription className="text-center">
            Seu investimento de R$ {amount.toLocaleString("pt-BR")} foi processado com sucesso.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p>
            Você receberá um e-mail com os detalhes do seu investimento e instruções para acompanhar o progresso do
            projeto.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => setShowSuccess(false)}>Fazer outro investimento</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investir neste projeto</CardTitle>
        <CardDescription>Investimento mínimo de R$ 50</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Valor do investimento</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
              <Input
                id="amount"
                type="number"
                min={50}
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 mt-2">
              {[50, 100, 200, 500].map((value) => (
                <Button
                  key={value}
                  type="button"
                  variant={amount === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAmount(value)}
                >
                  R$ {value}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Método de pagamento</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Todos os pagamentos são processados de forma segura.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-2 gap-4">
              <div>
                <RadioGroupItem value="pix" id="pix" className="peer sr-only" />
                <Label
                  htmlFor="pix"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.4 12L20.7 4.7L19.3 3.3L12 10.6L4.7 3.3L3.3 4.7L10.6 12L3.3 19.3L4.7 20.7L12 13.4L19.3 20.7L20.7 19.3L13.4 12Z"
                      fill="currentColor"
                    />
                  </svg>
                  Pix
                </Label>
              </div>
              <div>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard className="mb-3 h-6 w-6" />
                  Cartão
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Processando..." : "Investir agora"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
