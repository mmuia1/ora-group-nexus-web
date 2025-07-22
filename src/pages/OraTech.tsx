import { Cpu, Code, Database, Shield, Wifi, Monitor, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OraTech = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"]
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Comprehensive networking and connectivity infrastructure",
      features: ["Network Design", "WiFi Solutions", "Security Systems", "Maintenance"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Robust database and cloud solutions for modern businesses",
      features: ["Database Design", "Cloud Migration", "Data Analytics", "Backup Solutions"]
    },
  ];

  const technologies = [
    { name: "React & Node.js", category: "Web Development" },
    { name: "Flutter & React Native", category: "Mobile Development" },
    { name: "Python & AI/ML", category: "Data Science" },
    { name: "AWS & Azure", category: "Cloud Platforms" },
    { name: "Cisco & Ubiquiti", category: "Network Hardware" },
    { name: "MySQL & PostgreSQL", category: "Databases" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      client: "Retail Chain",
      description: "Multi-vendor online marketplace with mobile app integration",
      tech: ["React", "Node.js", "MongoDB", "React Native"]
    },
    {
      title: "School Management System",
      client: "Education Sector",
      description: "Complete student information system with parent portal",
      tech: ["Vue.js", "Laravel", "MySQL", "Mobile App"]
    },
    {
      title: "Hospital Network Setup",
      client: "Healthcare",
      description: "Secure network infrastructure for multi-location hospital",
      tech: ["Cisco", "Security", "VPN", "Monitoring"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Cpu className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OraTech</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Innovative technology solutions provider offering software development, networking infrastructure, and comprehensive IT services to businesses across Kenya.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions to digitize and optimize your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-card rounded-2xl p-8 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
                  <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Successful technology implementations across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-card rounded-2xl p-6 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-primary font-medium">{project.client}</p>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your technology needs and create a customized solution that drives your business forward.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Reliable</h3>
                    <p className="text-muted-foreground">Enterprise-grade security and reliability standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock technical support and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Start Your Project</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Project Requirements"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <Button type="submit" className="w-full bg-gradient-primary shadow-button">
                  Get Started
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OraTech;