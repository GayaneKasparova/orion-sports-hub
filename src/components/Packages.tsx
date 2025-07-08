import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      price: "39,000",
      period: "per month",
      icon: Zap,
      popular: false,
      features: [
        "Access to main gym",
        "Basic equipment usage",
        "Locker room access",
        "Free Wi-Fi",
        "Parking included"
      ],
      description: "Perfect for beginners starting their fitness journey"
    },
    {
      name: "Premium", 
      price: "59,000",
      period: "per month",
      icon: Star,
      popular: true,
      features: [
        "Everything in Starter",
        "Group fitness classes",
        "Boxing salon access",
        "Yoga studio access",
        "Monthly fitness assessment",
        "Nutrition consultation"
      ],
      description: "Most popular choice for serious fitness enthusiasts"
    },
    {
      name: "Elite",
      price: "89,000", 
      period: "per month",
      icon: Crown,
      popular: false,
      features: [
        "Everything in Premium",
        "Personal training sessions (4/month)",
        "Priority class booking",
        "Exclusive member events",
        "Massage therapy sessions",
        "Custom meal planning",
        "24/7 gym access"
      ],
      description: "Ultimate package for maximum results and luxury"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Membership </span>
            <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect membership package that fits your lifestyle and goals. 
            All packages include full access to our premium facilities.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative group transition-smooth hover:shadow-2xl animate-slide-up ${
                pkg.popular 
                  ? 'border-primary shadow-glow/30 scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                {/* Package Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-bounce">
                  <pkg.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Package Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">₽{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">{pkg.period}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </CardHeader>

              <CardContent>
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.2 + featureIndex * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-glow/80' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  Choose {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our team to create a personalized membership package 
              that perfectly fits your specific needs and budget.
            </p>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;