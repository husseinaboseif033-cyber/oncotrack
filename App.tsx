const modules = [
  { name: 'Patient Registry', phase: 4 },
  { name: 'Medical History & Safety Alerts', phase: 4 },
  { name: 'Medical Documents', phase: 5 },
  { name: 'Laboratory Management', phase: 5 },
  { name: 'Drug Catalog', phase: 6 },
  { name: 'Package Registry', phase: 6 },
  { name: 'Barcode Scanner', phase: 6 },
  { name: 'Treatment Protocols', phase: 7 },
  { name: 'Dose Allocation', phase: 8 },
  { name: 'Waste Management', phase: 9 },
  { name: 'Financial Reconciliation', phase: 9 },
  { name: 'Inventory Reconciliation', phase: 9 },
  { name: 'Reports', phase: 10 },
  { name: 'Audit Logs', phase: 10 },
  { name: 'OncoTrack AI Reviewer', phase: 11 },
]

export default function App() {
  return (
    <div className="app">
      <header className="top">
        <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
          <rect width="64" height="64" rx="14" fill="#13A89E" />
          <path d="M8 34h12l5-12 8 24 6-16 4 4h13" fill="none" stroke="#0B2545" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <strong>OncoTrack</strong>
          <span>Smart Oncology Management &amp; Intelligent Review System</span>
        </div>
      </header>

      <main>
        <h1>Track Every Dose. Verify Every Step.</h1>
        <p className="notice">
          Prototype build. Use dummy data only. Never enter real patient information.
        </p>

        <h2>Modules</h2>
        <ul className="modules">
          {modules.map((m) => (
            <li key={m.name}>
              <span>{m.name}</span>
              <small>Phase {m.phase}</small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
