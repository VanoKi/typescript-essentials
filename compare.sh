#! /bin/bash
branch=$(git rev-parse --abbrev-ref HEAD)
echo "current branch is: $branch'"
echo "update data remote repo..."
git fetch origin
echo -e "\ncommits from local branch $branch:"
git log origin/$branch..$branch --oneline
echo -e "\ncommits in remote branch origin/$branch:"
git log $branch..origin/$branch --oneline

