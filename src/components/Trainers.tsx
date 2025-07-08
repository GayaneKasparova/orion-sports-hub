import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users } from "lucide-react";
import trainerHero from "@/assets/trainer-hero.jpg";

const Trainers = () => {
  const trainers = [
    {
      name: "Alex Petrosyan",
      specialization: "Strength & Conditioning",
      experience: "8 years",
      certifications: ["ACSM", "NASM", "Olympic Lifting"],
      image: trainerHero,
      rating: 4.9,
      description: "Expert in powerlifting and strength training with Olympic experience.",
    },
    {
      name: "Maria Hakobyan",
      specialization: "Yoga & Wellness",
      experience: "6 years",
      certifications: ["RYT-500", "Meditation", "Pilates"],
      image: trainerHero,
      rating: 4.8,
      description: "Certified yoga instructor specializing in mindful movement and flexibility.",
    },
    {
      name: "David Grigoryan",
      specialization: "Boxing & Combat",
      experience: "10 years",
      certifications: ["Boxing Coach", "MMA", "Self Defense"],
      image: trainerHero,
      rating: 4.9,
      description: "Former professional boxer with extensive competition experience.",
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Expert </span>
            <span className="text-primary">Trainers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified trainers bring years of experience and passion to help you 
            achieve your fitness goals safely and effectively.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card 
              key={trainer.name}
              className="group bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-glow/20 hover:shadow-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Trainer Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-40 group-hover:opacity-20 transition-smooth"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {trainer.rating}
                  </Badge>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-accent/20 text-accent-foreground border-accent/30 backdrop-blur-sm">
                    <Award className="h-3 w-3 mr-1" />
                    {trainer.experience}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Trainer Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-smooth">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{trainer.specialization}</p>
                  <p className="text-muted-foreground text-sm mb-4">{trainer.description}</p>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <Badge 
                      key={cert} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto animate-scale-in">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Work with Our Experts?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a consultation with one of our certified trainers and create a 
              personalized fitness plan that works for you.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth shadow-glow hover:shadow-glow/80">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;