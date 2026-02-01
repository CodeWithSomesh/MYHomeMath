import BankIslamLogo from '../assets/images/Banks/BankIslamLogo.png';
import MaybankLogo from '../assets/images/Banks/MaybankLogo.webp';
import RHBBankLogo from '../assets/images/Banks/RHBBankLogo.webp';
import StandardCharteredBankLogo from '../assets/images/Banks/StandardCharteredBankLogo.webp';
import BankOfChinaLogo from '../assets/images/Banks/BankOfChinaLogo.jpg';
import HSBCBankLogo from '../assets/images/Banks/HSBCLogo.jpg';
import AmBankLogo from '../assets/images/Banks/AmBankLogo.jpg';
import KFHLogo from '../assets/images/Banks/KFHLogo.jpg';
import OCBCLogo from '../assets/images/Banks/OCBCLogo.jpg';
import BankMuamalatLogo from '../assets/images/Banks/BankMuamalatLogo.jpg';
import AIALogo from '../assets/images/Banks/AIABankLogo.jpg';
import AllianceLogo from '../assets/images/Banks/AllianceLogo.jpg';
import PublicBankLogo from '../assets/images/Banks/PublicBankLogo.jpg';
import CIMBLogo from '../assets/images/Banks/CIMBBankLogo.jpg';
import HongLeongLogo from '../assets/images/Banks/HongLeongLogo.jpg';
import AffinLogo from '../assets/images/Banks/AffinLogo.jpg';
import AlrajhiLogo from '../assets/images/Banks/AlrajhiLogo.jpg';
import UOBLogo from '../assets/images/Banks/UOBLogo.jpg';
import ICBCLogo from '../assets/images/Banks/ICBCLogo.jpg';
import MBSBLogo from '../assets/images/Banks/MBSBLogo.jpg';
import BSNLogo from '../assets/images/Banks/BSNLogo.jpg';
import BangkokLogo from '../assets/images/Banks/BangkokLogo.jpg';
import BankRakyatLogo from '../assets/images/Banks/BankRakyatLogo.jpg';
import { StaticImageData } from 'next/image';

export interface Bank {
  bankLogo: StaticImageData; // Assuming it's a URL or image path
  bankName: string;
  bankColor: string;
  loanName: string;
  loanType: string;
  category: string;
  interestRate: [string, number, number, number][];
  benefits: string[];
  link: string;
}

