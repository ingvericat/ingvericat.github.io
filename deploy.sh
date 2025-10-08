#!/bin/bash

# Build and deploy script for static Next.js site

echo "Building Next.js site..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful! Static files are in the 'out' directory."
    echo "You can deploy the contents of the 'out' directory to any static hosting service."
    
    # Copy .nojekyll to out directory for GitHub Pages
    cp .nojekyll out/.nojekyll
    echo ".nojekyll file copied for GitHub Pages compatibility"
    
    echo "Deployment ready!"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi