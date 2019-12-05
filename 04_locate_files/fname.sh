#!/bin/bash
function fname {
  if [[ $# -gt 1  ]]; then
    path_name="$1"
    name="$2"
  else
    path_name="."
    name="$1"
  fi

  find $path_name -iname "*$name*"
}
