"use client"

import * as React from "react"
import { BadgeDollarSign } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"



// Props typing
interface PieChartProps {
  loanAmount: number;
  results: {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  };
}

export default function CalculationPieChart({ loanAmount, results }: PieChartProps) {

  const chartConfig = {
    total: {
      label: "Total",
    },
    principal: {
      label: "Principal",
      color: "hsl(var(--chart-1))",
    },
    interest: {
      label: "Interest",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  const chartData = [
    { item: "principal", amount: parseFloat(loanAmount.toFixed(2)), fill: "#D433F8" },
    { item: "interest", amount: parseFloat(results.totalInterest.toFixed(2)), fill: "#47FFDF" },
  ]

  return (
    <Card className="flex flex-col border-2 border-black">
      {/* <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}


      <CardContent className="flex flex-col lg:grid lg:grid-cols-[50%_50%] pb-0">
        <div className="flex justify-center lg:justify-start">
          <ChartContainer
            config={chartConfig}
            className="aspect-square min-h-[280px] max-h-[600px] mx-auto"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="item"
                innerRadius={0}
                strokeWidth={5}
              >   
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        {/* Pricipal, Interest, and Total */}
        <div className="flex flex-col text-center items-center lg:items-start gap-6 lg:mt-8">
          
          {/* Principal */}
          <div className="text-left border border-gray-300 shadow-lg p-4 rounded-md w-full">
            <div className="flex justify-center items-center gap-2 lg:justify-start">
              <div className="h-4 w-4 rounded-full bg-[#D433F8]" />
              <span className="sm:text-xl">Principal</span>
            </div>

            <div className="font-bold sm:text-xl mt-2 justify-center items-center lg:text-left sm:flex text-center lg:justify-start">
              <p>RM {loanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  </p> 
              <span className="ml-2 sm:text-xl">
                ({((loanAmount / results.totalPayment) * 100).toFixed(2)}%)
              </span>
            </div>
          </div>

          {/* Interest */}
          <div className="text-left border border-gray-300 shadow-lg p-4 rounded-md w-full">
            <div className="flex justify-center lg:justify-start items-center gap-2 sm:justify-left">
              <div className="h-4 w-4 rounded-full bg-[#47FFDF]" />
              <span className="sm:text-xl">Interest</span>
            </div>
            
            <div className="font-bold sm:text-xl mt-2 text-center lg:text-left justify-center items-center sm:flex lg:justify-start">
              <p>RM {results.totalInterest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              <span className="ml-2 sm:text-xl">
                ({((results.totalInterest / results.totalPayment) * 100).toFixed(2)}%)
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="text-left border border-gray-300 shadow-lg p-4 rounded-md w-full">
            <div className="flex items-center gap-1 lg:justify-start justify-center">
              <BadgeDollarSign />
              <span className="sm:text-xl">Total</span>
            </div>
            
            <div className="font-bold sm:text-xl mt-2 text-center lg:text-left justify-center items-center sm:flex lg:justify-start">
              RM {results.totalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>

        </div>
      </CardContent>


      <CardFooter className="flex justify-between">
        
      </CardFooter>

      
    </Card>
  )
}
