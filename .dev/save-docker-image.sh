#!/bin/bash

set -e

docker save recogine/recocloud:backend-v0.1.0-deploy -o recogine--recocloud---backend-v0.1.0-deploy.tar
docker save recogine/recocloud:frontend-v0.1.0-deploy -o recogine--recocloud---frontend-v0.1.0-deploy.tar
