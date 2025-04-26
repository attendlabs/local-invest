import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProjectInvestorCardProps {
  investor: {
    id: string
    name: string
    amount: number
    date: string
    image: string
  }
}

export function ProjectInvestorCard({ investor }: ProjectInvestorCardProps) {
  return (
    <div className="flex items-center justify-between border-b pb-4 last:border-0">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={investor.image || "/placeholder.svg"} alt={investor.name} />
          <AvatarFallback>{investor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{investor.name}</p>
          <p className="text-sm text-muted-foreground">{investor.date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">R$ {investor.amount.toLocaleString("pt-BR")}</p>
      </div>
    </div>
  )
}
