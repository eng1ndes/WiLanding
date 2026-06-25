export default function Packaging() {
  const tiers = [
    { name: "Enrichment API", points: ["Per-tenant scoping", "JSON/CSV export", "Query by domain/email/IP/computer"], cta: "Talk to Sales" },
    { name: "Alerts Add-On", points: ["Webhook + Email alerts", "Rate-limited for scale", "Map to runbooks & SLAs"], cta: "Enable Alerts" },
    { name: "Managed Intelligence", points: ["Analyst curation", "Evidence bundles", "White-label ready"], cta: "Request Details" },
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Flexible Ways to Integrate</h3>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">Pick the delivery that matches your platform and process.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="text-lg font-semibold mb-2">{t.name}</div>
              <ul className="text-gray-700 text-sm space-y-1.5">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
