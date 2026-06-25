const fs = require('fs');

// Read and parse glossary terms
const src = fs.readFileSync('src/data/glossaryTerms.js', 'utf8');
const match = src.match(/export const GLOSSARY_TERMS = (\[[\s\S]*?\n\]);/);
const terms = eval(match[1]);

const termMap = {};
terms.forEach(t => termMap[t.slug] = t);

const targetSlugs = [
  'ransomware','reconnaissance','security-operations-center',
  'session-hijacking','siem','social-engineering','spear-phishing',
  'stealer-log','supply-chain-attack','threat-actor','threat-hunting',
  'threat-intelligence','third-party-risk','vulnerability','zero-day'
];

const CATEGORY_COLORS = {
  'Attack Types': 'text-red-400 bg-red-500/10 border-red-500/20',
  'Malware & Infrastructure': 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  'Threat Intelligence': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Threat Actors': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  'Data & Leaks': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  'Defensive Security': 'text-green-400 bg-green-500/10 border-green-500/20',
  'Security Concepts': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'Vulnerabilities': 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  'Cybercrime': 'text-pink-400 bg-pink-500/10 border-pink-500/20',
};

const CATEGORY_GLOW = {
  'Attack Types': 'bg-red-900/10',
  'Malware & Infrastructure': 'bg-orange-900/10',
  'Threat Intelligence': 'bg-blue-900/10',
  'Threat Actors': 'bg-purple-900/10',
  'Data & Leaks': 'bg-yellow-900/10',
  'Defensive Security': 'bg-green-900/10',
  'Security Concepts': 'bg-cyan-900/10',
  'Vulnerabilities': 'bg-rose-900/10',
  'Cybercrime': 'bg-pink-900/10',
};

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

