#!/bin/bash

# Excludes previous build
rm -rf dist/

# Copy all the modules
cp -r src dist

# Copy necessary extra files
cp LICENSE dist/LICENSE
cp package.json dist/package.json
cp README.md dist/README.md
