import React from 'react'
import { Card, CardContent, } from "@/components/ui/card"
import { BadgeDollarSign, CalendarClock, ChartPie, InfoIcon as InfoCircle } from 'lucide-react'
import { BadgeIcon as PercentIcon } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import BankCards from './BankCards'
import GaugeChart from 'react-gauge-chart'
  
  

interface BankCardsProps {
    employmentStatus: string;
    propertyValue: number;
    totalYearlyIncome: number;
    loanTenure: number;
    totalMonthlyCommitments: number;
}


const EligibilityMeter: React.FC<BankCardsProps> = ({
  employmentStatus,
  propertyValue,
  totalYearlyIncome,
  loanTenure,
  totalMonthlyCommitments
}) => {
  
    //Calculate Loan Eligibility
    const calculateLoanEligibility = (interestRate:number) => {
    
        // Convert yearly income to monthly for DSR calculation
        const monthlyIncome = totalYearlyIncome / 12

        // Calculate DSR (Debt Service Ratio)
        const debtServiceRatio = (totalMonthlyCommitments / monthlyIncome) * 100

        // Calculate maximum tenure based on age
        //const maxAge = 70
        //const maxTenure = Math.min(35, maxAge - inputs.age)

        // Calculate LTV (Loan to Value) ratio
        // Malaysian standard: 90% for properties up to RM500k
        let loanToValue = 0.00
        if (employmentStatus === 'commisionEarner'){
            loanToValue = 0.7
        }else if (propertyValue <= 500000){
            loanToValue = 0.9
        } else{
            loanToValue = 0.8
        }
        

        // Calculate maximum loan amount based on property value and LTV
        const maxLoanByValue = propertyValue * loanToValue

        // Calculate monthly installment using PMT formula
        const monthlyInterest = interestRate / 100 / 12
        const totalPayments = loanTenure * 12
        
        // PMT formula: PMT = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
        //const monthlyInstallment = (maxLoanByValue * (monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments))) / (Math.pow(1 + monthlyInterest, totalPayments) - 1)

        // Calculate maximum loan amount based on DSR
        // Malaysian standard: Maximum DSR typically 70%
        let maxMonthlyPayment = (monthlyIncome * 0.7) - totalMonthlyCommitments
        const maxLoanByDSR = (maxMonthlyPayment * (Math.pow(1 + monthlyInterest, totalPayments) - 1)) /
                            (monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments))

        // Final eligible amount is the lower of the two calculations
        let  eligibilityAmount = Math.min(maxLoanByValue, maxLoanByDSR)

        if(eligibilityAmount <= 0){
            eligibilityAmount = 0
        }

        if(maxMonthlyPayment <= 0){
            maxMonthlyPayment = 0
        }

        let gaugePercentage = 0.00
        if(debtServiceRatio/100 < 0){
            gaugePercentage = 0
        } else if (debtServiceRatio/100 > 100){
            gaugePercentage = 0
        } else {
            gaugePercentage = debtServiceRatio/100
        }

        return {
            eligibilityAmount: Math.floor(eligibilityAmount),
            debtServiceRatio: Math.round(debtServiceRatio * 10) / 10,
            monthlyInstallment: Math.ceil(maxMonthlyPayment),
            loanToValue: loanToValue * 100,
            gaugePercentage: gaugePercentage // Clamp value between 0 and 100
        }
    }

    const monthlyInterest = 3.9
    const results = calculateLoanEligibility(monthlyInterest); 
  

    return (
        <div>

            {/* Cutie Pie's Design */}
            <div>
                <div className="w-full mx-auto my-6 border-2 border-black rounded-md border-b-8">
                    <Card className="bg-black text-white rounded-none flex flex-col sm:flex-row justify-between items-center w-full p-6 border border-black gap-8">
                        <div>
                            <h1 className="text-lg md:text-4xl sm:text-2xl font-bold mb-2">Indicative Loan Eligibility</h1>
                            <Sheet>
                                <SheetTrigger>
                                    <div className='flex justify-center items-center gap-1'>
                                        <h1 className='md:text-lg text-center'>How To Calculate?</h1>
                                        <InfoCircle className='w-5 h-5' />
                                    </div>
                                </SheetTrigger>
                                <SheetContent side={"bottom"}>
                                    <SheetHeader>
                                        <SheetTitle className="text-3xl font-black font-spaceGrotesk">
                                            The Formula Used To Calculate The Eligibility Amount:
                                        </SheetTitle>
                                        <SheetDescription>
                                            <div className="space-y-6 text-lg">
                                                <div className="">
                                                    The Eligibility Amount is determined by considering two main factors: 
                                                    the property's value and the borrower's financial capacity. Here's a 
                                                    breakdown of how it's calculated:
                                                </div>

                                                <div>
                                                    <h3 className=" font-semibold text-xl">1. Property Value Limit:</h3>
                                                    <div className="mt-2">
                                                        First, we calculate the maximum loan amount based on the property's value. 
                                                        In Malaysia, banks typically allow:
                                                    </div>
                                                    <ul className="list-disc list-inside pl-4 mt-2">
                                                        <li>Up to 90% of the property's value for properties priced RM500,000 or less</li>
                                                        <li>Up to 80% of the property's value for properties priced above RM500,000</li>
                                                    </ul>
                                                    <div className="mt-2">
                                                        This limit ensures that the loan doesn't exceed a certain percentage of the property's worth.
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className=" font-semibold text-xl">2. Borrower's Repayment Capacity:</h3>
                                                    <div className="mt-2">
                                                        Next, we determine how much the borrower can afford to repay each month. 
                                                        This is based on:
                                                    </div>
                                                    <ul className="list-disc list-inside pl-4 mt-2">
                                                        <li>The borrower's yearly income (converted to monthly)</li>
                                                        <li>Existing monthly debt commitments</li>
                                                        <li>The loan's interest rate</li>
                                                        <li>The loan term (in years)</li>
                                                    </ul>
                                                    <div className="mt-2">
                                                        Malaysian banks typically allow up to 70% of a person's monthly income 
                                                        to go towards debt repayments (including the new loan). We calculate 
                                                        the maximum monthly loan payment the borrower can afford after accounting 
                                                        for their existing debts. Using this maximum monthly payment, we then 
                                                        work backwards to determine the total loan amount that would result in 
                                                        this monthly payment, considering the interest rate and loan term.
                                                    </div>
                                                </div>

                                                <div>
                                                <h3 className=" font-semibold text-xl">3. Final Eligibility Amount:</h3>
                                                <div className="mt-2">The final loan eligibility is the lower of these two amounts:</div>
                                                <ul className="list-disc list-inside pl-4 mt-2">
                                                    <li>The maximum based on the property's value</li>
                                                    <li>The maximum based on the borrower's repayment capacity</li>
                                                </ul>
                                                <div className="mt-2">
                                                    By choosing the lower amount, we ensure that the loan is both within the 
                                                    allowed limit for the property's value and affordable for the borrower.
                                                </div>
                                                </div>

                                                <div>
                                                    <div className="mt-2 font-semibold text-xl">
                                                        This approach takes into account:
                                                    </div>
                                                    <ul className="list-disc list-inside pl-4 mt-2">
                                                        <li>The property's value</li>
                                                        <li>The borrower's income and existing debts</li>
                                                        <li>The loan's interest rate and term</li>
                                                        <li>Malaysian banking standards for responsible lending</li>
                                                    </ul>
                                                    <div className="mt-4">
                                                        By considering both the property value and the borrower's financial situation, 
                                                        this calculation aims to determine a loan amount that is both secure for 
                                                        the bank and manageable for the borrower.
                                                    </div>
                                                </div>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                    </SheetContent>
                            </Sheet>
                        </div>

                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap text-green-300">
                            RM {results.eligibilityAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                    </Card>

                    {/* Meter Design */}
                    <Card className='rounded-t-none'>
                        <CardContent className="grid grid-flow-row xl:grid-cols-[30%_67%] gap-8 sm:p-6 ">

                            {/* Gauge Chart */}
                            <div className="flex flex-col items-center justify-center">
                                
                                <div className='bg-black py-4 px-1 sm:p-10 sm:px-8 rounded-md flex flex-col '>
                                    <GaugeChart id="gauge-chart2" 
                                        nrOfLevels={10} className='-ml-3.5 sm:-ml-0'
                                        percent={results.gaugePercentage} 
                                    />
                                

                                    <Dialog>
                                        <DialogTrigger className='flex justify-center items-center gap-1 text-amber-400 mt-8 font-semibold text-center'>
                                            <h1 className='text-[13px] sm:text-md'>
                                                What is Debt Servicing Ratio (DSR)?     
                                            </h1>
                                            <InfoCircle />
                                        </DialogTrigger>
                                        <DialogContent className='w-full'>
                                            <DialogHeader>
                                                <DialogTitle className='text-3xl font-black font-spaceGrotesk'>What is Debt Servicing Ratio (DSR) ?</DialogTitle>
                                                <DialogDescription>
                                                    <p className='mt-2 text-lg'>
                                                        Your Debt Service Ratio (DSR) shows what percentage of your income is used to service debts. It's calculated as DSR = Total Commitments / Total Income.
                                                    </p>

                                                    <p className='mt-6 text-lg'>
                                                        Our calculations assume your DSR shouldn't go above 70%, which is the general limit across banks in Malaysia. 
                                                        Different banks may have their own methods for income and commitment recognition, so your loan eligibility can vary from one bank to another.
                                                    </p>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>

                            {/*Details Cards*/}
                            <div className="grid sm:grid-cols-2  gap-4">
                                <Card className="bg-white/50 border-2 border-black">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-1 mb-6">
                                            <BadgeDollarSign className="h-7 w-7 text-rose-600" />
                                            <Label className="sm:text-lg">Monthly Installment</Label>
                                        </div>
                                        <p className="text-2xl sm:text-4xl font-bold text-center whitespace-nowrap">
                                            RM {results.monthlyInstallment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white/50 border-2 border-black">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-1 mb-6">
                                            <ChartPie className="h-7 w-7 text-rose-600" />
                                            <Label className="sm:text-lg">Loan-To-Value Ratio</Label>
                                        </div>
                                        <p className="text-2xl sm:text-4xl font-bold text-center">
                                            {results.loanToValue}%
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white/50 border-2 border-black">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-1 mb-6">
                                            <CalendarClock  className="h-7 w-7 text-rose-600" />
                                            <Label className="sm:text-lg">Max Tenure</Label>
                                        </div>
                                        <p className="text-2xl font-bold text-center">
                                            35 years {""}
                                            <span className='text-[14px] sm:text-[18px] font-normal'>or up to the age of 70, whichever is earlier.</span>
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white/50 border-2 border-black">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-1 mb-6">
                                            <PercentIcon className="h-6 w-6 text-rose-600" />
                                            <Label className="sm:text-lg">Interest Rate</Label>
                                        </div>
                                        <p className="text-2xl sm:text-4xl font-bold text-center">
                                            3.9%
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>

            <BankCards 
                employmentStatus={employmentStatus}
                propertyValue={propertyValue}
                totalYearlyIncome={totalYearlyIncome}
                loanTenure={loanTenure}
                eligibilityAmount={results.eligibilityAmount}
            />
        </div>
  )
}

export default EligibilityMeter