const NAVBAR = `<header class="fixed top-0 left-0 right-0 z-50 border-b bg-[#020617]/95 backdrop-blur-xl border-white/5 shadow-lg" id="nav-root"><div class="max-w-7xl mx-auto px-4 sm:px-6"><div class="flex items-center justify-between h-[72px] lg:h-[80px]"><a href="https://whiteintel.io" class="flex items-center gap-2 shrink-0 z-50 relative"><img src="whiteintel-logo.png" alt="Whiteintel" class="h-9 w-auto lg:h-10" width="160" height="40"><span class="text-xl lg:text-2xl font-extrabold tracking-tight text-white">Whiteintel</span></a><nav class="hidden lg:flex items-center gap-1 h-full"><div class="relative group flex items-center h-full"><button class="flex items-center gap-1.5 px-4 py-2 text-lg font-medium text-slate-300 hover:text-white transition-colors">Platform<svg class="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="absolute top-full left-1/2 -translate-x-1/3 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 origin-top"><div class="rounded-2xl border p-6 lg:p-8 overflow-hidden bg-[#020617]/95 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/80 w-[1000px]"><div class="grid gap-8 grid-cols-3"><div><h4 class="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-xs font-bold uppercase tracking-widest mb-4">Platform</h4><div class="space-y-3"><a href="https://whiteintel.io/platform-overview" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors"><div class="mt-0.5 text-slate-300 group-hover/item:text-blue-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg></div><div><div class="text-sm font-semibold text-white group-hover/item:text-blue-500 transition-colors">Platform Overview</div><div class="text-[13px] leading-snug mt-0.5 text-slate-400">Explore the full platform capabilities</div></div></a><a href="https://whiteintel.io/platform-tour" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors"><div class="mt-0.5 text-slate-300 group-hover/item:text-blue-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg></div><div><div class="text-sm font-semibold text-white group-hover/item:text-blue-500 transition-colors">Platform Tour</div><div class="text-[13px] leading-snug mt-0.5 text-slate-400">Take a guided tour</div></div></a></div></div><div class="col-span-2"><h4 class="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-xs font-bold uppercase tracking-widest mb-4">Use Cases</h4><div class="grid grid-cols-2 gap-x-8 gap-y-3"><a href="https://whiteintel.io/ato-prevention" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">ATO Prevention</div></a><a href="https://whiteintel.io/active-directory-protection" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">AD Protection</div></a><a href="https://whiteintel.io/enterprise-protection" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Enterprise Protection</div></a><a href="https://whiteintel.io/ransomware-prevention" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Ransomware Prevention</div></a><a href="https://whiteintel.io/consumer-protection" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Consumer Protection</div></a><a href="https://whiteintel.io/mssp-enrichments" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">MSSP Enrichments</div></a><a href="https://whiteintel.io/darkweb-mention-monitoring" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Dark Web Monitoring</div></a><a href="https://whiteintel.io/look-alike-domain-monitoring" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Lookalike Domain Monitoring</div></a><a href="https://whiteintel.io/vulnerability-research" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Vulnerability Research</div></a></div></div></div></div></div></div><div class="relative group flex items-center h-full"><button class="flex items-center gap-1.5 px-4 py-2 text-lg font-medium text-slate-300 hover:text-white transition-colors">Resources<svg class="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 origin-top"><div class="rounded-2xl border p-6 lg:p-8 overflow-hidden bg-[#020617]/95 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/80 w-[550px]"><div class="grid gap-8 grid-cols-2"><div><h4 class="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-xs font-bold uppercase tracking-widest mb-4">Knowledge Base</h4><div class="space-y-3"><a href="https://knowledge.whiteintel.io" target="_blank" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Knowledge Center</div><div class="text-[13px] mt-0.5 text-slate-400">Guides and documentation</div></div></a><a href="https://knowledge.whiteintel.io/frequently-asked-questions/faq" target="_blank" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">FAQ</div><div class="text-[13px] mt-0.5 text-slate-400">Frequently asked questions</div></div></a></div></div><div><h4 class="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-xs font-bold uppercase tracking-widest mb-4">Developer & Insights</h4><div class="space-y-3"><a href="https://docs.whiteintel.io" target="_blank" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">API Docs</div><div class="text-[13px] mt-0.5 text-slate-400">REST API documentation</div></div></a><a href="blog.html" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Blog</div><div class="text-[13px] mt-0.5 text-slate-400">Threat research & updates</div></div></a><a href="https://whiteintel.io/glossary" class="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5"><div><div class="text-sm font-semibold text-white group-hover/item:text-blue-500">Glossary</div><div class="text-[13px] mt-0.5 text-slate-400">Cybersecurity terms</div></div></a></div></div></div></div></div></div><a href="https://whiteintel.io/pricing" class="px-4 py-2 text-lg font-medium text-slate-300 hover:text-white transition-colors">Pricing</a><a href="https://whiteintel.io/contact" class="px-4 py-2 text-lg font-medium text-slate-300 hover:text-white transition-colors">Contact</a></nav><div class="hidden lg:flex items-center gap-3"><a href="https://platform.whiteintel.io/" target="_blank" class="flex items-center gap-2 px-3 py-2 rounded-lg text-md font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors">Login</a><a href="https://platform.whiteintel.io/signup" target="_blank" class="px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 border border-white/10 transition-all">Get Started Free</a><a href="https://calendly.com/whiteintel-sales" target="_blank" class="px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-[#ff5120] to-[#d9380b] hover:from-[#ff6b42] hover:to-[#e63b0a] text-white shadow-[0_0_20px_-5px_rgba(255,81,32,0.5)] transition-all">Schedule a Call</a></div><button onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')" class="lg:hidden p-2 rounded-lg z-50 relative text-white hover:bg-white/10 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg></button></div></div></header>
<div id="mobile-menu" class="fixed inset-0 z-40 lg:hidden translate-x-full transition-transform duration-300 ease-in-out pt-[80px] px-6 overflow-y-auto bg-[#020617]"><div class="flex flex-col gap-6 pb-20"><div class="flex flex-col gap-4 text-lg font-medium text-white"><a href="https://whiteintel.io/platform-overview">Platform Overview</a><a href="https://whiteintel.io/ato-prevention">ATO Prevention</a><a href="https://whiteintel.io/enterprise-protection">Enterprise Protection</a><a href="https://whiteintel.io/ransomware-prevention">Ransomware Prevention</a><div class="border-t border-white/10 my-2"></div><a href="https://knowledge.whiteintel.io" target="_blank">Knowledge Center</a><a href="https://docs.whiteintel.io" target="_blank">API Docs</a><a href="blog.html">Blog</a><div class="border-t border-white/10 my-2"></div><a href="https://whiteintel.io/pricing">Pricing</a><a href="https://whiteintel.io/contact">Contact</a></div><div class="mt-4 flex flex-col gap-3"><a href="https://platform.whiteintel.io/signup" target="_blank" class="w-full py-3 rounded-full text-sm font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-white/10">Get Free Account</a><a href="https://platform.whiteintel.io/" target="_blank" class="w-full py-3 rounded-lg border border-white text-white hover:bg-white/5 font-semibold text-center">Log In</a></div></div></div>`;

