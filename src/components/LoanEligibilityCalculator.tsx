"use client"

import {
  useEffect,
  useState
} from "react"
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
  Input
} from "@/components/ui/input"
import MonthlyCommitmentsForms from "./MonthlyCommitmentsForms"

const formSchema = z.object({
  employmentStatus: z.string().min(1, { message: "Please select your Employment Status" }),
  propertyValue: z.number().min(80000).max(999999999),
  totalYearlyIncome: z.number().min(10000).max(999999999),
  loanTenure: z.number().int().min(1).max(35)
});

const defaultValues = {
    employmentStatus: "",
    propertyValue: 0,
    totalYearlyIncome: 0,
    loanTenure: 0
};

const LoanEligibilityCalculator = () => {
    //Initialize and Set state for variables
    const [valid, setValidated] = useState(false) // Tracks validation
    const [submitted, setSubmitted] = useState(false); // Tracks form submission
    

    const form = useForm < z.infer < typeof formSchema >> ({
        resolver: zodResolver(formSchema),
        defaultValues,
        mode: "onChange"
    })

    //Simplified state management by removing redundant state variables
    //No need to reinitialize state for what is in the Zod useForm
    //Just use {watch} from form
    const { watch } = form;
    const employmentStatus = watch("employmentStatus");
    const propertyValue = watch("propertyValue");
    const totalYearlyIncome = watch("totalYearlyIncome");
    const loanTenure = watch("loanTenure");
    
    // Form Submit Valication
    // Handle successful submission
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setValidated(true); // Set form as valid
        setSubmitted(true); // Mark the form as submitted
        console.log("Form submitted successfully:", values);

    };

    // Handle invalid submission
    const onInvalidSubmit = (errors: unknown) => {
        setValidated(false); // Set form as invalid
        console.log("Validation errors:", errors);
    };

    // Validate when yearlyIncome or totalYearlyIncome changes using Zod
    useEffect(() => {

        //Making sure the variables abide to the the Zod Form Schema
        const result = formSchema.safeParse({
            employmentStatus,
            propertyValue,
            totalYearlyIncome,
            loanTenure
        });

        setValidated(result.success);
    }, [employmentStatus, propertyValue, totalYearlyIncome, loanTenure]); // Dependency array
    
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-6 w-full mt-6">
                
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        
                        <div className="col-span-3">
                        
                            <FormField
                                control={form.control}
                                name="propertyValue"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Property Value (RM)</FormLabel>
                                    <FormControl>
                                        <Input 
                                        className="border-2 border-black"
                                        placeholder="500,000"
                                        type="number"
                                        {...field}
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-md" />
                                </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-3">
                        
                            <FormField
                                control={form.control}
                                name="loanTenure"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Loan Tenure (years)</FormLabel>
                                    <FormControl>
                                        <Input 
                                        className="border-2 border-black"
                                        placeholder="30"
                                        type="number"
                                        {...field}
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-md" />
                                </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-3">
                        
                            <FormField
                                control={form.control}
                                name="employmentStatus"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">Employment Status</FormLabel>
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
                                        <SelectItem value="employee">Salaried Employee</SelectItem>
                                        <SelectItem value="selfEmployed">Self Employed</SelectItem>
                                        <SelectItem value="commisionEarner">Commision Earner</SelectItem>
                                    </SelectContent>
                                    </Select>
                                    
                                    <FormMessage className="text-md" />
                                </FormItem>
                                )}
                            />
                        </div>
                        
                        <div className="col-span-3">
                        
                            <FormField
                                control={form.control}
                                name="totalYearlyIncome"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg">{employmentStatus !== 'commisionEarner' ? 'Total Yearly Income (RM)' : 'Last 6 Months Income (RM)'}</FormLabel>
                                    <FormControl>
                                    <Input 
                                        className="border-2 border-black"
                                        placeholder="50,000"
                                        type="number"
                                        {...field}
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage className="text-md" />
                                </FormItem>
                                )}
                            />
                        </div>
                        
                    </div>
 

                    <Button
                        type="submit"
                        className={`w-full text-xl font-bold py-6 
                        hover:bg-gradient-to-r hover:from-[#47FFDF] 
                        hover:to-[#755FF5] border-black border-4
                        ${submitted ? "hidden" : ""}`}
                        size="lg"
                    >
                        Next
                    </Button>
                </form>

            </Form>

            {valid && submitted && (
                <div className="mt-6">
                    <MonthlyCommitmentsForms 
                        employmentStatus={employmentStatus}
                        propertyValue={propertyValue}
                        totalYearlyIncome={totalYearlyIncome}
                        loanTenure={loanTenure}
                    />
                </div>
            )}


        </div>
        
    )
}

export default LoanEligibilityCalculator