"use client"

import { useState, useEffect, useRef } from "react"
import { BadgeDollarSign, Calculator, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import HomeLoanImage from "../assets/images/HomeLoan.png"
import HouseMortgage from "../assets/images/HouseMortgage.png"
import MoneyManagement from "../assets/images/MoneyManagement.png"
import { motion} from "framer-motion"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  toast
} from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import CalculationPieChart from "@/components/CalculationPieChart"
import LoanEligibilityCalculator from "@/components/LoanEligibilityCalculator"
import AmortizationSchedule from "@/components/AmortizationSchedule"
// AUTH DISABLED - import AuthCheck from "@/components/AuthCheck"
// AUTH DISABLED - import LogoutButton from "@/components/LogoutButton"
import ErrorBoundary from "@/components/ErrorBoundary"

const formSchema = z.object({
  loanAmount: z.number().min(1000).max(999999999),
  interestRate: z.number().min(0.01).max(20.99),
  loanTenure: z.number().int().min(1).max(35)
});

const defaultValues = {
  loanAmount: 0,
  interestRate: 0,
  loanTenure: 0
};

export default function Home() {

  //Initialize and Set state for variables
  const [valid, setValidated] = useState(false)
  const [calculated, setCalculated] = useState(false)
  const [currentMonth, setCurrentMonth] = useState('');

  //Intializing Zod Form Schema 
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange"
  })

  //Simplified state management by removing redundant state variables
  //No need to reinitialize state for what is in the Zod useForm
  //Just use {watch} from form
  const { watch } = form;
  const loanAmount = watch("loanAmount");
  const interestRate = watch("interestRate");
  const loanTerm = watch("loanTenure");

  //Update the month accordingly
  useEffect(() => {
    // Get the current month and format it
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date();
    const currentMonthName = monthNames[date.getMonth()];
    setCurrentMonth(currentMonthName);
  }, []);


  //Calculate Loan Payments
  const calculateLoan = () => {
    const principal = loanAmount
    const rate = interestRate / 100 / 12
    const months = loanTerm * 12
    const monthlyPayment =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1)
    const totalPayment = monthlyPayment * months
    const totalInterest = totalPayment - principal

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
    }
  }

  //Set the Loan Payments into the "results" object
  const results = calculateLoan()
  

  // Form Submit Valication
  // Handle successful submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setValidated(true); // Set form as valid
    console.log("Form submitted successfully:", values);

    toast(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      </pre>
    );
  };

  // Handle invalid submission
  const onInvalidSubmit = (errors: unknown) => {
    setValidated(false); // Set form as invalid
    console.log("Validation errors:", errors);
    toast.error("Validation failed. Please correct the errors.");
  };
  
  // Validate when loanAmount, loanTerm, or interestRate change using Zod
  useEffect(() => {

    //Making sure the variables abide to the the Zod Form Schema
    const result = formSchema.safeParse({
      loanAmount,
      interestRate,
      loanTenure: loanTerm,
    });

    setValidated(result.success);
  }, [loanAmount, interestRate, loanTerm]); // Dependency array

  // Explicitly type the ref as HTMLDivElement
  const targetRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling with null check
  const handleScrollToElement = () => {
    // Scroll down by a specific amount of pixels
    window.scrollBy({
      top: window.innerHeight * 0.2, // Scroll down 20% of the viewport height
      behavior: 'smooth'
    });

    // Optional: If you want to ensure the target is in view after scrolling
    if (targetRef.current) {
      // Slightly delayed to allow initial scroll to complete
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 200);
    }
  };
  
  return (
    <ErrorBoundary>
      {/* AUTH DISABLED - AuthCheck wrapper removed */}
      <div className="w-full bg-black min-h-screen glow:bg-cyan-300 relative overflow-clip">

          {/* MoneyManagement Image*/}
          <motion.div className={`${valid  ? "hidden sm:hidden" : "absolute hidden right-[2%] top-[53%] md:block z-50"} `}
            drag initial={{translateY: 0}}
            animate={{translateY: [0, 30, 0]}}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
              >
              <Image
                src={MoneyManagement}
                alt="Illustration of home loan concept"
                width={270}
                height={25}
                className="max-w-none"
                draggable="false"
              />
          </motion.div>

          {/* HouseMortgage Image*/}
          <motion.div className={`${valid ? "hidden" : "absolute hidden left-[4%] bottom-[7%] md:block z-50"} `}
              initial={{translateY: 0}}
              animate={{translateY: [0, 30, 0]}}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }} drag
              >
              <Image
                src={HouseMortgage}
                alt="Illustration of home loan concept"
                width={200}
                height={75}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>


          <div className="mx-auto max-w-7xl py-6">

            <BackgroundGradient className="sm:p-2 p-1">
            
              <Card>
                <CardHeader className="-mb-4">
                  <div className="relative">
                      <CardTitle className="text-2xl sm:text-4xl font-spaceGrotesk font-extrabol">MYHomeMath</CardTitle>
                      <p className="text-sm sm:text-lg text-muted-foreground mt-2 sm:mt-0">
                        Calculate your mortgage, check loan eligibility, and find the best home loan options with just a few clicks
                      </p>

                      {/* HomeLoan Image */}
                      <motion.div className="absolute xs:hidden -right-[2%] -top-12"
                        drag
                        >
                        <Image
                          src={HomeLoanImage}
                          alt="Illustration of home loan concept"
                          width={150}
                          height={75}
                          className=""
                          draggable="false"
                        />
                      </motion.div>
                  </div>

                  
                </CardHeader>
                <CardContent ref={targetRef} className="space-y-6">
                  <Tabs defaultValue="mortgage" className="w-full  rounded-sm">
                    <TabsList className="flex bg-black sm:py-6 sm:px-2 justify-center items-center">
                      <TabsTrigger 
                        value="mortgage" 
                        className="w-full text-[10px] sm:text-[14px] md:text-[18px] font-bold rounded-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#47FFDF] data-[state=active]:to-[#755FF5] data-[state=active]:text-white">
                          Mortgage Calculator
                      </TabsTrigger>

                      <TabsTrigger value="personal" 
                        className="w-full text-[10px] sm:text-[14px] md:text-[18px] font-bold rounded-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#755FF5] data-[state=active]:to-[#47FFDF] data-[state=active]:text-white" 
                        onClick={() => {
                          setCalculated(false)
                        }}>
                        Loan Eligibility Calculator
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="mortgage" className="space-y-6 mt-4">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-6 w-full sm:mt-6">
                          
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                            
                            <div className="col-span-4">
                              
                              <FormField
                                control={form.control}
                                name="loanAmount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-lg">Loan Amount (RM)</FormLabel>
                                    <FormControl>
                                      <Input 
                                      className="border-2 border-black"
                                      placeholder="500,000"
                                      type="number"
                                      {...field}
                                      value={field.value || ''} // This ensures the input always has a defined value
                                      onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                                      />
                                    </FormControl>
                                    <FormMessage className="text-md" />
                                  </FormItem>
                                )}
                              />
                            </div>
                              
                            <div className="col-span-4">
                                
                              <FormField
                                control={form.control}
                                name="interestRate"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-lg">Interest Rate (%)</FormLabel>
                                    <FormControl>
                                      <Input 
                                      className="border-2 border-black"
                                      placeholder="3.00"
                                      type="number"
                                      {...field}
                                      value={field.value || ''} // This ensures the input always has a defined value
                                      onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                                      />
                                    </FormControl>
                                    <FormMessage className="text-md" />
                                  </FormItem>
                                )}
                              />
                            </div>
                              
                            <div className="col-span-4">
                                
                              <FormField
                                control={form.control}
                                name="loanTenure"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-lg">Loan Tenure (years)</FormLabel>
                                    <FormControl>
                                      <Input 
                                      className="border-2 border-black"
                                      placeholder="30 years"
                                      type="number"
                                      {...field} 
                                      value={field.value || ''} // This ensures the input always has a defined value
                                      onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                                      />
                                    </FormControl>
                                    <FormMessage className="text-md" />
                                  </FormItem>
                                )}
                              />
                            </div>
                              
                          </div>


                          {/* Target element to scroll to */}
                          {valid && calculated && (
                            <div className="space-y-6"> 
                              <div className="grid gap-4 md:grid-cols-2">
                                <Card className="border-2 border-black">
                                  <CardContent className="pt-6">
                                    <div className="flex items-center gap-0 justify-center">
                                      <Calendar className="h-6 w-8 text-muted-foreground" />
                                      <span className="text-lg text-center font-medium">Loan Start</span>
                                    </div>
                                    <p className="mt-5 text-2xl font-bold text-center">{currentMonth}, {new Date().getFullYear()}</p>
                                  </CardContent>
                                </Card>
                                <Card className="border-2 border-black">
                                  <CardContent className="pt-6">
                                    <div className="flex items-center gap-0 justify-center">
                                      <Calculator className="h-6 w-8 text-muted-foreground" />
                                      <span className="text-lg font-medium">Loan Tenure</span>
                                    </div>
                                    <p className="mt-5 text-2xl font-bold text-center">
                                      {loanTerm} years
                                      <span className="text-lg text-muted-foreground">
                                        {" "}
                                        ({loanTerm * 12} months)
                                      </span>
                                    </p>
                                  </CardContent>
                                </Card>
                              </div>

                              <div>
                                <Card className="border-2 border-black">
                                    <CardContent className="h-full flex flex-col align-middle items-center justify-center py-4">
                                      <div className="flex items-center gap-1">
                                        <BadgeDollarSign />
                                        <h3 className="text-lg font-bold">
                                          Estimated Monthly Repayment
                                        </h3>
                                        <BadgeDollarSign />
                                      </div>
                                      <p className="mt-2 text-4xl font-bold text-primary">
                                        RM {results.monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                      </p>
                                    </CardContent>
                                  </Card>
                              </div>

                              {/* Pie Chart Component */}
                              <CalculationPieChart results={results} loanAmount={loanAmount} />

                              {/* Amortization Schedule Component */}
                              <AmortizationSchedule
                                loanAmount={loanAmount}
                                interestRate={interestRate}
                                loanTerm={loanTerm}
                              />

                            </div>
                          )}

                          <Button
                            type="submit"
                            className="w-full text-xl font-bold py-6 
                            hover:bg-gradient-to-r hover:from-[#47FFDF] hover:to-[#755FF5] border-black border-4"
                            size="lg"
                            onClick={() => {
                                setCalculated(true);
                                handleScrollToElement();
                            }}
                          >
                            Calculate
                          </Button>
                        </form>
                      </Form>

                      
                    </TabsContent>

                    <TabsContent value="personal" >
                      {/* Loan Eligibility Calculator Tab */}
                      <LoanEligibilityCalculator />
                      
                    </TabsContent>

                  </Tabs>

                </CardContent>
              </Card>
            </BackgroundGradient>
            

          </div>
          
          {/* AUTH DISABLED - LogoutButton removed */}
        </div>
    </ErrorBoundary>

  );
}
