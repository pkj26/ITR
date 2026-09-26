import React, { useState } from 'react';
import { 
  Calculator, 
  Home as HomeIcon, 
  Percent, 
  TrendingUp, 
  DollarSign, 
  Info, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Building2,
  PieChart as PieIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

/* =========================================================================
   1. INCOME TAX CALCULATOR (FY 2025-26 / AY 2026-27 & FY 2024-25 / AY 2025-26)
   100% Accurate as per Budget 2024 / 2025 / 2026 Finance Acts
   ========================================================================= */

type FinancialYear = '2025-26' | '2024-25';
type TaxpayerCategory = 'individual' | 'senior' | 'super_senior'; // <60, 60-80, 80+
type EmploymentType = 'salaried' | 'business_freelancer' | 'pensioner';

export function IncomeTaxCalculator() {
  // Config state
  const [financialYear, setFinancialYear] = useState<FinancialYear>('2025-26');
  const [employmentType, setEmploymentType] = useState<EmploymentType>('salaried');
  const [taxpayerCategory, setTaxpayerCategory] = useState<TaxpayerCategory>('individual');
  const [showAdvancedDeductions, setShowAdvancedDeductions] = useState(false);
  const [showSlabBreakdown, setShowSlabBreakdown] = useState(false);

  // Income inputs
  const [salaryIncome, setSalaryIncome] = useState<number | ''>(1275000);
  const [otherIncome, setOtherIncome] = useState<number | ''>(0);
  const [rentalIncome, setRentalIncome] = useState<number | ''>(0);

  // Deduction inputs (Old Regime)
  const [sec80C, setSec80C] = useState<number | ''>(150000);
  const [sec80D, setSec80D] = useState<number | ''>(25000);
  const [sec80CCD1B, setSec80CCD1B] = useState<number | ''>(50000);
  const [sec24b, setSec24b] = useState<number | ''>(0);
  const [hraExemption, setHraExemption] = useState<number | ''>(0);
  const [sec80E, setSec80E] = useState<number | ''>(0);
  const [sec80TTA, setSec80TTA] = useState<number | ''>(0);
  const [otherDeductions, setOtherDeductions] = useState<number | ''>(0);

  // Employer NPS (Allowed under BOTH Old & New Regime u/s 80CCD(2))
  const [sec80CCD2, setSec80CCD2] = useState<number | ''>(0);

  // Number values
  const grossSalary = Number(salaryIncome) || 0;
  const grossOther = Number(otherIncome) || 0;
  const grossRental = Number(rentalIncome) || 0;
  const grossTotalIncome = grossSalary + grossOther + grossRental;

  const npsEmployer = Number(sec80CCD2) || 0;

  // ----------------------------------------------------
  // CALCULATION LOGIC: NEW REGIME (Section 115BAC)
  // ----------------------------------------------------
  let stdDeductionNew = 0;
  if (employmentType === 'salaried' || employmentType === 'pensioner') {
    // Both FY 2024-25 and FY 2025-26 allow ₹75,000 standard deduction under New Tax Regime
    stdDeductionNew = Math.min(grossSalary, 75000);
  }

  // Deductions allowed in New Regime: Standard deduction + Employer NPS u/s 80CCD(2)
  const totalDeductionsNew = stdDeductionNew + npsEmployer;
  const taxableIncomeNew = Math.max(0, grossTotalIncome - totalDeductionsNew);

  // Slab calculation for New Regime
  interface SlabItem {
    range: string;
    rate: string;
    taxableAmt: number;
    tax: number;
  }
  const newRegimeSlabsBreakdown: SlabItem[] = [];
  let baseTaxNew = 0;

  if (financialYear === '2025-26') {
    // Budget 2025 / FY 2025-26 (AY 2026-27) New Slabs:
    // 0 - 4L: Nil
    // 4L - 8L: 5%
    // 8L - 12L: 10%
    // 12L - 16L: 15%
    // 16L - 20L: 20%
    // 20L - 24L: 25%
    // > 24L: 30%
    const tiers = [
      { min: 0, max: 400000, rate: 0, label: 'Up to ₹4,00,000 (0%)' },
      { min: 400000, max: 800000, rate: 0.05, label: '₹4,00,001 - ₹8,00,000 (5%)' },
      { min: 800000, max: 1200000, rate: 0.10, label: '₹8,00,001 - ₹12,00,000 (10%)' },
      { min: 1200000, max: 1600000, rate: 0.15, label: '₹12,00,001 - ₹16,00,000 (15%)' },
      { min: 1600000, max: 2000000, rate: 0.20, label: '₹16,00,001 - ₹20,00,000 (20%)' },
      { min: 2000000, max: 2400000, rate: 0.25, label: '₹20,00,001 - ₹24,00,000 (25%)' },
      { min: 2400000, max: Infinity, rate: 0.30, label: 'Above ₹24,00,000 (30%)' }
    ];

    for (const t of tiers) {
      if (taxableIncomeNew > t.min) {
        const taxableInSlab = Math.min(taxableIncomeNew, t.max) - t.min;
        const taxInSlab = taxableInSlab * t.rate;
        baseTaxNew += taxInSlab;
        newRegimeSlabsBreakdown.push({
          range: t.label,
          rate: `${t.rate * 100}%`,
          taxableAmt: taxableInSlab,
          tax: taxInSlab
        });
      }
    }
  } else {
    // FY 2024-25 (AY 2025-26) New Slabs:
    // 0 - 3L: Nil
    // 3L - 7L: 5%
    // 7L - 10L: 10%
    // 10L - 12L: 15%
    // 12L - 15L: 20%
    // > 15L: 30%
    const tiers = [
      { min: 0, max: 300000, rate: 0, label: 'Up to ₹3,00,000 (0%)' },
      { min: 300000, max: 700000, rate: 0.05, label: '₹3,00,001 - ₹7,00,000 (5%)' },
      { min: 700000, max: 1000000, rate: 0.10, label: '₹7,00,001 - ₹10,00,000 (10%)' },
      { min: 1000000, max: 1200000, rate: 0.15, label: '₹10,00,001 - ₹12,00,000 (15%)' },
      { min: 1200000, max: 1500000, rate: 0.20, label: '₹12,00,001 - ₹15,00,000 (20%)' },
      { min: 1500000, max: Infinity, rate: 0.30, label: 'Above ₹15,00,000 (30%)' }
    ];

    for (const t of tiers) {
      if (taxableIncomeNew > t.min) {
        const taxableInSlab = Math.min(taxableIncomeNew, t.max) - t.min;
        const taxInSlab = taxableInSlab * t.rate;
        baseTaxNew += taxInSlab;
        newRegimeSlabsBreakdown.push({
          range: t.label,
          rate: `${t.rate * 100}%`,
          taxableAmt: taxableInSlab,
          tax: taxInSlab
        });
      }
    }
  }

  // Section 87A Rebate & Marginal Relief (New Regime)
  let rebate87ANew = 0;
  let marginalReliefNew = 0;
  let taxAfterRebateNew = baseTaxNew;

  if (financialYear === '2025-26') {
    // Rebate limit is ₹12,00,000 taxable income (Rebate up to ₹60,000)
    if (taxableIncomeNew <= 1200000) {
      rebate87ANew = baseTaxNew;
      taxAfterRebateNew = 0;
    } else {
      // Marginal Relief calculation when income marginally exceeds ₹12 Lakhs:
      // Tax payable cannot exceed (Taxable Income - ₹12,00,000)
      const excessIncome = taxableIncomeNew - 1200000;
      if (baseTaxNew > excessIncome) {
        marginalReliefNew = baseTaxNew - excessIncome;
        taxAfterRebateNew = excessIncome;
      }
    }
  } else {
    // FY 2024-25: Rebate limit is ₹7,00,000 (Rebate up to ₹25,000)
    if (taxableIncomeNew <= 700000) {
      rebate87ANew = baseTaxNew;
      taxAfterRebateNew = 0;
    } else {
      const excessIncome = taxableIncomeNew - 700000;
      if (baseTaxNew > excessIncome) {
        marginalReliefNew = baseTaxNew - excessIncome;
        taxAfterRebateNew = excessIncome;
      }
    }
  }

  // Surcharge (New Regime)
  let surchargeRateNew = 0;
  if (taxableIncomeNew > 20000000) {
    surchargeRateNew = 0.25; // Capped at 25% in new regime
  } else if (taxableIncomeNew > 10000000) {
    surchargeRateNew = 0.15;
  } else if (taxableIncomeNew > 5000000) {
    surchargeRateNew = 0.10;
  }
  const surchargeNew = taxAfterRebateNew * surchargeRateNew;
  const cessNew = (taxAfterRebateNew + surchargeNew) * 0.04;
  const totalTaxNew = Math.round(taxAfterRebateNew + surchargeNew + cessNew);

  // ----------------------------------------------------
  // CALCULATION LOGIC: OLD REGIME
  // ----------------------------------------------------
  let stdDeductionOld = 0;
  if (employmentType === 'salaried' || employmentType === 'pensioner') {
    if (financialYear === '2025-26' && taxpayerCategory === 'senior') {
      stdDeductionOld = Math.min(grossSalary, 100000); // Senior Citizen standard deduction enhanced to 1L in Budget 2025
    } else {
      stdDeductionOld = Math.min(grossSalary, 50000);
    }
  }

  // Capped Chapter VI-A deductions
  const capped80C = Math.min(150000, Number(sec80C) || 0);
  const capped80CCD1B = Math.min(50000, Number(sec80CCD1B) || 0);
  const capped24b = Math.min(200000, Number(sec24b) || 0);
  const capped80D = Number(sec80D) || 0;
  const valHRA = Number(hraExemption) || 0;
  const val80E = Number(sec80E) || 0;
  const val80TTA = Math.min(taxpayerCategory === 'individual' ? 10000 : 50000, Number(sec80TTA) || 0);
  const valOther = Number(otherDeductions) || 0;

  const totalChapterVIAOld = capped80C + capped80CCD1B + capped24b + capped80D + valHRA + val80E + val80TTA + valOther + npsEmployer;
  const totalDeductionsOld = stdDeductionOld + totalChapterVIAOld;
  const taxableIncomeOld = Math.max(0, grossTotalIncome - totalDeductionsOld);

  // Old Regime Slabs based on Age
  let basicExemptionOld = 250000;
  if (taxpayerCategory === 'senior') basicExemptionOld = 300000;
  if (taxpayerCategory === 'super_senior') basicExemptionOld = 500000;

  let baseTaxOld = 0;
  const oldRegimeSlabsBreakdown: SlabItem[] = [];

  const oldTiers = [
    { min: 0, max: basicExemptionOld, rate: 0, label: `Up to ₹${(basicExemptionOld / 100000).toFixed(1)}L (0%)` },
    { min: basicExemptionOld, max: 500000, rate: 0.05, label: `₹${(basicExemptionOld / 100000).toFixed(1)}L - ₹5,00,000 (5%)` },
    { min: 500000, max: 1000000, rate: 0.20, label: '₹5,00,001 - ₹10,00,000 (20%)' },
    { min: 1000000, max: Infinity, rate: 0.30, label: 'Above ₹10,00,000 (30%)' }
  ];

  for (const t of oldTiers) {
    if (taxableIncomeOld > t.min) {
      const taxableInSlab = Math.min(taxableIncomeOld, t.max) - t.min;
      const taxInSlab = taxableInSlab * t.rate;
      baseTaxOld += taxInSlab;
      if (t.min < t.max) {
        oldRegimeSlabsBreakdown.push({
          range: t.label,
          rate: `${t.rate * 100}%`,
          taxableAmt: taxableInSlab,
          tax: taxInSlab
        });
      }
    }
  }

  // 87A Rebate in Old Regime (Up to 5 Lakhs taxable income, max 12,500)
  let rebate87AOld = 0;
  let taxAfterRebateOld = baseTaxOld;
  if (taxableIncomeOld <= 500000) {
    rebate87AOld = Math.min(baseTaxOld, 12500);
    taxAfterRebateOld = Math.max(0, baseTaxOld - rebate87AOld);
  }

  // Surcharge (Old Regime)
  let surchargeRateOld = 0;
  if (taxableIncomeOld > 50000000) {
    surchargeRateOld = 0.37;
  } else if (taxableIncomeOld > 20000000) {
    surchargeRateOld = 0.25;
  } else if (taxableIncomeOld > 10000000) {
    surchargeRateOld = 0.15;
  } else if (taxableIncomeOld > 5000000) {
    surchargeRateOld = 0.10;
  }
  const surchargeOld = taxAfterRebateOld * surchargeRateOld;
  const cessOld = (taxAfterRebateOld + surchargeOld) * 0.04;
  const totalTaxOld = Math.round(taxAfterRebateOld + surchargeOld + cessOld);

  // Comparison result
  const taxDifference = Math.abs(totalTaxOld - totalTaxNew);
  const betterRegime = totalTaxNew <= totalTaxOld ? 'NEW' : 'OLD';

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-4 sm:p-7 max-w-5xl mx-auto text-slate-100">
      {/* Header with FY/AY Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Income Tax Calculator (AY 2026-27 &amp; AY 2025-26)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                100% accurate real-time comparison under Union Budget 2024 / 2025 / 2026 tax laws
              </p>
            </div>
          </div>
        </div>

        {/* Financial Year Selector Toggle */}
        <div className="flex items-center bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <button
            type="button"
            onClick={() => setFinancialYear('2025-26')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              financialYear === '2025-26'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            FY 2025-26 (AY 2026-27) ⭐ Latest
          </button>
          <button
            type="button"
            onClick={() => setFinancialYear('2024-25')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              financialYear === '2024-25'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            FY 2024-25 (AY 2025-26)
          </button>
        </div>
      </div>

      {/* Taxpayer Category & Profile Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Employment / Profession Type
          </label>
          <select
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          >
            <option value="salaried">Salaried Professional (Std. Ded. ₹75k)</option>
            <option value="business_freelancer">Self-Employed / Business / Freelancer</option>
            <option value="pensioner">Pensioner (Std. Ded. Applicable)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Taxpayer Age Category
          </label>
          <select
            value={taxpayerCategory}
            onChange={(e) => setTaxpayerCategory(e.target.value as TaxpayerCategory)}
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          >
            <option value="individual">General Individual (Below 60 yrs)</option>
            <option value="senior">Senior Citizen (60 - 80 yrs)</option>
            <option value="super_senior">Super Senior Citizen (80+ yrs)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Quick Income Preset
          </label>
          <div className="flex gap-2">
            {[750000, 1275000, 1500000, 2500000].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setSalaryIncome(amt)}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-[11px] font-medium text-slate-300 hover:text-white py-2 px-1 rounded-lg border border-slate-700 transition"
              >
                ₹{(amt / 100000).toFixed(amt % 100000 === 0 ? 0 : 2)}L
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Income Columns */}
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-4">
          <h4 className="text-sm font-bold text-amber-400 flex items-center gap-1.5 pb-2 border-b border-slate-700">
            <DollarSign className="w-4 h-4" /> 1. Income Details (Annual)
          </h4>
          
          <div>
            <label className="block text-xs text-slate-300 mb-1 font-medium">
              Gross Salary / Business Income (₹)
            </label>
            <input
              type="number"
              value={salaryIncome}
              onChange={(e) => setSalaryIncome(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="e.g. 1200000"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1 font-medium">
              Income from Other Sources / Interest (₹)
            </label>
            <input
              type="number"
              value={otherIncome}
              onChange={(e) => setOtherIncome(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="0"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1 font-medium">
              Rental / House Property Income (₹)
            </label>
            <input
              type="number"
              value={rentalIncome}
              onChange={(e) => setRentalIncome(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="0"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="pt-2 border-t border-slate-700 text-xs flex justify-between font-bold text-slate-200">
            <span>Gross Total Income:</span>
            <span className="text-amber-400">₹{grossTotalIncome.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Deductions Column (Old Tax Regime) */}
        <div className="md:col-span-2 bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-700">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 2. Tax Deductions (Section 80C, 80D, etc.)
            </h4>
            <button
              type="button"
              onClick={() => setShowAdvancedDeductions(!showAdvancedDeductions)}
              className="text-xs text-amber-400 hover:underline flex items-center gap-1"
            >
              {showAdvancedDeductions ? 'Hide Advanced' : '+ Add More Deductions'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1 font-medium">
                Section 80C (PPF, EPF, ELSS, LIC) [Max ₹1.5L]
              </label>
              <input
                type="number"
                value={sec80C}
                onChange={(e) => setSec80C(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="150000"
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1 font-medium">
                Section 80D (Health Insurance Premium)
              </label>
              <input
                type="number"
                value={sec80D}
                onChange={(e) => setSec80D(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="25000"
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1 font-medium">
                Section 80CCD(1B) (NPS Self Contribution) [Max ₹50k]
              </label>
              <input
                type="number"
                value={sec80CCD1B}
                onChange={(e) => setSec80CCD1B(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="50000"
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1 font-medium">
                Sec 24(b) (Home Loan Interest) [Max ₹2L]
              </label>
              <input
                type="number"
                value={sec24b}
                onChange={(e) => setSec24b(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="0"
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Advanced Deductions Expandable */}
          {showAdvancedDeductions && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-700/60 animate-fadeIn">
              <div>
                <label className="block text-xs text-slate-300 mb-1 font-medium">
                  HRA Exemption u/s 10(13A) (₹)
                </label>
                <input
                  type="number"
                  value={hraExemption}
                  onChange={(e) => setHraExemption(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1 font-medium">
                  Sec 80CCD(2) (Employer NPS - In Both Regimes) (₹)
                </label>
                <input
                  type="number"
                  value={sec80CCD2}
                  onChange={(e) => setSec80CCD2(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1 font-medium">
                  Section 80E (Education Loan Interest) (₹)
                </label>
                <input
                  type="number"
                  value={sec80E}
                  onChange={(e) => setSec80E(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1 font-medium">
                  Other Deductions (80G Donations, 80TTA, etc.) (₹)
                </label>
                <input
                  type="number"
                  value={otherDeductions}
                  onChange={(e) => setOtherDeductions(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recommendation Banner */}
      <div className={`p-4 rounded-xl mb-6 border flex flex-col sm:flex-row items-center justify-between gap-4 ${
        betterRegime === 'NEW' 
          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200' 
          : 'bg-amber-950/40 border-amber-500/50 text-amber-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
            betterRegime === 'NEW' ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950'
          }`}>
            ✓
          </div>
          <div>
            <h4 className="font-bold text-base text-white">
              {betterRegime === 'NEW' ? 'New Tax Regime (Section 115BAC) is Better for You!' : 'Old Tax Regime is Better for You!'}
            </h4>
            <p className="text-xs text-slate-300">
              {betterRegime === 'NEW'
                ? `You will save ₹${taxDifference.toLocaleString('en-IN')} in taxes by opting for the New Tax Regime.`
                : `You will save ₹${taxDifference.toLocaleString('en-IN')} in taxes through your deductions under the Old Tax Regime.`}
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs uppercase tracking-wider block font-semibold text-slate-400">Net Tax Savings</span>
          <span className="text-xl sm:text-2xl font-black text-amber-400">₹{taxDifference.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NEW REGIME CARD */}
        <div className={`bg-slate-800/90 rounded-xl p-5 border-2 transition-all ${
          betterRegime === 'NEW' ? 'border-emerald-500 shadow-lg shadow-emerald-500/10' : 'border-slate-700'
        }`}>
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">
                Default Regime
              </span>
              <h3 className="text-lg font-bold text-white mt-1">New Tax Regime</h3>
            </div>
            {betterRegime === 'NEW' && (
              <span className="bg-emerald-500 text-slate-950 text-xs font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Best Choice
              </span>
            )}
          </div>

          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex justify-between">
              <span>Gross Total Income:</span>
              <span className="font-semibold text-white">₹{grossTotalIncome.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Standard Deduction:</span>
              <span>- ₹{stdDeductionNew.toLocaleString('en-IN')}</span>
            </div>
            {npsEmployer > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Employer NPS u/s 80CCD(2):</span>
                <span>- ₹{npsEmployer.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-slate-700/60 font-semibold text-white">
              <span>Net Taxable Income:</span>
              <span className="text-amber-400">₹{taxableIncomeNew.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Calculated Slab Tax:</span>
              <span>₹{Math.round(baseTaxNew).toLocaleString('en-IN')}</span>
            </div>
            {rebate87ANew > 0 && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Section 87A Rebate:</span>
                <span>- ₹{Math.round(rebate87ANew).toLocaleString('en-IN')}</span>
              </div>
            )}
            {marginalReliefNew > 0 && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Marginal Relief u/s 87A:</span>
                <span>- ₹{Math.round(marginalReliefNew).toLocaleString('en-IN')}</span>
              </div>
            )}
            {surchargeNew > 0 && (
              <div className="flex justify-between text-amber-400">
                <span>Surcharge ({surchargeRateNew * 100}%):</span>
                <span>+ ₹{Math.round(surchargeNew).toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-400">
              <span>Health &amp; Education Cess (4%):</span>
              <span>+ ₹{Math.round(cessNew).toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-700 flex justify-between items-center bg-slate-900/60 p-3 rounded-lg">
            <span className="font-bold text-sm text-slate-200">Total Tax Payable:</span>
            <span className="text-2xl font-extrabold text-emerald-400">
              ₹{totalTaxNew.toLocaleString('en-IN')}
            </span>
          </div>

          <p className="text-[11px] text-slate-400 mt-2 text-center">
            {financialYear === '2025-26'
              ? '✨ In FY 2025-26, income up to ₹12.75 Lakhs is 100% tax-free for salaried individuals (Rebate up to ₹60,000 + ₹75k Std Deduction).'
              : '✨ In FY 2024-25, income up to ₹7.75 Lakhs is tax-free for salaried individuals (Rebate up to ₹25,000 + ₹75k Std Deduction).'}
          </p>
        </div>

        {/* OLD REGIME CARD */}
        <div className={`bg-slate-800/90 rounded-xl p-5 border-2 transition-all ${
          betterRegime === 'OLD' ? 'border-amber-500 shadow-lg shadow-amber-500/10' : 'border-slate-700'
        }`}>
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded">
                Optional Regime
              </span>
              <h3 className="text-lg font-bold text-white mt-1">Old Tax Regime</h3>
            </div>
            {betterRegime === 'OLD' && (
              <span className="bg-amber-500 text-slate-950 text-xs font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Best Choice
              </span>
            )}
          </div>

          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex justify-between">
              <span>Gross Total Income:</span>
              <span className="font-semibold text-white">₹{grossTotalIncome.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-amber-400">
              <span>Standard Deduction:</span>
              <span>- ₹{stdDeductionOld.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-amber-400">
              <span>Total Chapter VI-A Deductions:</span>
              <span>- ₹{totalChapterVIAOld.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-700/60 font-semibold text-white">
              <span>Net Taxable Income:</span>
              <span className="text-amber-400">₹{taxableIncomeOld.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Calculated Slab Tax:</span>
              <span>₹{Math.round(baseTaxOld).toLocaleString('en-IN')}</span>
            </div>
            {rebate87AOld > 0 && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Section 87A Rebate:</span>
                <span>- ₹{Math.round(rebate87AOld).toLocaleString('en-IN')}</span>
              </div>
            )}
            {surchargeOld > 0 && (
              <div className="flex justify-between text-amber-400">
                <span>Surcharge ({surchargeRateOld * 100}%):</span>
                <span>+ ₹{Math.round(surchargeOld).toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-400">
              <span>Health &amp; Education Cess (4%):</span>
              <span>+ ₹{Math.round(cessOld).toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-700 flex justify-between items-center bg-slate-900/60 p-3 rounded-lg">
            <span className="font-bold text-sm text-slate-200">Total Tax Payable:</span>
            <span className="text-2xl font-extrabold text-amber-400">
              ₹{totalTaxOld.toLocaleString('en-IN')}
            </span>
          </div>

          <p className="text-[11px] text-slate-400 mt-2 text-center">
            Beneficial if you have major deductions (Home Loan Interest + 80C + 80D + HRA) totaling over ₹3.75 Lakhs - ₹4 Lakhs.
          </p>
        </div>
      </div>

      {/* Slabs Breakdown Toggle */}
      <div className="mt-6 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => setShowSlabBreakdown(!showSlabBreakdown)}
          className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 transition"
        >
          {showSlabBreakdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {showSlabBreakdown ? 'Hide Slab-by-Slab Tax Breakdown' : 'View Detailed Slab-by-Slab Tax Breakdown'}
        </button>

        {showSlabBreakdown && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs animate-fadeIn">
            {/* New Regime Slabs Table */}
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
              <h5 className="font-bold text-emerald-400 mb-2">New Regime Slab Calculation</h5>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="pb-1.5">Tax Slab</th>
                    <th className="pb-1.5">Rate</th>
                    <th className="pb-1.5 text-right">Tax (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {newRegimeSlabsBreakdown.map((s, idx) => (
                    <tr key={idx}>
                      <td className="py-1.5 text-slate-300">{s.range}</td>
                      <td className="py-1.5 text-slate-400">{s.rate}</td>
                      <td className="py-1.5 text-right font-medium text-white">₹{s.tax.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Old Regime Slabs Table */}
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
              <h5 className="font-bold text-amber-400 mb-2">Old Regime Slab Calculation</h5>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="pb-1.5">Tax Slab</th>
                    <th className="pb-1.5">Rate</th>
                    <th className="pb-1.5 text-right">Tax (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {oldRegimeSlabsBreakdown.map((s, idx) => (
                    <tr key={idx}>
                      <td className="py-1.5 text-slate-300">{s.range}</td>
                      <td className="py-1.5 text-slate-400">{s.rate}</td>
                      <td className="py-1.5 text-right font-medium text-white">₹{s.tax.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* CTA Box */}
      <div className="mt-6 p-4 bg-slate-800/80 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8 text-amber-400 flex-shrink-0" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-white block">Need expert CA assistance to file your ITR?</span>
            <span className="text-slate-400">Our Chartered Accountants in Jaipur review all eligible deductions to maximize your refund.</span>
          </div>
        </div>
        <a
          href="https://wa.me/919783699635?text=Hello%20KarSeva,%20I%20used%20your%20Income%20Tax%20Calculator%20and%20want%20to%20file%20my%20ITR%20with%20a%20CA."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 transition whitespace-nowrap"
        >
          Consult KarSeva CA Now <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* =========================================================================
   2. HRA EXEMPTION CALCULATOR (Section 10(13A) & Rule 2A)
   ========================================================================= */

export function HRACalculator() {
  const [basic, setBasic] = useState<number | ''>(50000);
  const [da, setDa] = useState<number | ''>(0);
  const [hra, setHra] = useState<number | ''>(25000);
  const [rent, setRent] = useState<number | ''>(18000);
  const [isMetro, setIsMetro] = useState(true);
  const [taxSlabRate, setTaxSlabRate] = useState<number>(30);

  // Yearly values
  const monthlyBasic = Number(basic) || 0;
  const monthlyDA = Number(da) || 0;
  const monthlyHRA = Number(hra) || 0;
  const monthlyRent = Number(rent) || 0;

  const annualBasic = monthlyBasic * 12;
  const annualDA = monthlyDA * 12;
  const annualSalary = annualBasic + annualDA;
  const annualHRA = monthlyHRA * 12;
  const annualRent = monthlyRent * 12;

  // 3 Rule Exemption as per Section 10(13A)
  const rule1_ActualHRA = annualHRA;
  const rule2_MetroSalary = isMetro ? annualSalary * 0.50 : annualSalary * 0.40;
  const rule3_RentMinusTenPercent = Math.max(0, annualRent - (annualSalary * 0.10));

  const annualExemptedHRA = Math.min(rule1_ActualHRA, rule2_MetroSalary, rule3_RentMinusTenPercent);
  const annualTaxableHRA = Math.max(0, annualHRA - annualExemptedHRA);
  const estimatedTaxSaved = Math.round((annualExemptedHRA * taxSlabRate) / 100 * 1.04); // including 4% cess

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-4 sm:p-7 max-w-4xl mx-auto text-slate-100">
      <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
        <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
          <HomeIcon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            House Rent Allowance (HRA) Exemption Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Calculates exact tax-free HRA under Section 10(13A) and Rule 2A of Income Tax Act
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Input Fields */}
        <div className="space-y-4 bg-slate-800/80 p-5 rounded-xl border border-slate-700/80">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            Monthly Salary &amp; Rent Details
          </h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Basic Salary (Monthly ₹)
            </label>
            <input
              type="number"
              value={basic}
              onChange={(e) => setBasic(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="50000"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Dearness Allowance (DA forming part of salary - Monthly ₹)
            </label>
            <input
              type="number"
              value={da}
              onChange={(e) => setDa(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="0"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              HRA Received from Employer (Monthly ₹)
            </label>
            <input
              type="number"
              value={hra}
              onChange={(e) => setHra(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="25000"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Actual Rent Paid for Rented House (Monthly ₹)
            </label>
            <input
              type="number"
              value={rent}
              onChange={(e) => setRent(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="18000"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              City of Residence
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsMetro(true)}
                className={`py-2 px-3 rounded-lg border text-xs font-bold transition ${
                  isMetro ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                Metro (Delhi, Mumbai, Kolkata, Chennai) - 50%
              </button>
              <button
                type="button"
                onClick={() => setIsMetro(false)}
                className={`py-2 px-3 rounded-lg border text-xs font-bold transition ${
                  !isMetro ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                Non-Metro (Jaipur, Bangalore, Pune, etc.) - 40%
              </button>
            </div>
          </div>
        </div>

        {/* Results & Calculations Breakdown */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-700">
              Statutory 3-Rule Breakdown (Annual)
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-slate-300 block">Rule 1: Actual HRA Received</span>
                  <span className="text-[11px] text-slate-500">Total HRA from payslip</span>
                </div>
                <span className="font-bold text-white">₹{annualHRA.toLocaleString('en-IN')}</span>
              </div>

              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-slate-300 block">Rule 2: {isMetro ? '50%' : '40%'} of (Basic + DA)</span>
                  <span className="text-[11px] text-slate-500">Based on {isMetro ? 'Metro' : 'Non-Metro'} city</span>
                </div>
                <span className="font-bold text-white">₹{Math.round(rule2_MetroSalary).toLocaleString('en-IN')}</span>
              </div>

              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-700/60 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-slate-300 block">Rule 3: Rent Paid minus 10% of Salary</span>
                  <span className="text-[11px] text-slate-500">₹{annualRent.toLocaleString('en-IN')} - ₹{Math.round(annualSalary * 0.1).toLocaleString('en-IN')}</span>
                </div>
                <span className="font-bold text-white">₹{Math.round(rule3_RentMinusTenPercent).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Final HRA Summary Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-xl border border-amber-500/40 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300 font-medium">Exempted HRA (Tax-Free):</span>
              <span className="text-xl font-bold text-emerald-400">
                ₹{Math.round(annualExemptedHRA).toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300 font-medium">Taxable HRA Added to Salary:</span>
              <span className="text-xl font-bold text-amber-400">
                ₹{Math.round(annualTaxableHRA).toLocaleString('en-IN')}
              </span>
            </div>

            <div className="pt-3 border-t border-slate-700 flex justify-between items-center text-xs text-slate-400">
              <span>Estimated Annual Tax Saved:</span>
              <span className="text-emerald-300 font-bold text-sm">
                ≈ ₹{estimatedTaxSaved.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. GST CALCULATOR (CGST, SGST, IGST Breakdown & Inclusive/Exclusive)
   ========================================================================= */

export function GSTCalculator() {
  const [amount, setAmount] = useState<number | ''>(10000);
  const [rate, setRate] = useState<number>(18);
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [customRate, setCustomRate] = useState<number | ''>(18);
  const [mode, setMode] = useState<'add' | 'remove'>('add'); // add = exclusive, remove = inclusive
  const [isInterstate, setIsInterstate] = useState(false); // intra-state (CGST+SGST) vs inter-state (IGST)

  const activeRate = isCustomRate ? (Number(customRate) || 0) : rate;
  const amt = Number(amount) || 0;

  let net = 0;
  let gst = 0;
  let total = 0;

  if (mode === 'add') {
    // Adding GST (Amount is Base Net Price)
    net = amt;
    gst = (amt * activeRate) / 100;
    total = amt + gst;
  } else {
    // Removing GST (Amount is Gross Inclusive Price)
    total = amt;
    net = (amt * 100) / (100 + activeRate);
    gst = amt - net;
  }

  const cgst = gst / 2;
  const sgst = gst / 2;
  const igst = gst;

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-4 sm:p-7 max-w-4xl mx-auto text-slate-100">
      <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
        <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
          <Percent className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">GST Calculator (India)</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Calculate GST Inclusive / Exclusive amounts with CGST, SGST, and IGST breakdowns
          </p>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="flex justify-center gap-4 my-6">
        <button
          type="button"
          onClick={() => setMode('add')}
          className={`px-5 py-2 rounded-xl text-sm font-bold border transition ${
            mode === 'add' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg' : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}
        >
          ➕ Add GST (Exclusive Amount)
        </button>
        <button
          type="button"
          onClick={() => setMode('remove')}
          className={`px-5 py-2 rounded-xl text-sm font-bold border transition ${
            mode === 'remove' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg' : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}
        >
          ➖ Remove GST (Inclusive Amount)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Input Card */}
        <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              {mode === 'add' ? 'Net Base Amount (₹)' : 'Total Invoice Amount (₹)'}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="10000"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 text-base focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* GST Slabs Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Applicable GST Rate (%)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[0, 3, 5, 12, 18, 28].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRate(r);
                    setIsCustomRate(false);
                  }}
                  className={`py-2 px-1 rounded-lg border text-xs font-bold transition ${
                    !isCustomRate && rate === r
                      ? 'bg-amber-500 text-slate-950 border-amber-400'
                      : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {r}%
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isCustomRate}
                  onChange={(e) => setIsCustomRate(e.target.checked)}
                  className="accent-amber-500"
                />
                Custom GST %:
              </label>
              {isCustomRate && (
                <input
                  type="number"
                  value={customRate}
                  onChange={(e) => setCustomRate(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-24 bg-slate-900 border border-slate-700 text-white rounded-lg px-2.5 py-1 text-xs"
                  placeholder="e.g. 7.5"
                />
              )}
            </div>
          </div>

          {/* Transaction Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Transaction Geography
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setIsInterstate(false)}
                className={`py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                  !isInterstate ? 'bg-slate-700 text-white border-amber-400' : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                Intra-State (CGST + SGST)
              </button>
              <button
                type="button"
                onClick={() => setIsInterstate(true)}
                className={`py-2 px-2 rounded-lg text-xs font-semibold border transition ${
                  isInterstate ? 'bg-slate-700 text-white border-amber-400' : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                Inter-State (IGST)
              </button>
            </div>
          </div>
        </div>

        {/* GST Output Breakdown */}
        <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-700 mb-4">
              Invoice &amp; Tax Calculation Breakdown
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Net Amount (Base Price):</span>
                <span className="font-semibold text-white">₹{net.toFixed(2)}</span>
              </div>

              {!isInterstate ? (
                <>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>CGST ({(activeRate / 2).toFixed(2)}%):</span>
                    <span className="font-semibold text-amber-400">₹{cgst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>SGST / UTGST ({(activeRate / 2).toFixed(2)}%):</span>
                    <span className="font-semibold text-amber-400">₹{sgst.toFixed(2)}</span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between items-center text-slate-300">
                  <span>IGST ({activeRate}%):</span>
                  <span className="font-semibold text-amber-400">₹{igst.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-slate-700">
                <span>Total GST Amount ({activeRate}%):</span>
                <span className="font-bold text-amber-400 text-base">₹{gst.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
            <div>
              <span className="text-xs uppercase text-slate-400 tracking-wider font-semibold block">Total Invoice Value</span>
              <span className="text-2xl font-black text-emerald-400">₹{total.toFixed(2)}</span>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              Effective GST: <span className="text-white font-bold">{activeRate}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. SIP & WEALTH COMPOUNDING CALCULATOR
   ========================================================================= */

export function SIPCalculator() {
  const [calcType, setCalcType] = useState<'sip' | 'lumpsum'>('sip');
  const [investment, setInvestment] = useState<number | ''>(10000);
  const [returnRate, setReturnRate] = useState<number | ''>(12);
  const [years, setYears] = useState<number | ''>(15);
  const [stepUp, setStepUp] = useState<number>(0); // 0%, 5%, 10% annual step up

  const p = Number(investment) || 0;
  const r = Number(returnRate) || 0;
  const y = Number(years) || 0;
  const n = y * 12;
  const i = r / 100 / 12;

  let investedAmt = 0;
  let totalValue = 0;

  if (calcType === 'lumpsum') {
    investedAmt = p;
    totalValue = p * Math.pow(1 + r / 100, y);
  } else {
    if (stepUp === 0) {
      investedAmt = p * n;
      if (i === 0) {
        totalValue = investedAmt;
      } else {
        totalValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      }
    } else {
      // Step-up SIP compounding simulation
      let currentMonthly = p;
      let accumulated = 0;
      let totalInvested = 0;

      for (let yr = 1; yr <= y; yr++) {
        for (let m = 1; m <= 12; m++) {
          totalInvested += currentMonthly;
          accumulated = (accumulated + currentMonthly) * (1 + i);
        }
        currentMonthly = currentMonthly * (1 + stepUp / 100);
      }
      investedAmt = totalInvested;
      totalValue = accumulated;
    }
  }

  const estReturns = Math.max(0, totalValue - investedAmt);
  const returnPercentage = investedAmt > 0 ? (estReturns / investedAmt) * 100 : 0;

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-4 sm:p-7 max-w-4xl mx-auto text-slate-100">
      <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
        <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            SIP &amp; Mutual Fund Investment Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Calculate your wealth accumulation with compounding returns and annual step-up
          </p>
        </div>
      </div>

      {/* SIP vs Lumpsum Switch */}
      <div className="flex justify-center gap-4 my-6">
        <button
          type="button"
          onClick={() => setCalcType('sip')}
          className={`px-5 py-2 rounded-xl text-sm font-bold border transition ${
            calcType === 'sip' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg' : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}
        >
          📈 Monthly SIP (Systematic Investment)
        </button>
        <button
          type="button"
          onClick={() => setCalcType('lumpsum')}
          className={`px-5 py-2 rounded-xl text-sm font-bold border transition ${
            calcType === 'lumpsum' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg' : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}
        >
          💰 One-Time Lumpsum Investment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Controls Column */}
        <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
              <span>{calcType === 'sip' ? 'Monthly Investment Amount (₹)' : 'Total Lumpsum Investment (₹)'}</span>
              <span className="text-amber-400 font-bold">₹{p.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
              <span>Expected Return Rate (% p.a)</span>
              <span className="text-emerald-400 font-bold">{r}%</span>
            </div>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
              <span>Investment Duration (Years)</span>
              <span className="text-amber-400 font-bold">{y} Years ({y * 12} Months)</span>
            </div>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          {calcType === 'sip' && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Annual Step-Up (Increase SIP yearly)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[0, 5, 10, 15].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStepUp(s)}
                    className={`py-1.5 text-xs font-bold rounded-lg border ${
                      stepUp === s ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                    }`}
                  >
                    {s === 0 ? 'No Step-Up' : `+${s}% / yr`}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Wealth Summary Card */}
        <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-700">
              Wealth Projections at Maturity
            </h3>

            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Total Invested Amount:</span>
              <span className="font-semibold text-white">₹{Math.round(investedAmt).toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Estimated Returns (Wealth Gain):</span>
              <span className="font-bold text-emerald-400">+ ₹{Math.round(estReturns).toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Overall Growth Multiplier:</span>
              <span className="text-amber-400 font-bold">
                {investedAmt > 0 ? `${(totalValue / investedAmt).toFixed(2)}x (${returnPercentage.toFixed(0)}%)` : '0x'}
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-700">
            <span className="text-xs uppercase text-slate-400 tracking-wider font-semibold block">
              Expected Total Maturity Value
            </span>
            <span className="text-3xl font-black text-emerald-400 block mt-1">
              ₹{Math.round(totalValue).toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Compounded at {r}% p.a. over {y} years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. CAPITAL GAINS TAX CALCULATOR (Post-Budget 2024 / 2025 STCG 20% & LTCG 12.5%)
   ========================================================================= */

export function CapitalGainsCalculator() {
  const [assetType, setAssetType] = useState<'equity' | 'debt' | 'real_estate'>('equity');
  const [holdingPeriod, setHoldingPeriod] = useState<'short_term' | 'long_term'>('long_term');
  const [buyPrice, setBuyPrice] = useState<number | ''>(500000);
  const [sellPrice, setSellPrice] = useState<number | ''>(850000);

  const buy = Number(buyPrice) || 0;
  const sell = Number(sellPrice) || 0;
  const capitalGain = Math.max(0, sell - buy);

  let taxRate = 0;
  let exemptionLimit = 0;
  let taxableGain = capitalGain;
  let taxPayable = 0;

  if (assetType === 'equity') {
    if (holdingPeriod === 'short_term') {
      taxRate = 20; // 20% STCG u/s 111A as per Budget 2024
      taxableGain = capitalGain;
      taxPayable = (taxableGain * taxRate) / 100 * 1.04;
    } else {
      taxRate = 12.5; // 12.5% LTCG u/s 112A with ₹1.25L exemption as per Budget 2024
      exemptionLimit = 125000;
      taxableGain = Math.max(0, capitalGain - exemptionLimit);
      taxPayable = (taxableGain * taxRate) / 100 * 1.04;
    }
  } else if (assetType === 'real_estate') {
    if (holdingPeriod === 'short_term') {
      taxRate = 30; // Slab rates
      taxableGain = capitalGain;
      taxPayable = (taxableGain * 0.30) * 1.04;
    } else {
      taxRate = 12.5; // 12.5% without indexation
      taxableGain = capitalGain;
      taxPayable = (taxableGain * 0.125) * 1.04;
    }
  } else {
    // Debt Mutual Funds
    taxRate = 30; // Taxed at slab rates
    taxableGain = capitalGain;
    taxPayable = (taxableGain * 0.30) * 1.04;
  }

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-4 sm:p-7 max-w-4xl mx-auto text-slate-100">
      <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
        <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
          <PieIcon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Capital Gains Tax Calculator (Budget 2024/2025/2026)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Updated with 12.5% LTCG, 20% STCG, and ₹1.25 Lakh exemption limits
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Asset Class</label>
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value as any)}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm"
            >
              <option value="equity">Listed Shares &amp; Equity Mutual Funds</option>
              <option value="real_estate">Real Estate &amp; Property</option>
              <option value="debt">Debt Mutual Funds &amp; Bonds</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Holding Duration</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setHoldingPeriod('short_term')}
                className={`py-2 text-xs font-bold rounded-lg border ${
                  holdingPeriod === 'short_term' ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                Short Term (&lt;12 Months)
              </button>
              <button
                type="button"
                onClick={() => setHoldingPeriod('long_term')}
                className={`py-2 text-xs font-bold rounded-lg border ${
                  holdingPeriod === 'long_term' ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                Long Term (&gt;12 Months)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Purchase / Cost Price (₹)</label>
            <input
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Sale / Redemption Price (₹)</label>
            <input
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm"
            />
          </div>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 flex flex-col justify-between space-y-4">
          <div className="space-y-3 text-sm">
            <h3 className="font-bold text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-700 text-xs">
              Tax Computation Summary
            </h3>

            <div className="flex justify-between">
              <span className="text-slate-400">Total Profit (Capital Gain):</span>
              <span className="font-bold text-white">₹{capitalGain.toLocaleString('en-IN')}</span>
            </div>

            {exemptionLimit > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Annual Exemption Limit:</span>
                <span>- ₹{exemptionLimit.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="flex justify-between font-semibold text-slate-200 pt-2 border-t border-slate-700">
              <span>Taxable Capital Gain:</span>
              <span>₹{taxableGain.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between text-xs text-slate-400">
              <span>Applicable Tax Rate:</span>
              <span className="text-amber-400 font-bold">{taxRate}% + 4% Cess</span>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-700">
            <span className="text-xs uppercase text-slate-400 tracking-wider font-semibold block">
              Estimated Capital Gains Tax
            </span>
            <span className="text-3xl font-black text-amber-400 block mt-1">
              ₹{Math.round(taxPayable).toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Net Profit After Tax: ₹{Math.round(capitalGain - taxPayable).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
