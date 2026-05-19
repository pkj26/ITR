import React, { useState } from 'react';

export function GSTCalculator() {
  const [amount, setAmount] = useState<number | ''>(10000);
  const [rate, setRate] = useState<number>(18);
  const [mode, setMode] = useState<'add' | 'remove'>('add');

  const amt = Number(amount) || 0;
  let net = 0, gst = 0, total = 0;
  
  if (mode === 'add') {
    gst = (amt * rate) / 100;
    net = amt;
    total = amt + gst;
  } else {
    net = (amt * 100) / (100 + rate);
    gst = amt - net;
    total = amt;
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full max-w-2xl mx-auto mt-6">
      <h3 className="text-xl font-bold mb-6 text-white text-center">GST Calculator</h3>
      <div className="flex justify-center gap-4 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" checked={mode === 'add'} onChange={() => setMode('add')} className="accent-amber-500" />
          <span className="text-slate-300">Add GST</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" checked={mode === 'remove'} onChange={() => setMode('remove')} className="accent-amber-500" />
          <span className="text-slate-300">Remove GST</span>
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Amount (₹)</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">GST Rate (%)</label>
          <select 
            value={rate} 
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 appearance-none"
          >
            <option value={3}>3%</option>
            <option value={5}>5%</option>
            <option value={12}>12%</option>
            <option value={18}>18%</option>
            <option value={28}>28%</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400">Net Amount</span>
          <span className="text-white font-medium">₹ {net.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-slate-400">GST Amount ({rate}%)</span>
          <span className="text-amber-400 font-medium">₹ {gst.toFixed(2)}</span>
        </div>
        <div className="border-t border-slate-700 pt-3 flex justify-between items-center">
          <span className="text-slate-300 font-bold">Total Amount</span>
          <span className="text-white font-bold text-xl">₹ {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export function SIPCalculator() {
  const [investment, setInvestment] = useState<number | ''>(5000);
  const [returnRate, setReturnRate] = useState<number | ''>(12);
  const [years, setYears] = useState<number | ''>(10);

  const p = Number(investment) || 0;
  const i = (Number(returnRate) || 0) / 100 / 12;
  const n = (Number(years) || 0) * 12;

  let totalValue = 0;
  if (i === 0) {
    totalValue = p * n;
  } else {
    totalValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  }

  const investedAmt = p * n;
  const estReturns = totalValue - investedAmt;

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full max-w-2xl mx-auto mt-6">
      <h3 className="text-xl font-bold mb-6 text-white text-center">SIP Calculator</h3>
      
      <div className="space-y-5 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Monthly Investment (₹)</label>
          <input 
            type="number" 
            value={investment} 
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Expected Return Rate (% p.a)</label>
          <input 
            type="number" 
            value={returnRate} 
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Time Period (Years)</label>
          <input 
            type="number" 
            value={years} 
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400">Total Invested</span>
          <span className="text-white font-medium">₹ {investedAmt.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-slate-400">Est. Returns</span>
          <span className="text-green-400 font-medium">+ ₹ {Math.round(estReturns).toLocaleString('en-IN')}</span>
        </div>
        <div className="border-t border-slate-700 pt-3 flex justify-between items-center">
          <span className="text-slate-300 font-bold">Total Value</span>
          <span className="text-white font-bold text-xl">₹ {Math.round(totalValue).toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}

export function HRACalculator() {
  const [basic, setBasic] = useState<number | ''>(50000);
  const [da, setDa] = useState<number | ''>(0);
  const [hra, setHra] = useState<number | ''>(25000);
  const [rent, setRent] = useState<number | ''>(15000);
  const [isMetro, setIsMetro] = useState(true);

  // Calculates yearly
  const b = (Number(basic) || 0) * 12;
  const d = (Number(da) || 0) * 12;
  const h = (Number(hra) || 0) * 12;
  const r = (Number(rent) || 0) * 12;

  const basicPlusDa = b + d;
  
  // Rules for HRA Exemption: Minimum of
  // 1. Actual HRA received
  // 2. 50% of (Basic + DA) for Metro, 40% for Non-Metro
  // 3. Actual Rent paid - 10% of (Basic + DA)
  
  const rule1 = h;
  const rule2 = isMetro ? basicPlusDa * 0.5 : basicPlusDa * 0.4;
  const rule3 = Math.max(0, r - (basicPlusDa * 0.1));

  const exemptedHRA = Math.min(rule1, rule2, rule3);
  const taxableHRA = Math.max(0, h - exemptedHRA);

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full max-w-2xl mx-auto mt-6">
      <h3 className="text-xl font-bold mb-6 text-white text-center">HRA Exemption Calculator</h3>
      <p className="text-slate-400 text-sm text-center mb-6">Enter your monthly salary details below</p>
      
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Basic Salary (Monthly)</label>
          <input type="number" value={basic} onChange={(e) => setBasic(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">DA (Monthly)</label>
          <input type="number" value={da} onChange={(e) => setDa(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">HRA Received (Monthly)</label>
          <input type="number" value={hra} onChange={(e) => setHra(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Rent Paid (Monthly)</label>
          <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" checked={isMetro} onChange={() => setIsMetro(true)} className="accent-amber-500" />
          <span className="text-slate-300">Metro City</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" checked={!isMetro} onChange={() => setIsMetro(false)} className="accent-amber-500" />
          <span className="text-slate-300">Non-Metro City</span>
        </label>
      </div>

      <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
        <div className="text-center text-slate-400 text-sm mb-4">Yearly Calculation</div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400">Total HRA Received</span>
          <span className="text-white font-medium">₹ {h.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-slate-400">Exempted HRA</span>
          <span className="text-green-400 font-medium">₹ {Math.round(exemptedHRA).toLocaleString('en-IN')}</span>
        </div>
        <div className="border-t border-slate-700 pt-3 flex justify-between items-center">
          <span className="text-slate-300 font-bold">Taxable HRA</span>
          <span className="text-amber-400 font-bold text-xl">₹ {Math.round(taxableHRA).toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}

export function IncomeTaxCalculator() {
  const [income, setIncome] = useState<number | ''>(1200000);
  const [deductions, setDeductions] = useState<number | ''>(150000);

  const inc = Number(income) || 0;
  const ded = Number(deductions) || 0;

  // Extremely simplified calculation for demonstration (FY 2023-24 / AY 2024-25 logic roughly)
  
  // Old Regime
  const taxableOld = Math.max(0, inc - ded - 50000); // minus standard deduction
  let taxOld = 0;
  if(taxableOld > 500000) {
    if(taxableOld > 1000000) {
      taxOld = 12500 + 100000 + ((taxableOld - 1000000) * 0.3);
    } else {
      taxOld = 12500 + ((taxableOld - 500000) * 0.2);
    }
    taxOld = taxOld * 1.04; // Cess
  }

  // New Regime (Standard Deduction of 50k applies now)
  const taxableNew = Math.max(0, inc - 50000); 
  let taxNew = 0;
  if(taxableNew > 700000) { // Rebate till 7L
    if(taxableNew <= 600000) taxNew = (taxableNew - 300000) * 0.05;
    else if(taxableNew <= 900000) taxNew = 15000 + ((taxableNew - 600000) * 0.1);
    else if(taxableNew <= 1200000) taxNew = 45000 + ((taxableNew - 900000) * 0.15);
    else if(taxableNew <= 1500000) taxNew = 90000 + ((taxableNew - 1200000) * 0.2);
    else taxNew = 150000 + ((taxableNew - 1500000) * 0.3);
    
    // marginal relief skipped for simplicity
    taxNew = taxNew * 1.04;
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full max-w-2xl mx-auto mt-6">
      <h3 className="text-xl font-bold mb-6 text-white text-center">Income Tax Calculator (Simulated)</h3>
      
      <div className="space-y-5 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Total Annual Income (₹)</label>
          <input 
            type="number" 
            value={income} 
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Total Deductions e.g. 80C, 80D (₹)</label>
          <input 
            type="number" 
            value={deductions} 
            onChange={(e) => setDeductions(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-900 p-5 rounded-lg border border-slate-700 text-center">
          <div className="text-slate-400 text-sm mb-2">Old Regime Tax</div>
          <div className="text-amber-400 font-bold text-2xl">₹ {Math.round(taxOld).toLocaleString('en-IN')}</div>
          <div className="text-slate-500 text-xs mt-2">Includes standard deduction & cess</div>
        </div>
        <div className="bg-slate-900 p-5 rounded-lg border border-slate-700 text-center">
          <div className="text-slate-400 text-sm mb-2">New Regime Tax</div>
          <div className="text-green-400 font-bold text-2xl">₹ {Math.round(taxNew).toLocaleString('en-IN')}</div>
          <div className="text-slate-500 text-xs mt-2">Includes standard deduction & cess</div>
        </div>
      </div>
    </div>
  );
}
