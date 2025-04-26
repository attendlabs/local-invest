import Link from "next/link"
import { Clock, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface InvestorProjectCardProps {
  investment: {
    id: string
    projectName: string
    projectImage: string
    amount: number
    date: string
    returnRate: string
    returnAmount: number
    status: string
    progress: number
    nextPayment: string
  }
}

export function InvestorProjectCard({ investment }: InvestorProjectCardProps) {
  return (
    <Card>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={investment.projectImage || "/placeholder.svg"}
          alt={investment.projectName}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-base">{investment.projectName}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>R$ {investment.amount.toLocaleString("pt-BR")}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{investment.date}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Progresso</span>
            <span className="font-medium">{investment.progress}%</span>
          </div>
          <Progress value={investment.progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-muted-foreground">Retorno esperado</p>
            <p className="font-medium">{investment.returnRate}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Próximo pagamento</p>
            <p className="font-medium">{investment.nextPayment}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs text-muted-foreground">Retorno até agora</p>
            <p className="font-medium text-green-600">+ R$ {investment.returnAmount.toLocaleString("pt-BR")}</p>
          </div>
          <div>
            <span
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                investment.status === "active"
                  ? "bg-green-100 text-green-800"
                  : investment.status === "pending"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {investment.status === "active" ? "Ativo" : investment.status === "pending" ? "Pendente" : "Concluído"}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/projects/${investment.id}`}>Ver detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