// A TOTAL OF 61 BANKS
const BankDetails: Bank[] = [
  {
    bankLogo: MaybankLogo,
    bankName: "Maybank",
    bankColor: 'amber',
    loanName: "Maybank Islamic HouzKEY",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM250,000 up to RM2,000,000", 2.88, 250000, 2000000],
    ],
    benefits: [
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
      "Must not have more than one (1) home financing at the point of application"
    ],
    link: "https://ringgitplus.com/en/home-loan/Maybank-Islamic-HouzKEY.html",
  },
  {
    bankLogo: BankIslamLogo,
    bankName: "Bank Islam",
    bankColor: 'red',
    loanName: "Bank Islam Baiti Home Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM300,000", 4.1,0, 300000],
      ["More than RM301,000", 3.8, 301000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "No Lock-In Period Needed"
    ],
    link: "https://ringgitplus.com/en/home-loan/Bank-Islam-Baiti-Home-Financing-i.html",
  },
  {
    bankLogo: BankIslamLogo,
    bankName: "Bank Islam",
    bankColor: 'red',
    loanName: "Bank Islam Wahdah Home Refinancing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM300,000", 4.1, 0, 300000],
      ["More than RM301,000", 3.8, 301000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "No Lock-In Period Needed"
    ],
    link: "https://ringgitplus.com/en/home-loan/Bank-Islam-Wahdah-Home-Refinancing-i.html",
  },
  {
    bankLogo: RHBBankLogo,
    bankName: "RHB Bank",
    bankColor: 'blue',
    loanName: "RHB Commodity Murabahah Skim Jaminan Kredit Perumahan Home Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM50,000 up to RM500,000", 4.55, 50000 , 500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM18,000 or higher",
      "Age to apply must be at least 18 years old",
      "Available for both Salaried-Employee & Self-Employed Individuals",
      "Only Malaysians can apply",
      "Available for first time home buyers"
    ],
    link: "https://ringgitplus.com/en/home-loan/RHB-Commodity-Murabahah-Skim-Jaminan-Kredit-Perumahan-Home-Financing-i.html",
  },
  {
    bankLogo: StandardCharteredBankLogo,
    bankName: "Standard Chartered Bank",
    bankColor: 'blue',
    loanName: "Standard Chartered MortgageOne Zero Cost",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["RM200,000 up to RM3,500,000", 4.2, 200000 , 3500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM48,000 or higher",
      "Age to apply must be between 21 to 65 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Standard-Chartered-MortgageOne-Zero-Cost.html",
  },
  {
    bankLogo: BankOfChinaLogo,
    bankName: "Bank of China",
    bankColor: 'red',
    loanName: "Bank of China Housing Loan",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM301,000", 3.88,  301000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM60,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Available for both Salaried-Employee & Self-Employed Individuals",
      "Only Malaysians, Permanent Residents, Foreigners working in Malaysia can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Bank-of-China-Housing-Loan.html",
  },
  {
    bankLogo: RHBBankLogo,
    bankName: "RHB Bank",
    bankColor: 'blue',
    loanName: "RHB My1 First Home Loan",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["RM30,000 up to RM500,000", 4.1,  30000, 500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM60,000 or higher",
      "Age to apply must be between 21 to 40 years old",
      "Only Malaysians can apply",
      "Available for first time home buyers",
    ],
    link: "https://ringgitplus.com/en/home-loan/RHB-My1-First-Home-Loan.html",
  },
  {
    bankLogo: StandardCharteredBankLogo,
    bankName: "Standard Chartered Bank",
    bankColor: 'blue',
    loanName: "Standard Chartered MortgageOne",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["RM70,000 up to RM299,000", 4.2, 70000, 299000],
      ["RM300,000 up to RM2,999,000", 3.9, 300000, 2999000],
      ["RM3,000,000 up to RM10,000,000", 3.9, 3000000, 10000000],
    ],
    benefits: [
      "Minimal Annual Income must be RM48,000 or higher",
      "Age to apply must be between 21 to 65 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Standard-Chartered-MortgageOne.html",
  },
  {
    bankLogo: HSBCBankLogo,
    bankName: "HSBC Bank",
    bankColor: 'red',
    loanName: "HSBC HomeSmart",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["Up to RM499,000", 4.3, 0, 499000],
      ["RM500,000 up to RM999,000", 4.1, 500000, 999000],
      ["More than RM1,000,000", 3.98, 1000000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM48,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Available for both Malaysians and Foreigners",
    ],
    link: "https://ringgitplus.com/en/home-loan/HSBC-HomeSmart.html",
  },
  {
    bankLogo: AmBankLogo,
    bankName: "AmBank",
    bankColor: 'red',
    loanName: "AmBank Home Link",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.5, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians, Permanent Residents, Foreigners residing in Malaysia with valid permit can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/AmBank-Home-Link.html",
  },
  {
    bankLogo: AmBankLogo,
    bankName: "AmBank",
    bankColor: 'red',
    loanName: "AmBank Home Loan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.5, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians, Permanent Residents, Foreigners residing in Malaysia with valid permit can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/AmBank-Home-Loan.html",
  },
  {
    bankLogo: KFHLogo,
    bankName: "Kuwait Finance House",
    bankColor: 'green',
    loanName: "KFH Ijarah Muntahiah Bi Al-Tamlik Asset Acquisition Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM150,000 up to RM250,000", 4.89, 150000, 250000],
      ["RM250,000 up to RM500,000", 4.45, 250000, 500000],
      ["More than RM500,000", 5.09, 500000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/KFH-Ijarah-Muntahiah-Bi-Al-Tamlik-Asset-Acquisition-Financing-i.html",
  },
  {
    bankLogo: MaybankLogo,
    bankName: "Maybank",
    bankColor: 'amber',
    loanName: "Maybank Maxi Home",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM350,000", 4.35, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Maybank-Maxi-Home.html",
  },
  {
    bankLogo: OCBCLogo,
    bankName: "OCBC Bank",
    bankColor: 'blue',
    loanName: "OCBC Standard Housing Loan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.45, 100000, -1],
    ],
    benefits: [
      "Age to apply must be between 18 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/OCBC-Standard-Housing-Loan.html",
  },
  {
    bankLogo: BankMuamalatLogo,
    bankName: "Bank Muamalat",
    bankColor: 'blue',
    loanName: "Bank Muamalat Home Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM100,000 up to RM700,000", 5.11, 100000, 700000],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Bank-Muamalat-Home-Financing-i.html",
  },
  {
    bankLogo: OCBCLogo,
    bankName: "OCBC Bank",
    bankColor: 'red',
    loanName: "OCBC Al-Amin Manarat Home-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM100,000", 4.45, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/OCBC-Al-Amin-Manarat-Home-i.html",
  },
  {
    bankLogo: AIALogo,
    bankName: "AIA",
    bankColor: 'red',
    loanName: "AIA Fixed Rate Home Loan Package 2",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM300,000", 5.39, 300000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians, Permanent Residents, Foreigners residing in Malaysia with valid permit can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/AIA-Fixed-Rate-Home-Loan-Package-2.html",
  },
  {
    bankLogo: AllianceLogo,
    bankName: "Alliance",
    bankColor: 'blue',
    loanName: "Alliance ONE Account",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM50,000", 4.36, 50000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM60,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Alliance-ONE-Account.html",
  },
  {
    bankLogo: PublicBankLogo,
    bankName: "Public Bank",
    bankColor: 'red',
    loanName: "Public Bank MORE Plan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM200,000", 4.22, 200000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM60,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Public-Bank-MORE-Plan.html",
  },
  {
    bankLogo: RHBBankLogo,
    bankName: "RHB Bank",
    bankColor: 'blue',
    loanName: "RHB My1 Full Flexi Home Loan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["RM250,000 up to RM399,999", 4.75, 250000, 399999],
      ["RM400,000 up to RM599,999", 4.7, 400000, 599999],
      ["RM600,000 up to RM999,999", 4.65, 600000, 999999],
      ["RM1,000,000 up to RM1,999,999", 4.6, 1000000, 1999999],
      ["More than RM2,000,000", 4.6, 2000000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM18,000 or higher",
      "Age to apply must be at least 18 years old",
      "Any Nationality can apply",
      "Expatriates: MM2H programme (Malaysian spouse)",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/RHB-My1-Full-Flexi-Home-Loan.html",
  },
  {
    bankLogo: MaybankLogo,
    bankName: "Maybank",
    bankColor: 'amber',
    loanName: "Maybank Maxi Home Flexi Loan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM350,000", 4.35, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Maybank-Maxi-Home-Flexi-Loan.html",
  },
  {
    bankLogo: CIMBLogo,
    bankName: "CIMB Bank",
    bankColor: 'red',
    loanName: "CIMB Variable Home Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM349,000", 4.55, 0, 349000],
      ["More than RM350,000", 4.35, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/CIMB-Variable-Home-Financing-i.html",
  },
  {
    bankLogo: CIMBLogo,
    bankName: "CIMB Bank",
    bankColor: 'red',
    loanName: "CIMB HomeFlexi Smart-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM349,000", 4.55, 0, 349000],
      ["More than RM350,000", 4.35, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/CIMB-HomeFlexi-Smart-i.html",
  },
  {
    bankLogo: HongLeongLogo,
    bankName: "Hong Leong",
    bankColor: 'blue',
    loanName: "Hong Leong Mortgage Plus",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM400,000", 4.75, 400000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 24 to 70 years old",
      "Malaysians and Foreigners can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Hong-Leong-Mortgage-Plus.html",
  },
  {
    bankLogo: HongLeongLogo,
    bankName: "Hong Leong",
    bankColor: 'blue',
    loanName: "Hong Leong Islamic CM Flexi Property Financing-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM400,000", 4.6, 400000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 24 to 70 years old",
      "Malaysians and Foreigners can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Hong-Leong-Islamic-CM-Flexi-Property-Financing-i.html",
  },
  {
    bankLogo: AffinLogo,
    bankName: "Affin Bank",
    bankColor: 'blue',
    loanName: "Affin Bank Home Solution Plus",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.76, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Affin-Bank-Home-Solution-Plus.html",
  },
  {
    bankLogo: PublicBankLogo,
    bankName: "Public Bank",
    bankColor: 'red',
    loanName: "Public Bank 5 Home Plan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM200,000", 4.22, 200000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Public-Bank-5-Home-Plan.html",
  },
  {
    bankLogo: AlrajhiLogo,
    bankName: "Al Rajhi Bank",
    bankColor: 'blue',
    loanName: "Al Rajhi Structured Home Financing-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM50,000", 4.22, 50000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM42,000 or higher",
      "Age to apply must be between 21 to 65 years old",
      "Only Malaysians can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Al-Rajhi-Structured-Home-Financing-i.html",
  },
  {
    bankLogo: AmBankLogo,
    bankName: "AmBank",
    bankColor: 'red',
    loanName: "AmBank Islamic Home-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM100,000", 4.5, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians, Permanent Residents, Foreigners residing in Malaysia with valid working permit can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/AmBank-Islamic-Home-i.html",
  },
  {
    bankLogo: UOBLogo,
    bankName: "UOB Bank",
    bankColor: 'blue',
    loanName: "UOB iNTELLIGENT Home Loan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.49, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Malaysians and Foreigners can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/UOB-iNTELLIGENT-Home-Loan.html",
  },
  {
    bankLogo: MaybankLogo,
    bankName: "Maybank",
    bankColor: 'amber',
    loanName: "Maybank Commodity Murabahah Home Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM10,000", 4.25, 10000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Maybank-Commodity-Murabahah-Home-Financing-i.html",
  },
  {
    bankLogo: AmBankLogo,
    bankName: "AmBank",
    bankColor: 'red',
    loanName: "AmBank Islamic HomeLink-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM100,000", 4.5, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians, Permanent Residents, Foreigners residing in Malaysia with valid working permit can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/AmBank-Islamic-HomeLink-i.html",
  },
  {
    bankLogo: KFHLogo,
    bankName: "Kuwait Finance House",
    bankColor: 'green',
    loanName: "KFH Ijarah Mawsufah Fi Al-Zimmah Asset Acquisition Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM150,000 up to RM249,999", 4.89, 150000, 249999],
      ["RM250,000 up to RM499,999", 4.45, 250000, 499999],
      ["More than RM500,000", 5.09, 500000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/KFH-Ijarah-Mawsufah-Fi-Al-Zimmah-Asset-Acquisition-Financing-i.html",
  },
  {
    bankLogo: ICBCLogo,
    bankName: "ICBC Bank",
    bankColor: 'red',
    loanName: "ICBC Home Loan",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM350,000", 4.65, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Malaysians and Foreigners can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/ICBC-Home-Loan.html",
  },
  {
    bankLogo: HongLeongLogo,
    bankName: "Hong Leong",
    bankColor: 'blue',
    loanName: "Hong Leong Housing Loan",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM400,000", 4.75, 400000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 24 to 70 years old",
      "Malaysians and Foreigners can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Hong-Leong-Housing-Loan.html",
  },
  {
    bankLogo: MBSBLogo,
    bankName: "MBSB Bank",
    bankColor: 'blue',
    loanName: "MBSB Standard Home Financing-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM500,000", 4.55, 0, 500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 40 years old",
      "Malaysians and Foreigners can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/MBSB-Standard-Home-Financing-i.html",
  },
  {
    bankLogo: BSNLogo,
    bankName: "BSN Bank",
    bankColor: 'green',
    loanName: "BSN MyHome Youth Housing Scheme",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["RM100,000 up to RM500,000", 4.45, 100000, 500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 45 years old",
      "Only Malaysians can apply",
      "First home buyers for married youth",
    ],
    link: "https://ringgitplus.com/en/home-loan/BSN-MyHome-Youth-Housing-Scheme.html",
  },
  {
    bankLogo: CIMBLogo,
    bankName: "CIMB Bank",
    bankColor: 'red',
    loanName: "CIMB HomeFlexi Smart",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["Up to RM349,999", 4.55, 0, 349999],
      ["More than RM350,000", 4.35, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/CIMB-HomeFlexi-Smart.html",
  },
  {
    bankLogo: BangkokLogo,
    bankName: "Bangkok Bank",
    bankColor: 'blue',
    loanName: "Bangkok Bank Home Loan",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM300,000", 5.67, 300000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM60,000 or higher",
      "Age to apply must be between 18 to 65 years old",
      "Only Malaysians can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Bangkok-Bank-Home-Loan.html",
  },
  {
    bankLogo: AffinLogo,
    bankName: "Affin Bank",
    bankColor: 'blue',
    loanName: "Affin Bank My First Home Scheme",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["RM100,000 up to RM500,000", 4.96, 100000, 500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM18,000 or higher",
      "Age to apply must be between 18 to 40 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Affin-Bank-My-First-Home-Scheme.html",
  },
  {
    bankLogo: OCBCLogo,
    bankName: "OCBC Bank",
    bankColor: 'red',
    loanName: "OCBC My First Home Scheme",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["RM100,000 up to RM500,000", 4.45, 100000, 500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 40 years old",
      "Only Malaysians can apply",
      "Available for first time home buyers",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/OCBC-My-First-Home-Scheme.html",
  },
  {
    bankLogo: AIALogo,
    bankName: "AIA",
    bankColor: 'red',
    loanName: "AIA Fixed Rate Home Loan Package 1",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.99, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians, Permanent Residents, Foreigners residing in Malaysia with valid permit can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/AIA-Fixed-Rate-Home-Loan-Package-1.html",
  },
  {
    bankLogo: AffinLogo,
    bankName: "Affin Bank",
    bankColor: 'blue',
    loanName: "Affin Home Invest-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM100,000", 4.36, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Affin-Home-Invest-i.html",
  },
  {
    bankLogo: AffinLogo,
    bankName: "Affin Bank",
    bankColor: 'blue',
    loanName: "Affin Tawarruq Home Financing-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["RM200,000 up to RM1,000,000", 5.01, 200000, 1000000],
      ["More than RM1,000,001", 4.96, 1000001, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Affin-Tawarruq-Home-Financing-i.html",
  },
  {
    bankLogo: MBSBLogo,
    bankName: "MBSB Bank",
    bankColor: 'blue',
    loanName: "MBSB My First Home Scheme-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM100,000 up to RM500,000", 4.55, 100000, 500000],
    ],
    benefits: [
      "Age to apply must be between 18 to 40 years old",
      "Only Malaysians can apply",
      "Available for first time home buyers",
    ],
    link: "https://ringgitplus.com/en/home-loan/MBSB-My-First-Home-Scheme-i.html",
  },
  {
    bankLogo: BankRakyatLogo,
    bankName: "Bank Rakyat Bank",
    bankColor: 'orange',
    loanName: "Bank Rakyat Home Financing-i My 1st Home Scheme",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM100,000 up to RM2,000,000", 4.78, 100000, 2000000],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 35 years old",
      "Only Malaysians can apply",
      "Available for first time home buyers",
    ],
    link: "https://ringgitplus.com/en/home-loan/Bank-Rakyat-Home-Financing-i-My-1st-Home-Scheme.html",
  },
  {
    bankLogo: BSNLogo,
    bankName: "BSN Bank",
    bankColor: 'green',
    loanName: "BSN MyHome-i Youth Housing Scheme",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM100,000 up to RM500,000", 4.45, 100000, 500000],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 45 years old",
      "Only Malaysians can apply",
      "First home buyers for married youth",
    ],
    link: "https://ringgitplus.com/en/home-loan/BSN-MyHome-i-Youth-Housing-Scheme.html",
  },
  {
    bankLogo: RHBBankLogo,
    bankName: "RHB Bank",
    bankColor: 'blue',
    loanName: "RHB Equity Home Financing-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM100,000", 4.65, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM18,000 or higher",
      "Age to apply must be between 18 to 60 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/RHB-Equity-Home-Financing-i.html",
  },
  {
    bankLogo: CIMBLogo,
    bankName: "CIMB Bank",
    bankColor: 'red',
    loanName: "CIMB HomeFlexi",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["Up to RM349,000", 4.65, 0, 349000],
      ["More than RM350,000", 4.45, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/CIMB-HomeFlexi.html",
  },
  {
    bankLogo: BankRakyatLogo,
    bankName: "Bank Rakyat Bank",
    bankColor: 'orange',
    loanName: "Bank Rakyat Home Financing-i Zero Entry Cost",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["RM100,000 up to RM1,000,000", 4.93, 100000, 1000000],
    ],
    benefits: [
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/Bank-Rakyat-Home-Financing-i-Zero-Entry-Cost.html",
  },
  {
    bankLogo: BSNLogo,
    bankName: "BSN Bank",
    bankColor: 'green',
    loanName: "BSN MyHome-i",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM100,000", 6.85, 0, 100000],
      ["RM100,001 up to RM300,000", 4.45, 100001, 300000],
      ["RM300,001 up to RM500,000", 4.35, 300001, 500000],
      ["More than RM500,001", 4.25, 500001, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Only Malaysians can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/BSN-MyHome-i.html",
  },
  {
    bankLogo: AffinLogo,
    bankName: "Affin Bank",
    bankColor: 'blue',
    loanName: "Affin Home Build",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["RM100,000 up to RM5,000,000", 5.06, 100000, 5000000],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Malaysians and Foreigners can apply"
    ],
    link: "https://ringgitplus.com/en/home-loan/Affin-Home-Build.html",
  },
  {
    bankLogo: BSNLogo,
    bankName: "BSN Bank",
    bankColor: 'green',
    loanName: "BSN MyHome",
    loanType: "Basic Term Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM100,000", 6.85, 0, 100000],
      ["RM100,001 up to RM300,000", 4.45, 100001, 300000],
      ["RM300,001 up to RM500,000", 4.35, 300001, 500000],
      ["More than RM500,001", 4.25, 500001, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Only Malaysians can apply",
    ],
    link: "https://ringgitplus.com/en/home-loan/BSN-MyHome.html",
  },
  {
    bankLogo: AIALogo,
    bankName: "AIA",
    bankColor: 'red',
    loanName: "AIA Fixed Rate Home Loan Package 3",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.99, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians, Permanent Residents, Foreigners residing in Malaysia with valid permit can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/AIA-Fixed-Rate-Home-Loan-Package-3.html",
  },
  {
    bankLogo: AffinLogo,
    bankName: "Affin Bank",
    bankColor: 'blue',
    loanName: "Affin Bank Home Flexi Plus",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM100,000", 4.71, 100000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 65 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Affin-Bank-Home-Flexi-Plus.html",
  },
  {
    bankLogo: AllianceLogo,
    bankName: "Alliance",
    bankColor: 'blue',
    loanName: "Alliance Bank Conventional Home Loan",
    loanType: "Flexi Loan",
    category: "Conventional",
    interestRate: [
      ["More than RM350,000", 8.43, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Alliance-Bank-Conventional-Home-Loan.html",
  },
  {
    bankLogo: CIMBLogo,
    bankName: "CIMB Bank",
    bankColor: 'red',
    loanName: "CIMB Flexi Home Financing-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["Up to RM349,000", 4.55, 0, 349000],
      ["More than RM350,000", 4.35, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians and Permanent Residents can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/CIMB-Flexi-Home-Financing-i.html",
  },
  {
    bankLogo: AllianceLogo,
    bankName: "Alliance",
    bankColor: 'blue',
    loanName: "Alliance Bank i-Wish Home Financing-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM350,000", 4.36, 350000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Any Nationality can apply",
      "Available for Salaried-Employee",
    ],
    link: "https://ringgitplus.com/en/home-loan/Alliance-Bank-i-Wish-Home-Financing-i.html",
  },
  {
    bankLogo: CIMBLogo,
    bankName: "CIMB Bank",
    bankColor: 'red',
    loanName: "CIMB HomeLoan",
    loanType: "Basic Term Loan",
    category: "Conventional",
    interestRate: [
      ["Up to RM349,000", 4.55, 0, 349000],
      ["More than RM350,000", 4.35, 350000, -1],
    ],
    link: "https://ringgitplus.com/en/home-loan/CIMB-HomeLoan.html",
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 18 to 70 years old",
      "Only Malaysians can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
  },
  {
    bankLogo: PublicBankLogo,
    bankName: "Public Bank",
    bankColor: 'red',
    loanName: "Public Bank Home Equity Financing-i",
    loanType: "Flexi Loan",
    category: "Islamic",
    interestRate: [
      ["More than RM150,000", 4.52, 150000, -1],
    ],
    benefits: [
      "Minimal Annual Income must be RM24,000 or higher",
      "Age to apply must be between 21 to 70 years old",
      "Any Nationality can apply",
      "Available for both Salaried-Employee & Self-Employed Individuals",
    ],
    link: "https://ringgitplus.com/en/home-loan/Public-Bank-Home-Equity-Financing-i.html",
  },
];

export default BankDetails;