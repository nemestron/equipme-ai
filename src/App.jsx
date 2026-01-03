import React, { useState } from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

// Common
import Button from './components/common/Button';

// Features
import GoalInput from './components/features/GoalInput';
import BudgetSlider from './components/features/BudgetSlider';
import BundleDisplay from './components/features/BundleDisplay';
import PriceSummary from './components/features/PriceSummary';

// Hooks & Constants
import { useGemini } from './hooks/useGemini';
import { useBudget } from './hooks/useBudget';

function App() {
  // --- STATE MANAGEMENT ---
  
  // 1. Goal State (Local)
  const [goal, setGoal] = useState('');

  // 2. Budget State (Persisted via Hook)
  const { 
    budget, 
    setBudget, 
    min, 
    max, 
    step 
  } = useBudget();

  // 3. AI Generation State (Gemini Hook)
  const { 
    bundle, 
    isLoading, 
    error, 
    generateBundle 
  } = useGemini();

  // --- HANDLERS ---

  const handleGenerate = async () => {
    // Basic Validation
    if (!goal.trim()) return;

    // Trigger AI Service
    // The hook handles loading states and error catching internally
    await generateBundle(goal, budget);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      {/* Main Content Wrapper */}
      {/* pt-20 accounts for fixed header (h-16 + spacing) */}
      <main className="flex-1 pt-20 pb-12">
        <Container>
          
          {/* HERO SECTION */}
          <div className="max-w-3xl mx-auto text-center space-y-8 py-8 md:py-12">
            
            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Your perfect setup, <br />
                <span className="text-brand-600">curated by AI.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Tell us what you want to do, set your budget, and let EquipMe 
                find the compatible gear you need to get started.
              </p>
            </div>

            {/* Input Section */}
            <div className="space-y-8 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-sm">
              <GoalInput 
                value={goal} 
                onChange={setGoal} 
                disabled={isLoading}
              />
              
              <BudgetSlider 
                value={budget} 
                onChange={setBudget}
                min={min}
                max={max}
                step={step}
              />

              {/* Error Alert Area */}
              {error && (
                <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 animate-fadeIn">
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  onClick={handleGenerate}
                  isLoading={isLoading}
                  disabled={!goal.trim() || isLoading}
                  className="w-full sm:w-auto min-w-[200px] shadow-brand-500/20 shadow-lg"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {isLoading ? 'Curating Bundle...' : 'Generate Bundle'}
                </Button>
              </div>
            </div>

          </div>

          {/* RESULTS SECTION */}
          {/* Renders loading skeletons, empty state, or the actual bundle grid */}
          <BundleDisplay 
            bundle={bundle} 
            isLoading={isLoading} 
          />

        </Container>
      </main>

      <Footer />

      {/* STICKY SUMMARY BAR */}
      {/* Conditionally rendered only when we have a valid bundle */}
      {bundle && !isLoading && (
        <PriceSummary 
          totalCost={bundle.totalCost || 0}
          budget={budget}
          itemCount={bundle.items?.length || 0}
          isLoading={isLoading}
          onGenerate={handleGenerate}
        />
      )}
    </div>
  );
}

export default App;
