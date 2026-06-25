import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const resources = [

    {
    title: "1500+ Third-Party Database Breaches Now Live",
    description: "We've massively expanded our threat intelligence arsenal with over 1,500 third-party database breaches, now fully searchable via our Corporate Leaks dashboard and dedicated API.",
   
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/169e34fd-e1e7-4a99-0536-3ff7043aa100/w=600,q=80,format=auto",
    link: "/blog/third-party-database-breaches",
  },
    
    {
    title: "Your Employees Are Your Perimeter Now",
    description:
      "he network perimeter you spent years hardening is irrelevant when your CFO's credentials are harvested from their gaming laptop at home.",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/4746daeb-f677-48cd-1499-cbb68fddce00/w=600,q=80,format=auto",
    link: "/blog/employee-is-the-new-security-perimeter",
  },
  {
    title: "The Infostealer Lifecycle: From 0 to 48 Hours",
    description:
      "48 hours. That's how long it takes for your employee's credentials to go from an infected laptop to an underground marketplace.",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/a4afb533-4350-45a6-b4fd-c5bcad498200/w=600,q=80,format=auto",
    link: "/blog/infostealer-lifecycle-48-hours",
  },


];

const FeaturedResourcesSection = () => {
  return (
    <section className="relative bg-[#020617] py-24 px-6 md:px-12 text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Header */}
        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
          Featured Resources
        </span>
        
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Latest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Threat Intelligence</span>
        </h3>
        
        <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore insights, research, and actionable strategies from Whiteintel’s threat intelligence experts.
        </p>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 text-left">
          {resources.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              className="group flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={400}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 mb-6 flex-1 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center text-blue-400 text-sm font-bold uppercase tracking-wider gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedResourcesSection;