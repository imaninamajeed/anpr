#!/bin/bash

set -e

echo
echo "===================================================================================="
echo
echo "WARNING: FOR DEVELOPMENT PURPOSE ONLY! DO NOT USE OR COPY THIS SCRIPT TO PRODUCTION!"
echo
echo "===================================================================================="
echo

## Configure Variable (Need manual change)

## Variable auto init (No need change, auto generate)
# Ref: https://stackoverflow.com/questions/3404936/show-which-git-tag-you-are-on
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

source "$SCRIPT_DIR"/../.env
docker_image_reponame="${COMPOSE_PROJECT_NAME}/${project_dirname}"
echo "docker_image_reponame --> '$docker_image_reponame'"

## docker image version
git_version="$(git describe --tags --exact-match --match "v*.*.*" ||
    git describe --match "v*.*.*" --tags || git describe --tags || git rev-parse HEAD)"
current_frontend_tagname="$docker_image_reponame-frontend":"$git_version"
latest_frontend_tagname="$docker_image_reponame-frontend":latest

current_backend_tagname="$docker_image_reponame-backend":"$git_version"
latest_backend_tagname="$docker_image_reponame-backend":latest

echo "Building $current_frontend_tagname and $current_backend_tagname"

## Before process
# Update the submodule for later use
git submodule update --init --recursive

## Process
DOCKER_BUILDKIT=1 docker build -t "$current_frontend_tagname" "$SCRIPT_DIR"/../frontend/
DOCKER_BUILDKIT=1 docker build -t "$current_backend_tagname" "$SCRIPT_DIR"/../backend/

docker tag "$current_frontend_tagname" "$latest_frontend_tagname"
docker tag "$current_backend_tagname" "$latest_backend_tagname"

echo
echo "Finished docker build for all endpoints. Please check with: docker images"
