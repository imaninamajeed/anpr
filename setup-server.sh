#!/bin/bash

set -e
# shellcheck source=/home/rnd/.bashrc
source ~/.bashrc

echo "Setting up server..."
# >> ~/.bashrc
if [[ -z "${DOCKER_GATEWAY_HOST}" ]]; then
    echo "DOCKER_GATEWAY_HOST is not set!"
    echo "Proceed to setting up the variable..."

    echo "" >>~/.bashrc
    echo "# export IPv4 to env" >>~/.bashrc
    echo "export DOCKER_GATEWAY_HOST=\$(hostname -I | awk '{ print \$1 }')" >>~/.bashrc
else
    echo "DOCKER_GATEWAY_HOST had been set!"
fi
echo "DOCKER_GATEWAY_HOST is $DOCKER_GATEWAY_HOST"
echo "Done!"