const FOOTER = `<div class="flex flex-col bg-[#020617] overflow-x-hidden">
  <section class="pt-10 pb-32 px-6 md:px-10 relative z-10"><div class="max-w-5xl mx-auto"><div class="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0b1121] text-white"><div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-50"></div><div class="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-8"><div class="text-center md:text-left max-w-xl"><h3 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to Protect Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Assets?</span></h3><p class="text-slate-300 text-lg leading-relaxed">Start monitoring your organization's exposure to credential leaks and dark web threats today.</p></div><div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto"><a href="https://platform.whiteintel.io/signup" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 border border-white/10">Get Started Free <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></div></div></div></section>
  <footer class="relative bg-[#020617] text-slate-400 -mt-32 pt-48 pb-12 px-6 md:px-10 overflow-hidden z-0">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-20"></div>
    <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[120px] bg-indigo-600/10 blur-[60px] rounded-full pointer-events-none z-10"></div>
    <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-[200px] md:w-[300px] h-[60px] bg-blue-500/10 blur-[40px] rounded-full pointer-events-none z-10"></div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        <div><div class="flex items-center gap-2 mb-4"><img src="whiteintel-logo.png" alt="Whiteintel Logo" class="h-8 w-auto" width="120" height="32"><h4 class="text-lg font-bold text-white">Whiteintel</h4></div><p class="text-medium text-slate-500 mb-4 leading-relaxed uppercase tracking-wide font-medium">MUSTAFA KEMAL MAH. DUMLUPINAR BLV. NO: 266 A &#304;&#199; KAPI NO: 18 &#199;ANKAYA / ANKARA / T&#252;rkiye</p><p class="text-lg text-slate-500 mb-4">Inquiries: info@whiteintel.io</p><a href="https://whiteintel.io/contact" class="text-blue-500 underline-offset-4 hover:underline text-lg">Contact Us</a></div>
        <div><h5 class="font-semibold text-xl text-white mb-3">Platform</h5><ul class="space-y-2 text-lg text-slate-500"><li><a href="https://whiteintel.io/platform-overview" class="hover:text-blue-400 transition-colors">Platform Overview</a></li><li><a href="https://whiteintel.io/platform-tour" class="hover:text-blue-400 transition-colors">Platform Tour</a></li><li><a href="https://whiteintel.io/pricing" class="hover:text-blue-400 transition-colors">Pricing</a></li></ul></div>
        <div><h5 class="font-semibold text-white mb-3 text-xl">Use Cases</h5><ul class="space-y-2 text-lg text-slate-500"><li><a href="https://whiteintel.io/ato-prevention" class="hover:text-blue-400 transition-colors">ATO Prevention</a></li><li><a href="https://whiteintel.io/enterprise-protection" class="hover:text-blue-400 transition-colors">Enterprise Protection</a></li><li><a href="https://whiteintel.io/consumer-protection" class="hover:text-blue-400 transition-colors">Consumer Protection</a></li><li><a href="https://whiteintel.io/darkweb-mention-monitoring" class="hover:text-blue-400 transition-colors">Dark Web Monitoring</a></li><li><a href="https://whiteintel.io/ransomware-prevention" class="hover:text-blue-400 transition-colors">Ransomware Prevention</a></li><li><a href="https://whiteintel.io/active-directory-protection" class="hover:text-blue-400 transition-colors">AD Protection</a></li><li><a href="https://whiteintel.io/mssp-enrichments" class="hover:text-blue-400 transition-colors">MSSP Enrichments</a></li><li><a href="https://whiteintel.io/vulnerability-research" class="hover:text-blue-400 transition-colors">Bug Hunters</a></li><li><a href="https://whiteintel.io/look-alike-domain-monitoring" class="hover:text-blue-400 transition-colors">Lookalike Monitoring</a></li></ul></div>
        <div><h5 class="font-semibold text-white mb-3 text-xl">Resources</h5><ul class="space-y-2 text-lg text-slate-500"><li><a href="https://knowledge.whiteintel.io" target="_blank" rel="noreferrer" class="hover:text-blue-400 transition-colors">Knowledge Center</a></li><li><a href="https://docs.whiteintel.io" target="_blank" rel="noreferrer" class="hover:text-blue-400 transition-colors">API Docs</a></li><li><a href="https://knowledge.whiteintel.io/frequently-asked-questions/faq" target="_blank" rel="noreferrer" class="hover:text-blue-400 transition-colors">FAQ</a></li><li><a href="blog.html" class="hover:text-blue-400 transition-colors">Blog</a></li><li><a href="https://whiteintel.io/glossary" class="hover:text-blue-400 transition-colors">Glossary</a></li></ul></div>
      </div>
      <div class="mt-10 border-t border-white/5 pt-6 text-lg text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3"><span>&copy; 2026 Whiteintel. All rights reserved.</span><div class="space-x-4"><a href="https://whiteintel.io/privacy" class="hover:text-white transition-colors">Privacy Policy</a><a href="https://whiteintel.io/terms" class="hover:text-white transition-colors">Terms of Service</a></div></div>
    </div>
  </footer>
</div>`;

