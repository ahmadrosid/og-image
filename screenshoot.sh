#!/usr/bin/bash

if [ "$1" == "potrait" ]
then
    firefox --no-remote --window-size 1080,1920 --screenshot http://localhost:3000/potrait
    mv screenshot.png potrait.png
else
    firefox --screenshot http://localhost:3000
    mv screenshot.png landscape.png
fi
