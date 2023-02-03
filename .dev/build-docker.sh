#!/bin/bash

set -e

git_version="v0.1.0"

docker build -t recogine/recocloud:backend-v0.1.0-deploy backend/

docker build -t recogine/recocloud:frontend-v0.1.0-deploy frontend/
