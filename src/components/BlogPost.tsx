import { ArrowLeft, Download, Play, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    author: string;
    date: string;
    category: string;
    image: string;
    content: Array<{
      type: string;
      data: any;
    }>;
  };
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const renderContent = (item: { type: string; data: any }) => {
    switch (item.type) {
      case "rich_text":
        return (
          <div 
            className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground"
            dangerouslySetInnerHTML={{ 
              __html: item.data.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
            }}
          />
        );

      case "image":
        return (
          <div className="my-8">
            <img 
              src={item.data.url} 
              alt={item.data.caption || "Blog image"}
              className="w-full rounded-lg shadow-lg"
            />
            {item.data.caption && (
              <p className="text-sm text-muted-foreground text-center mt-2 italic">
                {item.data.caption}
              </p>
            )}
          </div>
        );

      case "image_gallery":
        return (
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Gallery
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.data.map((image: any, index: number) => (
                <div key={index} className="space-y-2">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "people":
        return (
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Users className="w-5 h-5" />
              Meet the Team
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {item.data.map((person: any, index: number) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={person.image} alt={person.name} />
                        <AvatarFallback>{person.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{person.name}</h4>
                        <p className="text-primary font-medium">{person.role}</p>
                        <p className="text-sm text-muted-foreground mb-2">{person.experience}</p>
                        <p className="text-sm text-muted-foreground">{person.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "file_list":
        return (
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Download className="w-5 h-5" />
              Downloads
            </h3>
            <div className="space-y-3">
              {item.data.map((file: any, index: number) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{file.name}</p>
                          <p className="text-sm text-muted-foreground">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "video_external":
        return (
          <div className="my-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">External Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">URL: {item.data.url}</p>
              </div>
            </div>
          </div>
        );

      case "video_upload":
        return (
          <div className="my-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Uploaded Video Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">File: {item.data.filename}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>

        {/* Post Header */}
        <article className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {post.title}
            </h1>
            
            <div className="flex items-center text-muted-foreground">
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div className="space-y-6">
            {post.content.map((item, index) => (
              <div key={index}>
                {renderContent(item)}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}