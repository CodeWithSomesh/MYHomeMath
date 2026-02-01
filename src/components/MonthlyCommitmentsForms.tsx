'use client'

import { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image';
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import MoneyImage from "../assets/images/Money.png"
import CarImage from "../assets/images/Car.png"
import CreditCardImage from "../assets/images/CreditCard.png"
import HouseLoanImage from "../assets/images/HouseLoan.png"
import Image from 'next/image'
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import EligibilityMeter from './EligibilityMeter';

//Zod Form Schema
type FormSchema = {
  housingLoan: number;
  creditCardLoan: number;
  carLoan: number;
  otherCommitmentsAmount: number;
  totalMonthlyCommitments: number;
};

const commitmentIdToSchemaKey: Record<string, keyof FormSchema> = {
  housing: "housingLoan",
  credit: "creditCardLoan",
  car: "carLoan",
  other: "otherCommitmentsAmount",
};

//Props Types
interface MonthlyCommitmentsFormsProps {
  employmentStatus: string;
  propertyValue: number;
  totalYearlyIncome: number;
  loanTenure: number;
}


//Types
interface Commitment {
  id: string
  icon: StaticImageData
  label: string
  description: string
  placeholder: string
  fieldName: string
}

//Commitments Object Details
const commitments: Commitment[] = [
  {
    id: 'housing',
    icon: HouseLoanImage,
    label: 'Housing Loan',
    description: 'Include all ongoing mortgage payments for properties currently in your portfolio.',
    placeholder: '2,000',
    fieldName: 'housingLoan' // Add unique fieldName
  },
  {
    id: 'credit',
    icon: CreditCardImage,
    label: 'Credit Card',
    description: 'Sum up your typical monthly credit card payments across all active cards.',
    placeholder: '1,200',
    fieldName: 'creditCardLoan' // Add unique fieldName
  },
  {
    id: 'car',
    icon: CarImage,
    label: 'Car Loan',
    description: 'Total monthly installments for all car-related financing agreements.',
    placeholder: '800',
    fieldName: 'carLoan' // Add unique fieldName
  },
  {
    id: 'other',
    icon: MoneyImage,
    label: 'Other Commitments',
    description: 'Any other regular monthly financial obligations not covered above.',
    placeholder: '500',
    fieldName: 'otherCommitmentsAmount' // Add unique fieldName
  }
]


const MonthlyCommitmentsForms: React.FC<MonthlyCommitmentsFormsProps> = ({
  employmentStatus,
  propertyValue,
  totalYearlyIncome,
  loanTenure,
}) => {
  const [housingLoan, setHousingLoan] = useState(0.00)
  const [creditCardLoan, setCreditCardLoan] = useState(0.00)
  const [carLoan, setCarLoan] = useState(0.00)
  const [otherCommitmentsAmount, setOtherCommitmentsAmount] = useState(0.00)
  const [valid, setValidated] = useState(false) // Tracks validation
  const [submitted, setSubmitted] = useState(false); // Tracks form submission
  const [selectedCommitments, setSelectedCommitments] = useState<string[]>([])
  const totalMonthlyCommitments = housingLoan + carLoan + creditCardLoan + otherCommitmentsAmount

  //Dynamic Zod Form Schema
  const dynamicSchema = z.object(
    selectedCommitments.reduce(
      (acc, id) => {
        const schemaKey = commitmentIdToSchemaKey[id];
        if (schemaKey) {
          acc[schemaKey] = z.number().min(1).max(999999999);
        }
        return acc;
      },
      {} as Record<keyof FormSchema, z.ZodTypeAny>
    )
  ).superRefine((data, ctx) => {
    if (totalYearlyIncome <= totalMonthlyCommitments) {
      // Add error to all selected commitment fields
      selectedCommitments.forEach(commitment => {
        const fieldName = commitmentIdToSchemaKey[commitment];
        if (fieldName) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Your Total Yearly Income must be greater than Total Yearly Expenses",
            path: [fieldName]
          });
        }
      });
    }
  })

  const form = useForm < z.infer < typeof dynamicSchema >> ({
    resolver: zodResolver(dynamicSchema),
    defaultValues: {
      housingLoan: 0,
      creditCardLoan: 0,
      carLoan: 0,
      otherCommitmentsAmount: 0,
      totalMonthlyCommitments: 0,
    },
  })

  // Form Submit Valication
  // Handle successful submission
  const onSubmit = () => {
    setValidated(true);
    setSubmitted(true);
  };

  // Handle invalid submission
  const onInvalidSubmit = (errors: unknown) => {
      setValidated(false); // Set form as invalid
      console.log("Validation errors:", errors);
      toast.error("Validation failed. Please correct the errors.");
  };

  

  const handleCommitmentToggle = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setSelectedCommitments(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id)
      }
      return [...prev, id]
    })
  }

  
  // Validate when yearlyIncome or otherYearlyIncome changes using Zod
  useEffect(() => {
    //Making sure the variables abide to the the Zod Form Schema
    const result = dynamicSchema.safeParse({
        housingLoan,
        creditCardLoan,
        carLoan,
        otherCommitmentsAmount,
        totalMonthlyCommitments
    });

    setValidated(result.success);

    if (!result.success) {
      // Trigger form validation to show errors
      form.trigger();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- dynamicSchema and form are stable; only re-run when commitment values change
  }, [housingLoan, creditCardLoan, carLoan, otherCommitmentsAmount, totalMonthlyCommitments, totalYearlyIncome])

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-6">
          <div className="bg-black p-3 rounded-md">
            <h3 className="text-lg text-center text-white font-medium">
              Select your current monthly financial commitments
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {commitments.map(({ id, icon, label, description, placeholder, fieldName }) => (
              <div key={id}>
                <Collapsible
                  key={id}
                  open={selectedCommitments.includes(id)}
                  onOpenChange={(open) => {
                    // Only toggle if the change isn't already reflected in selectedCommitments
                    if (open !== selectedCommitments.includes(id)) {
                      handleCommitmentToggle(id);
                    }
                  }}
                >
                  <div className="border-2 border-black rounded-lg">
                    <CollapsibleTrigger  asChild>
                      <div className="flex items-center justify-between w-full p-4 hover:bg-muted/50 border-2 border-black border-x-0 border-t-0">
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                          <Image src={icon} alt='3D Icon' className="h-16 w-16 text-muted-foreground" />
                          <span className="font-medium sm:text-lg ">{label}</span>
                        </div>
                        <Checkbox
                          checked={selectedCommitments.includes(id)}
                          onCheckedChange={() => handleCommitmentToggle(id)}
                        />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="p-4 border-t space-y-3">
                        
                        <FormField
                          control={form.control}
                          name={commitmentIdToSchemaKey[id]}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-lg'>Total Amount (RM)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={placeholder}          
                                  type="number"
                                  className="border border-black"
                                  {...field}
                                  onChange={(e) => {
                                    const value = Number(e.target.value) || 0
                                    switch(fieldName) {
                                      case "housingLoan":
                                        setHousingLoan(value)
                                        break;
                                      case "creditCardLoan":
                                        setCreditCardLoan(value)
                                        break;
                                      case "carLoan":
                                        setCarLoan(value)
                                        break;
                                      case "otherCommitmentsAmount":
                                        setOtherCommitmentsAmount(value)
                                        break;
                                    }
                                    field.onChange(value)
                                  }}
                                />
                              </FormControl>
                              <FormDescription className='text-md'>{description}</FormDescription>
                              <FormMessage className='text-md' />
                            </FormItem>
                          )}
                        />

                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </div>
            ))}
          </div>

          <Button
              type="submit"
              className={`w-full text-xl font-bold py-6 
              hover:bg-gradient-to-r hover:from-[#47FFDF] 
              hover:to-[#755FF5] border-black border-4
              `}
              // ${submitted ? "hidden" : ""}
              size="lg"
          >
              Calculate
          </Button>
        </form>
      </Form>

      {valid && submitted && (
        <div className="">
          <EligibilityMeter 
            employmentStatus={employmentStatus}
            propertyValue={propertyValue}
            totalYearlyIncome={totalYearlyIncome}
            loanTenure={loanTenure}
            totalMonthlyCommitments={totalMonthlyCommitments}
          />
        </div>
      )}
      

    </div>
  )
}

export default MonthlyCommitmentsForms
