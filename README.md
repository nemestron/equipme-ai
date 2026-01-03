# EquipMe AI

**Your Perfect Setup, Curated by AI.**

> **🔴 LIVE DEMO:** [https://equipme-ai.vercel.app/](https://equipme-ai.vercel.app/)

EquipMe AI is an intelligent product bundle generator that eliminates the fatigue of researching gear. Whether you want to start vlogging, build a home gym, or go camping, EquipMe uses Google Gemini 2.5 Flash model to curate compatible, budget-aware shopping lists instantly.

![Project Status](https://img.shields.io/badge/status-live-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Features

* **AI-Powered Curation:** Generates context-aware product bundles using Gemini 2.5 Flash.
* **Smart Budgeting:** Strict adherence to user-defined budget constraints.
* **Compatibility Checks:** Ensures recommended items work together (e.g., cameras and lenses).
* **Real-Time Feedback:** Instant validation for inputs and edge cases.
* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.
* **Dark Mode:** Built-in theme switching with persistence.

## 🛠️ Tech Stack

* **Frontend:** React 18, Vite
* **Styling:** Tailwind CSS, Lucide React
* **AI Core:** Google Generative AI SDK (Gemini 2.5 Flash)
* **State Management:** Custom React Hooks
* **Deployment:** Vercel

## ⚡ Getting Started

### Prerequisites
* Node.js 18+
* Google Gemini API Key

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/nemestron/equipme-ai.git](https://github.com/nemestron/equipme-ai.git)
    cd equipme-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env.local` file:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 🧠 Engineering Concepts

This project demonstrates several advanced Product Engineering concepts:

* **Zero-Cost Architecture:** Leverages free-tier infrastructure (Vercel, Gemini Flash) for a sustainable MVP.
* **Latency Management:** Uses optimistic UI updates and skeleton loaders to minimize perceived wait times.
* **System Prompting:** Utilizes strict JSON schema enforcement to prevent AI hallucinations.
* **Component Composition:** Built on a modular "Atomic Design" inspired component library.

## 👤 Author

**Dhiraj Malwade**
* [LinkedIn](https://www.linkedin.com/in/dhiraj-malwade-6a8385399/)
* [GitHub](https://github.com/nemestron/equipme-ai)

## 📄 License

This project is licensed under the MIT License.
