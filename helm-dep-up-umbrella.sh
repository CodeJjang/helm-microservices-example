#!/bin/bash

path=$1
cd $path
if [ -e requirements.yaml ]; then
  for subDir in $(awk -F'repository: file://' '{print $2}' requirements.yaml)
  do
    echo "Updating dependencies in "$(pwd)"/"$subDir" ..."
    helm dep up "$(pwd)"/"$subDir"
    echo
  done
  echo "Updating dependencies in "$(pwd)" ..."
  helm dep up "$(pwd)"
  echo
fi
