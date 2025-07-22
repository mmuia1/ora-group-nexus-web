import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering superior quality and exceptional results.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices at all times.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to drive progress and growth.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "4", label: "Business Sectors" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About OraGroup</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Building Kenya's future through diversified excellence and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to diversify and excel across multiple industries, OraGroup has grown from a single venture into a robust holding company with four dynamic subsidiaries serving Kenya's most vital sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began with a simple belief: that excellence in one field can be replicated across others when supported by the right expertise, values, and commitment to quality.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we stand as a testament to Kenyan entrepreneurship, creating jobs, driving innovation, and contributing to the nation's economic growth across construction, technology, imports, and general supplies.
              </p>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card-soft">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
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
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To deliver exceptional value across diverse industries through innovation, quality, and unwavering commitment to our clients' success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be Kenya's premier diversified holding company, setting industry standards and contributing to sustainable economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and define our character across all our business ventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
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

      {/* Leadership */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leadership Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our experienced leadership team brings together decades of industry expertise, guiding OraGroup's strategic vision and operational excellence across all subsidiaries.
          </p>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card-soft max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Committed to Excellence
            </h3>
            <p className="text-muted-foreground text-lg">
              Our leadership team is dedicated to fostering innovation, maintaining the highest standards of quality, and ensuring sustainable growth across all our business ventures while contributing positively to Kenya's economic development.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;