/**
 * promptBuilder.js
 * Responsible for constructing the strict system instructions and user context
 * to ensure Gemini returns valid, UI-ready JSON.
 */

const RESPONSE_SCHEMA = {
  bundleName: "Creative Title (e.g., 'Emergency Response Kit' or 'Pro Vlogging Setup')",
  bundleDescription: "Brief 1-sentence overview of why this bundle works.",
  items: [
    {
      id: 1,
      name: "Specific Product Name",
      brand: "Brand Name",
      category: "Category Name (e.g., Medical, Tech, Tools, Gear)",
      price: 0,
      description: "Brief product description.",
      whyIncluded: "Why is this essential for the specific goal?",
      compatibility: "compatible" // Enum: 'compatible' | 'conditional' | 'standalone'
    }
  ],
  totalCost: 0,
  budgetRemaining: 0
};

/**
 * Constructs the final prompt string for the AI model.
 * @param {string} goal - User's stated objective
 * @param {number} budget - User's maximum budget
 * @returns {string} - The full prompt
 */
export const buildBundlePrompt = (goal, budget) => {
  return `
    ROLE:
    You are EquipMe, an expert product curator capable of assembling perfect shopping bundles for ANY domain (Tech, Health, Outdoors, Home, Hobbies, etc.).
    Your task is to generate a comprehensive shopping bundle based on the user's specific goal and budget.

    CRITICAL INSTRUCTION:
    - ANALYZE the goal domain first.
    - If the goal is "First Aid Kit", recommend bandages, antiseptics, tourniquets, etc. DO NOT recommend electronics.
    - If the goal is "Camping", recommend tents, sleeping bags, stoves.
    - If the goal is "Vlogging", recommend cameras, mics, lights.
    - DO NOT force technology products unless the goal explicitly requires them.

    CONSTRAINTS:
    1. Output MUST be valid JSON only. Do not wrap in markdown blocks. No introductory text.
    2. Total Cost must be LESS THAN or EQUAL TO the budget ($${budget}).
    3. Select 4 to 8 items that work together.
    4. Prices should be realistic market estimates in USD.

    OUTPUT FORMAT:
    Return a single JSON object matching this exact schema:
    ${JSON.stringify(RESPONSE_SCHEMA, null, 2)}

    USER REQUEST:
    Goal: "${goal}"
    Budget: $${budget}

    CURATION INSTRUCTIONS:
    - Prioritize widely available, reputable brands for the specific domain.
    - Ensure logical compatibility (e.g., batteries fit the device, refills fit the container).
    - If the budget is tight, prioritize essential items over accessories.
    - Set 'compatibility' to 'compatible' if items work natively together, 'conditional' if adapters are needed, or 'standalone' for isolated items.
  `;
};
