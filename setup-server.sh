#!/bin/bash

set -e

# >> ~/.bashrc
echo "" >>~/.bashrc
echo "# export IPv4 to env" >>~/.bashrc
echo "export DOCKER_GATEWAY_HOST=\$(hostname -I | awk '{ print \$1 }')" >>~/.bashrc
