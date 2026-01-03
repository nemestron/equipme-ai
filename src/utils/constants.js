/**
 * App-wide Constants
 * Centralized configuration for business logic and UI limits.
 */

export const APP_CONFIG = {
  MIN_BUDGET: 100,
  MAX_BUDGET: 10000,
  DEFAULT_BUDGET: 1000,
  BUDGET_STEP: 50,
  
  // Input constraints
  MIN_GOAL_LENGTH: 3,
  MAX_GOAL_LENGTH: 100,
  
  // API Settings
  API_TIMEOUT_MS: 30000,
  MAX_RETRIES: 3,
};

export const POPULAR_GOALS = [
  "Start Vlogging",
  "Home Office",
  "Gaming Setup",
  "Podcast Studio",
  "Fitness Gym",
  "Camping Trip",
  "Coffee Station"
];
