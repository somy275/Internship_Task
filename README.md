A static, pixel-perfect prototype of the spreadsheet view from Figma.
This prototype mimics a Google Sheets-like interface using modern React tooling.
____________________________________________________________________________________________________________________________________

🚀 Live Demo
👉 Live Site URL

__________________________________________________________________________________________________________________________________

🧰 Tech Stack 

- React 18 (via Vite)

- TypeScript (strict mode)

- Tailwind CSS (for utility-first styling)

- @tanstack/react-table v8 (headless table engine)

________________________________________________________________________________________________________________

✅ Features
🔍 Pixel-close layout matching the Figma design

🔢 Spreadsheet-like experience using @tanstack/react-table 

🔘 Interactive buttons and tabs (all functional—log actions or toggle state)

🧼 Lint & type check compliant (npm run lint & npm run type-check)

🧾 Clean commit history with meaningful messages

_________________________________________________________________________________________________________________

 Stretch Features (Optional)
 
📏 Column resize

_______________________________________________________________________________________________________________

🧠 Trade-offs
- TanStack Table gives total control, but that means more initial setup than react-table v7.

- Requires manual wiring of behaviors like selection, keyboard navigation, and column resize—however, this provides full flexibility to implement spreadsheet UX exactly as designed.

_______________________________________________________________________________________________________________

🛠️ Setup

- https://github.com/somy275/Internship_Task.git

- cd react-sheet

 # Install dependencies
npm install

# Run locally
npm run dev

# Linting & Type Checks
npm run lint
npm run type-check
