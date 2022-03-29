#!/usr/bin/bash

# firefox -v
# Mozilla Firefox 98.0.2
DEV_PORT="$(lsof -ti tcp:3000)"

if [ -z "${DEV_PORT}" ]
then
    echo "start dev server"
    yarn dev &
fi

if [ "$1" == "potrait" ]
then
    firefox --no-remote --window-size 1080,1920 --screenshot http://localhost:3000/potrait
    mv screenshot.png potrait.png
else
    firefox --screenshot http://localhost:3000
    mv screenshot.png landscape.png
fi

kill $DEV_PORT
