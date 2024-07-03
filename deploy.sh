#!/bin/bash

# Define variables
GIT_REPO_PATH="/path/to/your/git/repository"
HOSTING_SERVER_USER="master_aapafpvhxm"
HOSTING_SERVER="64.227.9.171"
HOSTING_SERVER_REPO_PATH="/applications/mcdyujfzrj/public_html"
COMMIT_MESSAGE="Your commit message"

# Change to the git repository directory
#cd $GIT_REPO_PATH || { echo "Failed tßo change directory to $GIT_REPO_PATH"; exit 1; }

# Install dependencies
#echo "Installing dependencies..."
#npm install || { echo "Failed to install dependencies"; exit 1; }

# Build the project
echo "Building the project..."
npm run build || { echo "Failed to build the project"; exit 1; }
echo "Build complete."

# Add changes to git
echo "Adding changes to git..."
git add . || { echo "Failed to add changes to git"; exit 1; }

# Commit changes
echo "Committing changes to git..."
git commit -m "$COMMIT_MESSAGE" || { echo "Failed to comit changes to git"; exit 1; }


# Push changes to git
echo "Pushing changes to git..."
git push || { echo "Failed to push changes to git"; exit 1; }

# Connect to the hosting server and pull the latest code
echo "Connecting to the hosting server and pulling the latest code..."
ssh "$HOSTING_SERVER_USER@$HOSTING_SERVER"
  cd 
  "$HOSTING_SERVER_REPO_PATH" || { echo "Failed to change directory to"; exit 1; }
  git pull || { echo "Failed to pull changes from git"; exit 1; }
  echo "Code updated on the hosting server."
EOF

echo "Deployment complete."