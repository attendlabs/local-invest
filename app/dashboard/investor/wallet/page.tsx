import Link from "next/link"
import { ArrowDown, ArrowUp, Clock, DollarSign, PiggyBank } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { WalletDepositForm } from "@/components/wallet-deposit-form"

export default function InvestorWalletPage() {
  // Dados simulados para a carteira do investidor
  const walletData = {
    available: 350,
    pending: 75,
    transactions: [
      {
        id: "1",
        type: "deposit",
        amount: 500,
        date: "15/04/2023",
        status: "completed",
        description: "Depósito via Pix",
      },
      {
        id: "2",
        type: "investment",
        amount: 300,
        date: "22/04/2023",
        status: "completed",
        description: "Investimento - Café Comunitário Sabor Local",
      },
      {
        id: "3",
        type: "return",
        amount: 25,
        date: "01/05/2023",
        status: "completed",
        description: "Retorno - Cooperativa Agrícola Vale Verde",
      },
      {
        id: "4",
        type: "investment",
        amount: 200,
        date: "05/05/2023",
        status: "completed",
        description: "Investimento - Festival Cultural Raízes",
      },
      {
        id: "5",
        type: "return",
        amount: 12,
        date: "22/05/2023",
        status: "completed",
        description: "Retorno - Café Comunitário Sabor Local",
      },
      {
        id: "6",
        type: "return",
        amount: 25,
        date: "01/06/2023",
        status: "completed",
        description: "Retorno - Cooperativa Agrícola Vale Verde",
      },
      {
        id: "7",
        type: "withdrawal",
        amount: 100,
        date: "10/06/2023",
        status: "pending",
        description: "Saque para conta bancária",
      },
    ],
    scheduledReturns: [
      {
        id: "1",
        projectName: "Padaria Comunitária Pão Solidário",
        amount: 22.5,
        date: "10/06/2023",
      },
      {
        id: "2",
        projectName: "Cooperativa Agrícola Vale Verde",
        amount: 25,
        date: "01/07/2023",
      },
      {
        id: "3",
        projectName: "Café Comunitário Sabor Local",
        amount: 12,
        date: "22/07/2023",
      },
    ],
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Minha Carteira" text="Gerencie seu saldo e acompanhe suas transações">
        <Button asChild>
          <Link href="/dashboard/investor/wallet/withdraw">
            <ArrowUp className="mr-2 h-4 w-4" />
            Sacar
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {walletData.available.toLocaleString("pt-BR")}</div>
            <p className="text-xs text-muted-foreground">Disponível para investir ou sacar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Pendente</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {walletData.pending.toLocaleString("pt-BR")}</div>
            <p className="text-xs text-muted-foreground">Em processamento</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximos Retornos</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {walletData.scheduledReturns.reduce((acc, item) => acc + item.amount, 0).toLocaleString("pt-BR")}
            </div>
            <p className="text-xs text-muted-foreground">Nos próximos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <WalletDepositForm />

        <Card>
          <CardHeader>
            <CardTitle>Próximos Retornos</CardTitle>
            <CardDescription>Pagamentos programados dos seus investimentos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {walletData.scheduledReturns.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{item.projectName}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+ R$ {item.amount.toLocaleString("pt-BR")}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todas Transações</TabsTrigger>
          <TabsTrigger value="deposits">Depósitos</TabsTrigger>
          <TabsTrigger value="investments">Investimentos</TabsTrigger>
          <TabsTrigger value="returns">Retornos</TabsTrigger>
          <TabsTrigger value="withdrawals">Saques</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Transações</CardTitle>
              <CardDescription>Todas as movimentações da sua carteira</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletData.transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-full p-2 ${
                          transaction.type === "deposit" || transaction.type === "return"
                            ? "bg-green-100"
                            : transaction.type === "investment" || transaction.type === "withdrawal"
                              ? "bg-red-100"
                              : "bg-gray-100"
                        }`}
                      >
                        {transaction.type === "deposit" ? (
                          <ArrowDown className="h-4 w-4 text-green-600" />
                        ) : transaction.type === "return" ? (
                          <PiggyBank className="h-4 w-4 text-green-600" />
                        ) : transaction.type === "investment" ? (
                          <ArrowUp className="h-4 w-4 text-red-600" />
                        ) : (
                          <ArrowUp className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-medium ${
                          transaction.type === "deposit" || transaction.type === "return"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.type === "deposit" || transaction.type === "return" ? "+" : "-"} R${" "}
                        {transaction.amount.toLocaleString("pt-BR")}
                      </p>
                      <p
                        className={`text-xs ${
                          transaction.status === "completed"
                            ? "text-green-600"
                            : transaction.status === "pending"
                              ? "text-amber-600"
                              : "text-red-600"
                        }`}
                      >
                        {transaction.status === "completed"
                          ? "Concluído"
                          : transaction.status === "pending"
                            ? "Pendente"
                            : "Falhou"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver mais transações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="deposits">
          <Card>
            <CardHeader>
              <CardTitle>Depósitos</CardTitle>
              <CardDescription>Histórico de depósitos na sua carteira</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletData.transactions
                  .filter((t) => t.type === "deposit")
                  .map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-2 bg-green-100">
                          <ArrowDown className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+ R$ {transaction.amount.toLocaleString("pt-BR")}</p>
                        <p
                          className={`text-xs ${
                            transaction.status === "completed"
                              ? "text-green-600"
                              : transaction.status === "pending"
                                ? "text-amber-600"
                                : "text-red-600"
                          }`}
                        >
                          {transaction.status === "completed"
                            ? "Concluído"
                            : transaction.status === "pending"
                              ? "Pendente"
                              : "Falhou"}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="investments">
          <Card>
            <CardHeader>
              <CardTitle>Investimentos</CardTitle>
              <CardDescription>Histórico de investimentos realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletData.transactions
                  .filter((t) => t.type === "investment")
                  .map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-2 bg-red-100">
                          <ArrowUp className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">- R$ {transaction.amount.toLocaleString("pt-BR")}</p>
                        <p
                          className={`text-xs ${
                            transaction.status === "completed"
                              ? "text-green-600"
                              : transaction.status === "pending"
                                ? "text-amber-600"
                                : "text-red-600"
                          }`}
                        >
                          {transaction.status === "completed"
                            ? "Concluído"
                            : transaction.status === "pending"
                              ? "Pendente"
                              : "Falhou"}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="returns">
          <Card>
            <CardHeader>
              <CardTitle>Retornos</CardTitle>
              <CardDescription>Histórico de retornos recebidos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletData.transactions
                  .filter((t) => t.type === "return")
                  .map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-2 bg-green-100">
                          <PiggyBank className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+ R$ {transaction.amount.toLocaleString("pt-BR")}</p>
                        <p
                          className={`text-xs ${
                            transaction.status === "completed"
                              ? "text-green-600"
                              : transaction.status === "pending"
                                ? "text-amber-600"
                                : "text-red-600"
                          }`}
                        >
                          {transaction.status === "completed"
                            ? "Concluído"
                            : transaction.status === "pending"
                              ? "Pendente"
                              : "Falhou"}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="withdrawals">
          <Card>
            <CardHeader>
              <CardTitle>Saques</CardTitle>
              <CardDescription>Histórico de saques realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {walletData.transactions
                  .filter((t) => t.type === "withdrawal")
                  .map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-2 bg-red-100">
                          <ArrowUp className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">- R$ {transaction.amount.toLocaleString("pt-BR")}</p>
                        <p
                          className={`text-xs ${
                            transaction.status === "completed"
                              ? "text-green-600"
                              : transaction.status === "pending"
                                ? "text-amber-600"
                                : "text-red-600"
                          }`}
                        >
                          {transaction.status === "completed"
                            ? "Concluído"
                            : transaction.status === "pending"
                              ? "Pendente"
                              : "Falhou"}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