function generateHTML(term) {
  const colorClass = CATEGORY_COLORS[term.category] || 'text-blue-400 bg-blue-500/10 border-blue-500/20';
  const glowClass = CATEGORY_GLOW[term.category] || 'bg-blue-900/10';
  const paragraphs = term.definition.split('\n\n').filter(Boolean);
  const defFlat = term.definition.replace(/\n\n/g, ' ');
  const defSecondPara = paragraphs[1] || term.shortDef;

  const relatedTermObjects = (term.relatedTerms || [])
    .map(s => termMap[s])
    .filter(Boolean);

  let relatedHTML = '';
  if (relatedTermObjects.length > 0) {
    const cards = relatedTermObjects.map(related => {
      const relColor = CATEGORY_COLORS[related.category] || 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      return `                <a href="${related.slug}.html" class="group flex items-start gap-3 bg-slate-900/40 border border-white/5 rounded-xl p-4 hover:bg-slate-900/80 hover:border-blue-500/30 transition-all">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-1">${escapeHtml(related.term)}</p>
                        <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">${escapeHtml(related.shortDef)}</p>
                        <span class="inline-block mt-2 text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${relColor}">${escapeHtml(related.category)}</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-600 group-hover:text-blue-400 flex-shrink-0 mt-1 transition-colors"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>`;
    }).join('\n');

    relatedHTML = `
          <section class="mb-12">
            <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span class="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 block"></span>
              Related Terms
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
${cards}
            </div>
          </section>`;
  }

  const parasHTML = paragraphs.map(p => `              <p class="text-slate-300 leading-8 text-base">${escapeHtml(p)}</p>`).join('\n');

  const definedTermSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': term.term,
    'description': defFlat,
    'url': `https://whiteintel.io/glossary/${term.slug}`,
    'inDefinedTermSet': {
      '@type': 'DefinedTermSet',
      'name': 'Whiteintel Cybersecurity Glossary',
      'url': 'https://whiteintel.io/glossary',
      'publisher': { '@type': 'Organization', 'name': 'Whiteintel', 'url': 'https://whiteintel.io' }
    }
  });

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': `What is ${term.term}?`, 'acceptedAnswer': { '@type': 'Answer', 'text': defFlat } },
      { '@type': 'Question', 'name': `How does ${term.term} work?`, 'acceptedAnswer': { '@type': 'Answer', 'text': defSecondPara } }
    ]
  });

  const articleSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': `${term.term}: Definition, Explanation & Context`,
    'description': term.shortDef,
    'url': `https://whiteintel.io/glossary/${term.slug}`,
    'author': { '@type': 'Organization', 'name': 'Whiteintel Research Team', 'url': 'https://whiteintel.io' },
    'publisher': { '@type': 'Organization', 'name': 'Whiteintel', 'url': 'https://whiteintel.io', 'logo': { '@type': 'ImageObject', 'url': 'https://whiteintel.io/favicon.ico' } },
    'about': { '@type': 'DefinedTerm', 'name': term.term },
    'articleSection': term.category,
    'keywords': `${term.term}, cybersecurity, threat intelligence, dark web monitoring`
  });

  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://whiteintel.io' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Glossary', 'item': 'https://whiteintel.io/glossary' },
      { '@type': 'ListItem', 'position': 3, 'name': term.term, 'item': `https://whiteintel.io/glossary/${term.slug}` }
    ]
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(term.term)} — Definition &amp; Explanation | Whiteintel Glossary</title>
  <meta name="description" content="${escapeHtml(term.shortDef)} Learn the full definition and context of ${escapeHtml(term.term)} in our cybersecurity and threat intelligence glossary.">
  <meta name="keywords" content="${escapeHtml(term.term.toLowerCase())}, ${escapeHtml(term.term.toLowerCase())} definition, cybersecurity glossary, threat intelligence, whiteintel">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Whiteintel Research Team">
  <meta property="og:title" content="${escapeHtml(term.term)} | Whiteintel Cybersecurity Glossary">
  <meta property="og:description" content="${escapeHtml(term.shortDef)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://whiteintel.io/glossary/${term.slug}">
  <meta property="og:site_name" content="Whiteintel">
  <meta property="article:author" content="Whiteintel Research Team">
  <meta property="article:section" content="${escapeHtml(term.category)}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@whiteintel">
  <meta name="twitter:title" content="${escapeHtml(term.term)} | Whiteintel Glossary">
  <meta name="twitter:description" content="${escapeHtml(term.shortDef)}">
  <link rel="canonical" href="https://whiteintel.io/glossary/${term.slug}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Urbanist', 'system-ui', 'sans-serif'],
          },
        },
      },
    }
  </script>
  <style>
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  </style>
  <script type="application/ld+json">${definedTermSchema}</script>
  <script type="application/ld+json">${faqSchema}</script>
  <script type="application/ld+json">${articleSchema}</script>
