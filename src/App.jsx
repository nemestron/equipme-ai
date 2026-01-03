import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

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

// Utils & Constants
import { APP_CONFIG } from './utils/constants';

function App() {
  // --- STATE MANAGEMENT  ---
  const [goal, setGoal] = useState('');
  const [budget, setBudget] = useState(APP_CONFIG.DEFAULT_BUDGET);
  const [bundle, setBundle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- HANDLERS ---
  
  // Temporary Mock Handler (Phase 3 will replace this with AI)
  const handleGenerate = async () => {
    // Basic Validation
    if (!goal.trim()) return;

    setIsLoading(true);
    setError(null);
    setBundle(null); // Reset previous results

    // Simulate Network Delay
    setTimeout(() => {
      setIsLoading(false);
      // For now, we remain in empty state to test the 'Loading' UI transition
      console.log('Mock generation triggered for:', { goal, budget });
    }, 2000);
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
                min={APP_CONFIG.MIN_BUDGET}
                max={APP_CONFIG.MAX_BUDGET}
                step={APP_CONFIG.BUDGET_STEP}
              />

              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  onClick={handleGenerate}
                  isLoading={isLoading}
                  disabled={!goal.trim()}
                  className="w-full sm:w-auto min-w-[200px] shadow-brand-500/20 shadow-lg"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Bundle
                </Button>
              </div>
            </div>

          </div>

          {/* RESULTS SECTION */}
          {/* Renders loading skeletons or the actual bundle grid */}
          <BundleDisplay 
            bundle={bundle} 
            isLoading={isLoading} 
          />

        </Container>
      </main>

      <Footer />

      {/* STICKY SUMMARY BAR */}
      {/* Conditionally rendered only when we have a bundle */}
      {bundle && (
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
