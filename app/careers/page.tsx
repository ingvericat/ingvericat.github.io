'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Unity Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'We are looking for an experienced Unity Developer to join our team and help us create amazing gaming experiences.',
      responsibilities: [
        'Develop and maintain game features using Unity Engine',
        'Write clean, maintainable, and efficient code',
        'Collaborate with designers and artists to implement game mechanics',
        'Optimize game performance for various platforms',
        'Debug and resolve technical issues',
        'Participate in code reviews and technical discussions',
        'Stay up-to-date with the latest Unity features and best practices'
      ],
      requirements: [
        '3+ years of experience with Unity development',
        'Strong knowledge of C# programming',
        'Experience with game physics, animation systems, and UI implementation',
        'Understanding of game design principles and best practices',
        'Experience with version control systems (Git)',
        'Ability to work both independently and as part of a team',
        'Good problem-solving skills and attention to detail',
        'English proficiency (written and verbal)'
      ],
      niceToHave: [
        'Experience with multiplayer/networking solutions',
        'Knowledge of shader programming',
        'Experience with mobile game development',
        'Familiarity with Agile/Scrum methodologies',
        'Published games in portfolio'
      ]
    },
    {
      id: 2,
      title: '3D Artist',
      type: 'Full-time',
      location: 'Remote',
      department: 'Art',
      description: 'Join our creative team as a 3D Artist and bring stunning visual elements to life in our games.',
      responsibilities: [
        'Create high-quality 3D models, textures, and materials for games',
        'Develop character models, props, and environments',
        'Work closely with the art director to maintain visual consistency',
        'Optimize 3D assets for real-time rendering in game engines',
        'Create UV maps and texture maps (diffuse, normal, specular, etc.)',
        'Collaborate with animators and technical artists',
        'Iterate on assets based on feedback and technical requirements'
      ],
      requirements: [
        '2+ years of experience as a 3D Artist in the gaming industry',
        'Proficiency in 3D modeling software (Blender, Maya, 3ds Max, or similar)',
        'Strong understanding of texturing and material creation',
        'Knowledge of PBR workflows',
        'Experience with game engines (Unity or Unreal Engine)',
        'Strong artistic skills and attention to detail',
        'Ability to work within technical constraints and performance budgets',
        'Portfolio demonstrating relevant work'
      ],
      niceToHave: [
        'Experience with sculpting tools (ZBrush, Mudbox)',
        'Knowledge of rigging and animation',
        'Experience with procedural generation tools (Substance Designer, Houdini)',
        'Understanding of lighting and rendering techniques',
        'Concept art or illustration skills'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re looking for talented individuals who are passionate about game development 
            and want to create amazing experiences together.
          </p>
        </div>

        {/* Job Listings */}
        <div className="max-w-5xl mx-auto space-y-8">
          {jobs.map((job) => (
            <Card key={job.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="text-base">{job.description}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="outline">{job.location}</Badge>
                    <Badge variant="outline">{job.department}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Responsibilities */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Requirements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Nice to Have */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Nice to Have</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {job.niceToHave.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <div className="pt-4">
                  <Button 
                    size="lg"
                    className="w-full md:w-auto"
                    onClick={() => window.location.href = `mailto:careers@ingvericat.com?subject=Application for ${job.title}`}
                  >
                    Apply for this position
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto mt-16 p-8 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="mr-4 text-2xl">🌍</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Remote Work</h3>
                <p className="text-gray-700">Work from anywhere in the world with flexible hours</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-2xl">📈</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Growth Opportunities</h3>
                <p className="text-gray-700">Continuous learning and career development</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-2xl">🎮</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Exciting Projects</h3>
                <p className="text-gray-700">Work on innovative and challenging game projects</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-2xl">👥</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Great Team</h3>
                <p className="text-gray-700">Collaborate with talented and passionate professionals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto mt-12 text-center">
          <p className="text-gray-600">
            Don&apos;t see a position that fits? Send us your CV anyway at{' '}
            <a href="mailto:careers@ingvericat.com" className="text-blue-600 hover:underline font-semibold">
              careers@ingvericat.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
