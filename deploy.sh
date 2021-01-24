#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run serve

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ozanisik/personelWebSite.git master:gh-pages

cd -