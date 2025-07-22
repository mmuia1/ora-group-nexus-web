import { Award, Users, Building2, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const stats = [
    { icon: Building2, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "50+", label: "Expert Team Members" },
    { icon: Award, number: "15+", label: "Years of Excellence" },
    { icon: TrendingUp, number: "4", label: "Business Sectors" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering superior quality and exceptional results across all our business ventures.",
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and creative solutions to drive progress and growth in Kenya's diverse business landscape.",
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />

      {/* Company Overview */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About OraGroup
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              OraGroup is a leading diversified holding company in Kenya, with a strong presence across construction, technology solutions, appliance importation, and general supplies. Our commitment to excellence and innovation drives sustainable growth across all our business ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and define our character across all our subsidiaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-card rounded-2xl p-8 shadow-card-soft hover:shadow-corporate transition-all duration-300 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Kenya's Leading Holding Company?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need construction services, technology solutions, quality appliances, or general supplies, our subsidiaries are ready to deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-button text-lg px-8 py-3"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
