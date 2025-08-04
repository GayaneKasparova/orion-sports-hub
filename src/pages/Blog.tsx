import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost } from "@/components/BlogPost";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock blog data with different content types
const mockBlogPosts = [
  {
    id: 1,
    title: "5 Essential Boxing Techniques for Beginners",
    excerpt: "Master these fundamental boxing moves to build a strong foundation in your training.",
    author: "Mike Johnson",
    date: "2024-01-15",
    category: "Boxing",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800",
    content: [
      {
        type: "rich_text",
        data: "Boxing is one of the most effective forms of exercise and self-defense. Whether you're looking to get in shape or learn to protect yourself, these five essential techniques will give you a solid foundation."
      },
      {
        type: "image",
        data: {
          url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800",
          caption: "Professional boxer training"
        }
      },
      {
        type: "rich_text",
        data: "1. **The Jab** - Your most important punch. Keep your guard up and extend your lead hand straight out."
      }
    ]
  },
  {
    id: 2,
    title: "Meet Our Training Team",
    excerpt: "Get to know the expert trainers who will guide your fitness journey.",
    author: "Sarah Wilson",
    date: "2024-01-10",
    category: "Team",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    content: [
      {
        type: "people",
        data: [
          {
            name: "Alex Rodriguez",
            role: "Head Boxing Trainer",
            experience: "10+ years",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            bio: "Former professional boxer with extensive coaching experience."
          },
          {
            name: "Maria Santos",
            role: "Yoga Instructor",
            experience: "8 years",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=400",
            bio: "Certified yoga instructor specializing in Hatha and Vinyasa styles."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Gym Facilities Tour",
    excerpt: "Take a virtual tour of our state-of-the-art facilities.",
    author: "David Kim",
    date: "2024-01-05",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    content: [
      {
        type: "image_gallery",
        data: [
          {
            url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
            caption: "Main workout area"
          },
          {
            url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
            caption: "Boxing training area"
          },
          {
            url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
            caption: "Yoga and meditation room"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Training Resources & Documents",
    excerpt: "Download our training guides and nutrition plans.",
    author: "Lisa Chen",
    date: "2024-01-01",
    category: "Resources",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    content: [
      {
        type: "file_list",
        data: [
          {
            name: "Beginner's Training Guide",
            type: "PDF",
            size: "2.3 MB",
            url: "#"
          },
          {
            name: "Nutrition Plan",
            type: "PDF",
            size: "1.8 MB",
            url: "#"
          },
          {
            name: "Workout Schedule Template",
            type: "Excel",
            size: "450 KB",
            url: "#"
          }
        ]
      }
    ]
  }
];

const categories = ["All", "Boxing", "Team", "Facilities", "Resources"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<typeof mockBlogPosts[0] | null>(null);

  const filteredPosts = selectedCategory === "All" 
    ? mockBlogPosts 
    : mockBlogPosts.filter(post => post.category === selectedCategory);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <BlogPost 
          post={selectedPost} 
          onBack={() => setSelectedPost(null)} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Fitness Blog & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert tips, training guides, and insights from our professional trainers
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>By {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}