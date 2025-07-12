// src/App.tsx
import React from 'react';
import { HeaderBar } from './components/HeaderBar';
import { SheetToolbar } from './components/SheetToolbar';
import { SpreadsheetTable } from './components/SpreadSheetTable';

function App() {
  return (
    <div className="h-screen flex flex-col font-sans">
      <HeaderBar />
      <SheetToolbar />
      <div className="flex-grow overflow-auto p-4 bg-white">
        <SpreadsheetTable />
      </div>
    </div>
  );
}

export default App;
