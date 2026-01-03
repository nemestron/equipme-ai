import { Video, Monitor, Camera, Mic, Gamepad2, Dumbbell, Coffee, Tent } from 'lucide-react';

/**
 * Sample Goals Data
 * Used to populate the 'Popular Ideas' section or empty states.
 * Provides a 'one-click' setup experience.
 */
export const SAMPLE_GOALS = [
  {
    id: 'vlog',
    title: 'Start Vlogging',
    icon: Video,
    suggestedBudget: 1500,
    description: 'Everything you need to record, edit, and publish high-quality video content.'
  },
  {
    id: 'office',
    title: 'Home Office Setup',
    icon: Monitor,
    suggestedBudget: 2000,
    description: 'Ergonomic and productive workspace for remote work mastery.'
  },
  {
    id: 'photo',
    title: 'Learn Photography',
    icon: Camera,
    suggestedBudget: 1200,
    description: 'Essential gear to master composition, lighting, and exposure.'
  },
  {
    id: 'podcast',
    title: 'Podcast Studio',
    icon: Mic,
    suggestedBudget: 800,
    description: 'Professional audio recording environment for crystal clear vocals.'
  },
  {
    id: 'gaming',
    title: 'Gaming Setup',
    icon: Gamepad2,
    suggestedBudget: 2500,
    description: 'High-performance battlestation for competitive and immersive gaming.'
  },
  {
    id: 'fitness',
    title: 'Home Gym',
    icon: Dumbbell,
    suggestedBudget: 600,
    description: 'Compact strength and cardio equipment for total body fitness.'
  },
  {
    id: 'coffee',
    title: 'Coffee Station',
    icon: Coffee,
    suggestedBudget: 400,
    description: 'Brew café-quality espresso and pour-over right at home.'
  },
  {
    id: 'camping',
    title: 'Outdoor Camping',
    icon: Tent,
    suggestedBudget: 1000,
    description: 'Reliable gear for a comfortable weekend in the wilderness.'
  }
];
