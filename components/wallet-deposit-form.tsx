"use client"

import { useState } from "react"
import { ArrowDown, Copy, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

export function WalletDepositForm() {
  const { toast } = useToast()
  const [amount, setAmount] = useState<number>(100)
  const [paymentMethod, setPaymentMethod] = useState<string>("pix")
  const [showQrCode, setShowQrCode] = useState<boolean>(false)

  const handleAmountChange = (value: string) => {
    const numValue = Number.parseInt(value)
    if (!isNaN(numValue) && numValue > 0) {
      setAmount(numValue)
    }
  }

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText("investlocal@exemplo.com.br")
    toast({
      title: "Chave Pix copiada!",
      description: "A chave Pix foi copiada para a área de transferência.",
    })
  }

  const handleGenerateQrCode = () => {
    setShowQrCode(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Depositar na Carteira</CardTitle>
        <CardDescription>Adicione fundos à sua carteira para investir em projetos</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showQrCode ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="amount">Valor do depósito</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                <Input
                  id="amount"
                  type="number"
                  min={1}
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
              <Label>Método de pagamento</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.4 12L20.7 4.7L19.3 3.3L12 10.6L4.7 3.3L3.3 4.7L10.6 12L3.3 19.3L4.7 20.7L12 13.4L19.3 20.7L20.7 19.3L13.4 12Z"
                        fill="currentColor"
                      />
                    </svg>
                    Pix
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <QrCode className="h-32 w-32 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-medium">Escaneie o QR Code com seu app bancário</p>
              <p className="text-sm text-muted-foreground">Valor: R$ {amount.toLocaleString("pt-BR")}</p>
            </div>
            <div className="flex items-center gap-2 bg-muted p-2 rounded-md w-full">
              <p className="text-sm flex-1 text-center">investlocal@exemplo.com.br</p>
              <Button variant="ghost" size="icon" onClick={handleCopyPixKey}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Após realizar o pagamento, o valor será creditado automaticamente em sua carteira.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!showQrCode ? (
          <Button className="w-full" onClick={handleGenerateQrCode}>
            <ArrowDown className="mr-2 h-4 w-4" />
            Depositar R$ {amount.toLocaleString("pt-BR")}
          </Button>
        ) : (
          <Button variant="outline" className="w-full" onClick={() => setShowQrCode(false)}>
            Voltar
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
