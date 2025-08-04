import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Fitness Street", "Yerevan, Armenia 0010"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+374 11 123 456", "+374 77 987 654"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@orionsports.am", "support@orionsports.am"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 6:00 - 23:00", "Sat-Sun: 8:00 - 21:00"]
    }
  ];

  const quickLinks = [
    { label: "About Club", href: "#about" },
    { label: "Our Trainers", href: "#trainers" },
    { label: "Membership", href: "#packages" },
    { label: "Promotions", href: "#promotions" },
    { label: "Class Schedule", href: "#schedule" },
    { label: "Contact", href: "#contacts" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/orion_sports_club", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/orionsportsclub", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/orionsportsclub", label: "YouTube" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold">
                <span className="text-foreground">ORI</span>
                <span className="text-primary">O</span>
                <span className="text-foreground">N</span>
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                SPORTS CLUB
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Transform your fitness journey with Orion Sports Club. 
              Professional training, modern facilities, and a supportive 
              community to help you achieve your goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/20 hover:text-primary transition-smooth"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm">{info.title}</h4>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-card/50 border border-border rounded-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest fitness tips, 
              class schedules, and exclusive member offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
              />
              <Button className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Orion Sports Club. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;