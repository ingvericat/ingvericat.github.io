"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-accent">

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Crafting <span className="text-primary">Extraordinary</span> Gaming Experiences
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Welcome to Ingveri Cat, where creativity meets technology. We develop stunning games for iOS, Android, Mobile, and Desktop platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio">
                <Button size="lg" className="bg-primary hover:bg-primary-hover">
                  View Our Games
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Animated Cat SVG */}
            <div className="relative">
              <motion.svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Cat body */}
                <motion.ellipse
                  cx="200"
                  cy="280"
                  rx="80"
                  ry="60"
                  fill="#ff6b35"
                  animate={{ 
                    ry: [60, 65, 60]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Cat head */}
                <motion.circle
                  cx="200"
                  cy="180"
                  r="70"
                  fill="#ff6b35"
                  animate={{ 
                    r: [70, 72, 70]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Cat ears */}
                <motion.polygon
                  points="150,130 170,90 190,130"
                  fill="#ff6b35"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.polygon
                  points="210,130 230,90 250,130"
                  fill="#ff6b35"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
                
                {/* Cat eyes */}
                <circle cx="175" cy="165" r="8" fill="#030213" />
                <circle cx="225" cy="165" r="8" fill="#030213" />
                <circle cx="177" cy="163" r="3" fill="white" />
                <circle cx="227" cy="163" r="3" fill="white" />
                
                {/* Cat nose */}
                <polygon points="200,185 195,195 205,195" fill="#d45020" />
                
                {/* Cat mouth */}
                <path d="M 200 195 Q 190 205 185 200" stroke="#030213" strokeWidth="2" fill="none" />
                <path d="M 200 195 Q 210 205 215 200" stroke="#030213" strokeWidth="2" fill="none" />
                
                {/* Cat tail */}
                <motion.path
                  d="M 120 280 Q 80 250 60 200 Q 50 180 70 160"
                  stroke="#ff6b35"
                  strokeWidth="20"
                  fill="none"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      "M 120 280 Q 80 250 60 200 Q 50 180 70 160",
                      "M 120 280 Q 85 245 65 195 Q 55 175 75 155",
                      "M 120 280 Q 80 250 60 200 Q 50 180 70 160"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating particles */}
                <motion.circle
                  cx="100"
                  cy="120"
                  r="3"
                  fill="#ff6b35"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.circle
                  cx="320"
                  cy="200"
                  r="2"
                  fill="#ff6b35"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.circle
                  cx="80"
                  cy="300"
                  r="4"
                  fill="#ff6b35"
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}