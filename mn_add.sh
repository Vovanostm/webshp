#!/bin/bash
./minimaze.sh
./git-add
echo "Write message for commit"
read MESS
git commit -m $MESS
git push webshp master
