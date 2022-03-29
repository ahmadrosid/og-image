#!/usr/bin/bash

# firefox -v
# Mozilla Firefox 98.0.2
DEV_PORT="$(lsof -ti tcp:3000)"

if [ -z "${DEV_PORT}" ]
then
    echo "starting dev server"
    yarn dev &>/dev/null & disown;
fi

if [ "$1" == "potrait" ]
then
    echo "screenshot potrait image"
    firefox --no-remote --window-size 1080,1920 --screenshot http://localhost:3000/potrait
    mv screenshot.png potrait.png
else
    echo "screenshot landscape image"
    firefox --screenshot http://localhost:3000
    mv screenshot.png landscape.png
fi

echo "kill dev server pid:$DEV_PORT"
lsof -ti tcp:3000 | xargs kill 
