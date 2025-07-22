import { Briefcase, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Civil Engineer",
      department: "OraBuild",
      location: "Nairobi",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead construction projects and manage engineering teams for our growing construction division."
    },
    {
      title: "Software Developer",
      department: "OraTech",
      location: "Nairobi",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop innovative software solutions using modern technologies like React, Node.js, and Python."
    },
    {
      title: "Supply Chain Manager",
      department: "OraSupply",
      location: "Nairobi",
      type: "Full-time",
      experience: "5+ years",
      description: "Manage procurement processes and supplier relationships for institutional and government clients."
    },
    {
      title: "Import Operations Specialist",
      department: "OraImports",
      location: "Nairobi",
      type: "Full-time",
      experience: "2-3 years",
      description: "Handle import documentation, customs clearance, and supplier coordination for appliance imports."
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical cover for you and your family"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear advancement paths"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with supportive colleagues"
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous leave policies"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join OraGroup</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
            Build your career with Kenya's leading diversified holding company. Explore opportunities across construction, technology, imports, and supplies.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button">
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a dynamic team where your talents are valued and your career aspirations are supported.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across our subsidiary companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {position.department}
                  </span>
                  <span className="text-sm text-muted-foreground">{position.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{position.title}</h3>
                <p className="text-muted-foreground mb-4">{position.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>📍 {position.location}</span>
                  <span>💼 {position.experience}</span>
                </div>
                
                <Button className="w-full bg-gradient-primary shadow-button">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Hiring Process
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A straightforward, transparent process designed to find the best fit for both you and our team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Application</h3>
              <p className="text-muted-foreground">Submit your application with resume and cover letter</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Screening</h3>
              <p className="text-muted-foreground">Initial review and phone/video screening call</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Interview</h3>
              <p className="text-muted-foreground">In-person or virtual interview with the hiring team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Offer</h3>
              <p className="text-muted-foreground">Reference checks and final offer discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* General Application Form */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-card-soft">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Don't See a Perfect Match? Apply Anyway!
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              We're always looking for talented individuals. Send us your information and we'll reach out when opportunities arise.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Interested Department</option>
                <option value="orabuild">OraBuild</option>
                <option value="oraimports">OraImports</option>
                <option value="oratech">OraTech</option>
                <option value="orasupply">OraSupply</option>
                <option value="corporate">Corporate</option>
              </select>
              <input
                type="text"
                placeholder="Years of Experience"
                className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Brief introduction and why you'd like to join OraGroup"
                rows={4}
                className="md:col-span-2 px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <Button type="submit" className="md:col-span-2 bg-gradient-primary shadow-button">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;