import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, ChevronRight } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Shop = () => {
  const headerAnimation = useScrollAnimation();
  const productsAnimation = useStaggeredAnimation(4, 0.2);
  const ctaAnimation = useScrollAnimation();

  const products = [
    {
      name: "Premium Protein Powder",
      category: "Supplements",
      price: "$49.99",
      originalPrice: "$59.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop",
      badge: "Best Seller"
    },
    {
      name: "Resistance Bands Set",
      category: "Equipment",
      price: "$24.99",
      originalPrice: "$34.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      badge: "Sale"
    },
    {
      name: "Yoga Mat Premium",
      category: "Equipment", 
      price: "$39.99",
      originalPrice: null,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
      badge: "New"
    },
    {
      name: "Pre-Workout Energy",
      category: "Supplements",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300&h=300&fit=crop",
      badge: "Popular"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Shop </span>
              <span className="text-primary">With Us</span>
            </h2>
            <Button variant="outline" className="hidden md:flex">
              View All Products <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of premium fitness equipment, supplements, 
            and accessories to enhance your training experience.
          </p>
        </div>

        {/* Products Grid */}
        <div 
          ref={productsAnimation.ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className={`group bg-background border-border hover:border-primary/50 transition-all duration-700 hover:shadow-glow/20 hover:shadow-2xl overflow-hidden ${
                productsAnimation.visibleItems.has(index)
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-20 transition-smooth"></div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <Badge 
                    className={`${
                      product.badge === 'Sale' ? 'bg-destructive/90 text-destructive-foreground' :
                      product.badge === 'New' ? 'bg-accent/90 text-accent-foreground' :
                      'bg-primary/90 text-primary-foreground'
                    } backdrop-blur-sm`}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                    <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                    {product.rating}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Product Info */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline">
            View All Products <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaAnimation.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <div className="bg-gradient-primary from-primary to-accent rounded-lg p-8 max-w-2xl mx-auto text-white">
            <ShoppingBag className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Free Shipping on Orders Over $75
            </h3>
            <p className="mb-6 opacity-90">
              Get your fitness essentials delivered right to your door. 
              Shop now and save on shipping costs!
            </p>
            <Button variant="hero" size="lg">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;