</head>
<body class="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">

<!-- NAVBAR -->
${NAVBAR}

<!-- PROGRESS BAR -->
<div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 z-[60]"></div>

<article class="relative pt-32 pb-24 px-4 sm:px-6">

  <!-- Background -->
  <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${glowClass} blur-[120px] rounded-full opacity-50"></div>
  </div>

  <div class="relative z-10 max-w-3xl mx-auto">

    <!-- BACK -->
    <a href="glossary.html" class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium group">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-x-1 transition-transform"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      Back to Glossary
    </a>

    <!-- HEADER -->
    <header class="mb-12">
      <div class="flex flex-wrap items-center gap-3 mb-6">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest ${colorClass}">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
          ${escapeHtml(term.category)}
        </span>
        <span class="text-slate-500 text-xs flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          Cybersecurity Glossary
        </span>
      </div>

      <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">${escapeHtml(term.term)}</h1>

      <p class="text-xl text-slate-300 leading-relaxed border-l-2 border-blue-500/50 pl-5">${escapeHtml(term.shortDef)}</p>
    </header>

    <!-- DEFINITION -->
    <section class="mb-12">
      <h2 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <span class="w-1 h-5 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 block"></span>
        Full Definition
      </h2>
      <div class="space-y-5">
${parasHTML}
      </div>
    </section>

    <!-- RELATED TERMS -->${relatedHTML}

    <!-- CTA -->
    <div class="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden group">
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/15 transition-all duration-700"></div>
      <div class="relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
          Threat Intelligence Platform
        </div>
        <h3 class="text-2xl font-bold text-white mb-3">Monitor Your Exposure on Whiteintel</h3>
        <p class="text-slate-400 mb-6 max-w-lg text-sm leading-relaxed">Understanding threats is the first step. Whiteintel continuously monitors dark web sources, stealer logs, and breach databases so you know the moment your organization's data is at risk.</p>
        <div class="flex flex-wrap gap-3">
          <a href="https://platform.whiteintel.io" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-5 rounded-lg transition-colors text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Search on Whiteintel
          </a>
          <a href="glossary.html" class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            Back to Glossary
          </a>
        </div>
      </div>
    </div>

  </div>
</article>

<!-- BREADCRUMB SCHEMA -->
<script type="application/ld+json">${breadcrumbSchema}</script>

<!-- FOOTER -->
${FOOTER}

</body>
</html>`;
}

// Generate all files
targetSlugs.forEach(slug => {
  const term = termMap[slug];
  if (!term) {
    console.error('Term not found:', slug);
    return;
  }
  const html = generateHTML(term);
  const path = `htmlfiles/${slug}.html`;
  fs.writeFileSync(path, html, 'utf8');
  console.log('Created:', path, '(' + html.length + ' bytes)');
});

console.log('Done! All 15 remaining files created.');
