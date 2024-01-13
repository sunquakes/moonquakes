#!/bin/bash

set -e

host="$1"
port="$2"

until nc -z -v -w30 "$host" "$port"; do
  echo "Waiting for $host:$port to be available..."
  sleep 2
done

echo "$host:$port is available. Proceeding with the application startup."
