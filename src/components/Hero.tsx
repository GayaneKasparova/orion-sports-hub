import { Button } from "@/components/ui/button";
import { Play, Dumbbell, Users, Award } from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroGym})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Transform Your</span>
            <br />
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Orion Sports Club and unlock your potential with world-class facilities, 
            expert trainers, and a community that supports your goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              <Dumbbell className="mr-2 h-5 w-5 group-hover:rotate-12 transition-bounce" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-bounce" />
              Watch Virtual Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group cursor-default hover:scale-105 transition-bounce">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-smooth">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>

            <div className="text-center group cursor-default hover:scale-105 transition-bounce">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-smooth">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>

            <div className="text-center group cursor-default hover:scale-105 transition-bounce">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-smooth">
                <Dumbbell className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">3</div>
              <div className="text-muted-foreground">Specialized Areas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;