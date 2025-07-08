import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Heart, Trophy, Users } from "lucide-react";
import boxingArea from "@/assets/boxing-area.jpg";
import yogaStudio from "@/assets/yoga-studio.jpg";

const About = () => {
  const facilities = [
    {
      title: "Main Gym",
      description: "State-of-the-art equipment and professional training space for all fitness levels.",
      icon: Dumbbell,
      image: boxingArea,
    },
    {
      title: "Boxing Salon", 
      description: "Professional boxing training with experienced coaches and top-quality equipment.",
      icon: Trophy,
      image: boxingArea,
    },
    {
      title: "Yoga Studio",
      description: "Peaceful space for yoga, meditation, and mindfulness practices.",
      icon: Heart,
      image: yogaStudio,
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive fitness community where everyone belongs."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Committed to delivering the highest quality training and facilities."
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Focusing on holistic health - physical, mental, and emotional."
    },
    {
      icon: Dumbbell,
      title: "Performance",
      description: "Helping you achieve and exceed your personal fitness goals."
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="text-primary">Orion Sports Club</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a passion for fitness and community, Orion Sports Club has been 
            transforming lives through innovative training programs and world-class facilities.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <Card 
              key={facility.title} 
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth hover:shadow-glow/20 hover:shadow-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-60 group-hover:opacity-40 transition-smooth"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Core Values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple/20 rounded-full mb-4 group-hover:bg-purple/30 group-hover:scale-110 transition-bounce">
                <value.icon className="h-8 w-8 text-purple" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;