#!/usr/bin/bash

# firefox -v
# Mozilla Firefox 98.0.2
DEV_PORT="$(lsof -ti tcp:3000)"
SHOULD_STOP=1

if [ -z "${DEV_PORT}" ]
then
    unset SHOULD_STOP
    echo "starting dev server"
    yarn dev &>/dev/null & disown;
fi

if [ "$1" == "potrait" ]
then
    echo "screenshot potrait image"
    firefox --no-remote --window-size 1080,1920 --screenshot http://localhost:3000/potrait
    mv screenshot.png potrait.png
elif [ "$1" == "square" ]
then
    echo "screenshot square image"
    firefox --no-remote --window-size 1080,1080 --screenshot http://localhost:3000/square
    mv screenshot.png square.png
else
    echo "screenshot landscape image"
    firefox --screenshot http://localhost:3000
    mv screenshot.png landscape.png
fi

if [ -z "${SHOULD_STOP}" ]
then
    echo "kill dev server pid:$(lsof -ti tcp:3000)"
    lsof -ti tcp:3000 | xargs kill
fi
