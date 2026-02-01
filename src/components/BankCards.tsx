 import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import check from '../assets/images/check.png'
import BankDetails from './BankDetails';
import { InfoIcon as InfoCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Bank } from './BankDetails';
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface BankCardsProps {
  employmentStatus: string;
  propertyValue: number;
  totalYearlyIncome: number;
  loanTenure: number;
  eligibilityAmount: number;
}

const formSchema = z.object({
  loanType: z.string().min(1, { message: "Please select a Loan Type" }),
  loanCategory: z.string().min(1, { message: "Please select a Loan Category" }),
  bankNames: z.string().min(1, { message: "Please select a Bank Name" }),
});

const defaultValues = {
  loanType: "",
  loanCategory: "",
  bankNames: "",
};

const BankCards: React.FC<BankCardsProps> = ({
  propertyValue,
  loanTenure,
  eligibilityAmount
}) => {

  const [validBanks, setValidBanks] = useState<Bank[]>([]);
  //const [valid, setValidated] = useState(false) // Tracks validation

  const form = useForm < z.infer < typeof formSchema >> ({
      resolver: zodResolver(formSchema),
      defaultValues,
      mode: "onChange"
  })

  //Simplified state management by removing redundant state variables
  //No need to reinitialize state for what is in the Zod useForm
  //Just use {watch} from form
  const { watch } = form;
  const loanType = watch("loanType");
  const loanCategory = watch("loanCategory");
  const bankNames = watch("bankNames");

  //Track for changes
  useEffect(() => {
    const filteredBanks = BankDetails.filter(bank => {
      // Match eligibility amount
      const eligibilityMatch = bank.interestRate.some(rate => {
        const minAmount = Number(rate[2]);
        const maxAmount = Number(rate[3]);
        return eligibilityAmount >= minAmount && 
               (maxAmount === -1 || eligibilityAmount <= maxAmount);
      });

      // Matching if no filters are selected
      if (!loanType && !loanCategory && !bankNames) {
        return eligibilityMatch;
      }

      // Match loan type
      const loanTypeMatch = !loanType || 
                           loanType === "allType" || 
                           bank.loanType === loanType;

      // Match loan category
      const loanCategoryMatch = !loanCategory || 
                               loanCategory === "allCategory" || 
                               bank.category === loanCategory;

      // Match bank name
      const bankNameMatch = !bankNames || 
                           bankNames === "allBanks" || 
                           bank.bankName === bankNames;
   

      // All conditions must be met for the bank to be included
      return loanTypeMatch && 
             loanCategoryMatch && 
             bankNameMatch && 
             eligibilityMatch;
    });

    console.log('Filtering Results:', {
      filters: {
        loanType,
        loanCategory,
        bankNames,
        eligibilityAmount
      },
      matchingBanks: filteredBanks.map(bank => bank.bankName),
      totalMatches: filteredBanks.length
    });

    setValidBanks(filteredBanks);
  }, [eligibilityAmount, loanType, loanCategory, bankNames]);

  //Calculate Loan Payments
  const calculateLoan = (interestRate:number) => {
    const principal = propertyValue
    const rate = interestRate / 100 / 12
    const months = loanTenure * 12
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

  // Form Submit Valication
  // Handle successful submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
      //setValidated(true); // Set form as valid
      console.log("Form submitted successfully:", values);

  };

  // Handle invalid submission
  const onInvalidSubmit = (errors: unknown) => {
      //setValidated(false); // Set form as invalid
      console.log("Validation errors:", errors);
  };

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between items-center mt-20'>
        <div className='flex flex-col sm:items-start mb-2 sm:mb-0'>
          <h1 className='text-4xl font-black font-spaceGrotesk mb-2'>Featuring Bank Housing Loans </h1>
          <Dialog>
              <DialogTrigger className='flex justify-center items-center gap-2'>
                  <h1>Do you know the Current SBR is 3.00% p.a.?</h1>
                  <InfoCircle className='w-5 h-5' />
              </DialogTrigger>
              <DialogContent className='w-full'>
                  <DialogHeader>
                      <DialogTitle className='text-3xl font-black font-spaceGrotesk'>What is the Standardised Base Rate (SBR) ?</DialogTitle>
                      <DialogDescription>
                          <p className='mt-2 text-lg'>
                          The SBR is a common reference rate that will be used by all banks for any retail floating-rate loans. It is benchmarked against the Overnight Policy Rate (OPR), meaning that when one increases, the other follows suit.
                          </p>
                      </DialogDescription>
                  </DialogHeader>
              </DialogContent>
          </Dialog>
        </div>

        <div className='flex justify-center items-center gap-1'>
          <Sheet>
            <SheetTrigger>
              <div className="flex items-center space-x-2">
                <h1>What to prepare when applying home loans?</h1>
                <InfoCircle className='w-5 h-5' />
              </div>
            </SheetTrigger>

            <SheetContent side={"left"} className=''>
              <SheetHeader>
                <SheetTitle className='text-3xl font-black font-spaceGrotesk'>Documents Required: </SheetTitle>
                <SheetDescription>
                  <ul className="list-disc list-inside pl-4 text-lg mt-4 space-y-4">
                    <li>A photocopy of identity card or passport</li>
                    <li>Your latest 3 months' salary slip</li>
                    <li>Your latest income tax return form (Form B/BE) or EA form or latest EPF statement not exceeding 12 months old</li>
                    <li>If new salaried employees (at least 3 months in service), Letter of Appointment or confirmation letter from employer stating salary/allowances</li>
                    <li>Sale and Purchase Agreement/deposit or booking receipt/letter of offer from the housing developer</li>
                    <li>A photocopy of the land title (if any)</li>
                    <li>The latest bank statements dating back six months (compulsory in the absence of salary slips and/or EA Form) showing salary/payment credited to the account</li>
                    <li>If you are self-employed, you need to provide your business registration documents, latest 6 months bank statements, latest financial statements and other supporting documents to support your income</li>
                  </ul>
                </SheetDescription>

              </SheetHeader>
            </SheetContent>
              
          </Sheet>
          
        </div>


      </div>

      {/* Show Number of Banks DIsplayed */}
      <div>
        <div className='p-4 rounded-md border-2 border-black bg-black mt-2'>
          <h1 className='text-center text-xl text-white font-extralight'>
            We found {""}
            <span className='font-bold text-2xl'>{validBanks.length}</span> 
            {""} home loan(s) for you!
          </h1>
        </div>

        {/* FILTERING OPTIONS */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-6 w-full mt-2">
                
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        
                <div className="col-span-4">          
                  <FormField
                    control={form.control}
                    name="loanType"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Loan Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        > 
                        <FormControl>
                          <SelectTrigger>
                          <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="allType">All</SelectItem>
                          <SelectItem value="Basic Term Loan">Basic Term Loan</SelectItem>
                          <SelectItem value="Flexi Loan">Flexi Loan</SelectItem>
                        </SelectContent>
                        </Select>
                        
                        <FormMessage className="text-md" />
                    </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-4">          
                  <FormField
                    control={form.control}
                    name="loanCategory"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Loan Category</FormLabel>
                        <Select 
                            onValueChange={field.onChange}
                            value={field.value || ""}
                        > 
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="allCategory">All</SelectItem>
                          <SelectItem value="Conventional">Conventional</SelectItem>
                          <SelectItem value="Islamic">Islamic</SelectItem>
                        </SelectContent>
                        </Select>
                        
                        <FormMessage className="text-md" />
                    </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-4">          
                  <FormField
                    control={form.control}
                    name="bankNames"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Bank Names</FormLabel>
                        <Select 
                            onValueChange={field.onChange}
                            value={field.value || ""}
                        > 
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="allBanks">All</SelectItem>
                          {Array.from(new Set(validBanks.map(bank => bank.bankName))).map(uniqueBankName => (
                            <SelectItem key={uniqueBankName} value={uniqueBankName}>
                              {uniqueBankName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                        </Select>
                        
                        <FormMessage className="text-md" />
                    </FormItem>
                    )}
                  />
                </div>
          
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 h-fit mt-4">
        {validBanks.map(({ bankLogo, loanName, loanType, category, interestRate, benefits, link}, index) => {
          
          // Calculate the results using the interest rate
          const results = calculateLoan(Number(interestRate[0][1])); 

          
          return (
          <div key={index} className="flex flex-col h-fit border-8 rounded-lg shadow-md bg-black max-w-full border-t-0 border-black">
            
            {/* Bank Logo, Loan Name, Loan Type & Loan Category */}
            <div className="grid grid-cols-[22%_76%] bg-black py-2 rounded-md gap-2">
              <div className='rounded-md'>
                <Image src={bankLogo} alt={`${loanName} Logo`} width={100} className="object-contain rounded-md" />
              </div>

              <div className='flex flex-col justify-between gap-4'>
                <div>
                <h3 className={`text-xl font-extrabold bg-black text-amber-400 rounded-sm`}>{loanName}</h3>
                </div>
                
                <div className='flex justify-between items-center'>
                <p className='text-[16px] text-blue-400'>{loanType}</p>
                <p className='font-bold text-green-400 text-lg mr-1'>{category}</p>
                </div>
              </div>
            </div>

            {/* Loan Details */}
            <div className='bg-black rounded-br-lg'>
              <div className="">
                <div className='bg-[#b770fa] rounded-t-md text-center'>
                  <div className='grid grid-cols-2 justify-between text-center'>  
                    <h1 className='text-white font-bold p-2 text-xl border-b-2 border-black border-t-0 border-r'>Loan Amount</h1>
                    <h1 className='text-white font-bold p-2 text-xl border-b-2 border-black border-t-0 border-r-0'>Interest Rate</h1>
                    {interestRate.map((rate, index) => {

                      // Calculate the results using the interest rate
                      //const results = calculateLoan(Number(rate[1])); 

                      return (
                      <React.Fragment key={index}>
                        <div className='py-2 flex justify-center items-center border border-black border-t-0 border-l-0'>
                          <p className="text-md font-bold">{rate[0]}</p>
                        </div>

                        <div className='py-2 flex justify-center items-center border border-black border-t-0 border-x-0'>
                          <p className="text-md font-bold">{rate[1]}% p.a.</p>
                        </div>
                      </React.Fragment>
                    )})}
                  </div>
                </div>
                
              </div>
    
              {/* Monthly Cost */}
              <div className="flex flex-col items-center bg-[#2ae899] py-4 rounded-sm rounded-t-none rounded-b-none text-white">
                  <p className="text-3xl font-semibold">
                    RM{results.monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/
                    <span className='text-sm text'>
                      month
                    </span>
                  </p>
              </div>

              {/* Package Benefits */}
              <div className="bg-white rounded-sm rounded-t-none">
                {/* <h4 className="font-semibold py-2 px-4 text-xl">Requirements: </h4> */}
                <ul className="text-gray-600 text-sm ">
                  {benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 py-3 px-3 ">
                      <Image src={check} alt={"check"} className="w-6 h-6" />
                      <p className='text-sm'>{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
    
    
              {/* Enquire Button */}
              <div className="mt-2">
                <button 
                className="w-full py-3 text-white bg-black border-white border-2 font-bold text-lg rounded-md transition
                hover:bg-gradient-to-r hover:from-[#47FFDF] hover:to-[#755FF5] hover:border-black"
                onClick={() => 
                  window.open(link, '_blank')
                }
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default BankCards;
