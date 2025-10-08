"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Star } from "lucide-react";

type Platform = "All" | "iOS" | "Android" | "Mobile" | "Desktop";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  platforms: Platform[];
  rating: number;
  downloads: string;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Platform>("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Mystic Adventures",
      description: "An immersive RPG adventure with stunning visuals and engaging storyline.",
      image: "https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTg0ODQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platforms: ["iOS", "Android", "Mobile"],
      rating: 4.8,
      downloads: "500K+"
    },
    {
      id: 2,
      title: "Space Commander",
      description: "Epic space battles and strategy gameplay for desktop platforms.",
      image: "https://images.unsplash.com/photo-1585844621420-c0c2f393ab71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwZ2FtZSUyMHNjcmVlbnNob3R8ZW58MXx8fHwxNzU5ODc1OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platforms: ["Desktop"],
      rating: 4.6,
      downloads: "100K+"
    },
    {
      id: 3,
      title: "Puzzle Master",
      description: "Brain-teasing puzzles designed specifically for iOS devices.",
      image: "https://images.unsplash.com/photo-1587573089283-f14c65841f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3MlMjBnYW1lJTIwYXBwfGVufDF8fHx8MTc1OTg3NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platforms: ["iOS"],
      rating: 4.9,
      downloads: "2M+"
    },
    {
      id: 4,
      title: "Racing Legends",
      description: "High-speed racing action optimized for Android devices.",
      image: "https://images.unsplash.com/photo-1632230940646-87c990756dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwZ2FtZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTk4NzU5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platforms: ["Android"],
      rating: 4.7,
      downloads: "1.5M+"
    },
    {
      id: 5,
      title: "Fantasy Kingdom",
      description: "Build and manage your own fantasy kingdom across all mobile platforms.",
      image: "https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTg0ODQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platforms: ["iOS", "Android", "Mobile"],
      rating: 4.5,
      downloads: "800K+"
    },
    {
      id: 6,
      title: "Code Breaker",
      description: "A challenging puzzle game that tests your logic and reasoning skills.",
      image: "https://images.unsplash.com/photo-1585844621420-c0c2f393ab71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwZ2FtZSUyMHNjcmVlbnNob3R8ZW58MXx8fHwxNzU5ODc1OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      platforms: ["Desktop"],
      rating: 4.4,
      downloads: "250K+"
    }
  ];

  const filters: Platform[] = ["All", "iOS", "Android", "Mobile", "Desktop"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.platforms.includes(activeFilter));

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Gaming Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of successful games across different platforms. 
            Each project represents our commitment to quality and innovation.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-primary hover:bg-primary-hover" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15, delay: index * 0.03 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-150 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-150"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                      <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {project.rating}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.platforms.map((platform) => (
                        <Badge key={platform} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {project.downloads} downloads
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-muted-foreground">
              No projects found for the selected platform.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}