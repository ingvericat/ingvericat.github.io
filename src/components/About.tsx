"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Smartphone, Monitor, Tablet } from "lucide-react";

export function About() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Games",
      description: "Native iOS and Android games with stunning graphics and smooth gameplay."
    },
    {
      icon: Monitor,
      title: "Desktop Games",
      description: "PC and Mac games with immersive experiences and cutting-edge technology."
    },
    {
      icon: Tablet,
      title: "Cross-Platform",
      description: "Games that work seamlessly across all devices and platforms."
    },
    {
      icon: Gamepad2,
      title: "Game Design",
      description: "Complete game development from concept to publishing and beyond."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Why Choose Ingveri Cat?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&rsquo;re passionate game developers who combine creativity, technical expertise, and years of experience 
            to create games that players love across all platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Ingveri Cat, we believe games should be more than entertainment – they should be experiences 
              that bring joy, challenge minds, and connect people. Our team is dedicated to pushing the boundaries 
              of what&rsquo;s possible in game development while maintaining the highest standards of quality and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}