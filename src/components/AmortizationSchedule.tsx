import React, { useState, useEffect, useCallback } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'
import ScheduleImage from "../assets/images/ScheduleImage.png"
import Image from 'next/image'
import { motion} from "framer-motion"

interface AmortizationScheduleProps {
  loanAmount: number
  interestRate: number
  loanTerm: number
}

interface AmortizationEntry {
  month: number
  payment: number
  principal: number
  interest: number
  initialBalance: number
  remainingBalance: number
}

const AmortizationSchedule: React.FC<AmortizationScheduleProps> = ({ loanAmount, interestRate, loanTerm }) => {
  const [schedule, setSchedule] = useState<AmortizationEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const calculateAmortizationSchedule = useCallback((): AmortizationEntry[] => {
    try {
      const monthlyRate = interestRate / 100 / 12
      const totalMonths = loanTerm * 12
      const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)

      let initialBalance = loanAmount
      let remainingBalance = loanAmount
      const schedule: AmortizationEntry[] = []

      for (let month = 1; month <= totalMonths; month++) {
        const interest = remainingBalance * monthlyRate
        const principal = monthlyPayment - interest
        initialBalance = remainingBalance
        remainingBalance -= principal

        schedule.push({
          month,
          payment: monthlyPayment,
          principal,
          interest,
          initialBalance,
          remainingBalance,
        })
      }

      return schedule
    } catch (error) {
      console.error("Error calculating amortization schedule:", error)
      throw new Error("Failed to calculate amortization schedule. Please check your input values.")
    }
  }, [loanAmount, interestRate, loanTerm])

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    try {
      const newSchedule = calculateAmortizationSchedule()
      setSchedule(newSchedule)
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }, [calculateAmortizationSchedule])

  if (isLoading) {
    return (
      <Card className="mt-6">
        <CardContent className="flex items-center justify-center h-40">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="mt-6">
        <CardContent className="text-center text-red-500 p-4">
          {error}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mt-6 border-2 border-black">
      <CardHeader className='bg-black rounded-md rounded-b-none'>
        <CardTitle className="text-2xl text-white flex justify-between items-center relative">
          <div>
            <p>Amortization Schedule</p>
            <p className='text-[16px] font-medium'>({loanTerm} years x 12 = {loanTerm * 12} months)</p>
          </div>

          {/* MoneyManagement Image*/}
          <motion.div className="absolute -right-[1%] hidden sm:block" 
            drag dragSnapToOrigin
             >
              <Image
                src={ScheduleImage}
                alt="Illustration of home loan concept"
                width={100}
                height={25}
                className=""
                draggable="false"
              />
          </motion.div>
          
        </CardTitle>
      </CardHeader>

      <CardContent className='w-full px-0 py-0'>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className=''>
                <TableHead className="text-center text-black font-semibold border border-gray-400">Month</TableHead>
                <TableHead className="text-center text-black font-semibold border border-gray-400">Initial Balance</TableHead>
                <TableHead className="text-center text-black font-semibold border border-gray-400">Payment</TableHead>
                <TableHead className="text-center text-black font-semibold border border-gray-400">Principal</TableHead>
                <TableHead className="text-center text-black font-semibold border border-gray-400">Interest</TableHead>
                <TableHead className="text-center text-black font-semibold border border-gray-400">Remaining Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((entry) => (
                <TableRow className="text-center" key={entry.month}>
                  <TableCell className='border border-gray-400 border-l-0'>{entry.month}</TableCell>
                  <TableCell className="text-center border border-gray-400">RM {(entry.initialBalance.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                  <TableCell className="text-center border border-gray-400">RM {(entry.payment.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                  <TableCell className="text-center border border-gray-400">RM {(entry.principal.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                  <TableCell className="text-center border border-gray-400">RM {(entry.interest.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                  <TableCell className="text-center border border-gray-400 border-r-0">RM {(entry.remainingBalance.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default AmortizationSchedule