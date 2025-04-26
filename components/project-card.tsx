import Link from "next/link"
import { MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    goal: number
    raised: number
    category: string
    location: string
    returnRate: string
    impact: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const percentRaised = Math.round((project.raised / project.goal) * 100)

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
            {project.category}
          </span>
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            {project.location}
          </div>
        </div>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>R$ {project.raised.toLocaleString("pt-BR")}</span>
            <span>R$ {project.goal.toLocaleString("pt-BR")}</span>
          </div>
          <Progress value={percentRaised} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{percentRaised}% arrecadado</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="font-medium">Retorno esperado</p>
            <p className="text-muted-foreground">{project.returnRate}</p>
          </div>
          <div>
            <p className="font-medium">Impacto</p>
            <p className="text-muted-foreground line-clamp-2">{project.impact}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>Investir agora</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
